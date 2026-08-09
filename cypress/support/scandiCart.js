/**
 * Sync a Magento guest cart id into ScandiPWA BrowserDatabase / storage.
 * Without this, GraphQL-added items never appear in /cart or /checkout.
 */

const STORAGE_KEYS = [
  "guest_quote_id",
  "guest_cart_id",
  "guestCartId",
  "cart_id",
  "cartId",
  "cart",
];

function writeLocalKeys(win, cartId) {
  STORAGE_KEYS.forEach((key) => {
    try {
      win.localStorage.setItem(key, cartId);
      win.sessionStorage?.setItem?.(key, cartId);
    } catch (_) {
      /* ignore quota / private mode */
    }
  });
}

/**
 * Best-effort IndexedDB write used by ScandiPWA BrowserDatabase.
 * ScandiPWA historically stores guest_quote_id in IndexedDB DB "redux" (or app name).
 */
function writeIndexedDb(win, cartId) {
  return new Promise((resolve) => {
    if (!win.indexedDB) {
      resolve(false);
      return;
    }

    const dbNames = ["redux", "scandipwa", "app", "BrowserDatabase"];
    let remaining = dbNames.length;
    let wrote = false;

    const done = () => {
      remaining -= 1;
      if (remaining <= 0) resolve(wrote);
    };

    dbNames.forEach((dbName) => {
      let req;
      try {
        req = win.indexedDB.open(dbName);
      } catch (_) {
        done();
        return;
      }

      req.onerror = () => done();
      req.onsuccess = () => {
        const db = req.result;
        const stores = Array.from(db.objectStoreNames || []);
        if (!stores.length) {
          db.close();
          done();
          return;
        }

        // Prefer a store that looks like key-value (data / keyvalue / browserDatabase)
        const storeName =
          stores.find((s) => /data|key|browser|store/i.test(s)) || stores[0];

        try {
          const tx = db.transaction(storeName, "readwrite");
          const store = tx.objectStore(storeName);
          STORAGE_KEYS.forEach((key) => {
            try {
              // Common shapes: value directly, or { data: value }
              store.put(cartId, key);
              store.put({ data: cartId }, key);
            } catch (_) {
              /* ignore */
            }
          });
          tx.oncomplete = () => {
            wrote = true;
            db.close();
            done();
          };
          tx.onerror = () => {
            db.close();
            done();
          };
        } catch (_) {
          db.close();
          done();
        }
      };
    });
  });
}

Cypress.Commands.add("syncScandiCartId", (cartId) => {
  expect(cartId, "cartId to sync").to.be.a("string").and.not.be.empty;

  cy.window().then((win) => {
    writeLocalKeys(win, cartId);

    // Some builds expose BrowserDatabase on window / require modules.
    try {
      if (win.BrowserDatabase?.setItem) {
        STORAGE_KEYS.forEach((key) => {
          win.BrowserDatabase.setItem(cartId, key);
        });
      }
    } catch (_) {
      /* ignore */
    }

    return cy.wrap(writeIndexedDb(win, cartId), { log: false });
  });
});
