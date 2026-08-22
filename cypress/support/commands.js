// Overlay de passo para vídeos de demonstração (visível na página sob teste).

Cypress.Commands.add("passo", (texto, ms = 1200) => {
  cy.document({ log: false }).then((doc) => {
    let el = doc.getElementById("demo-passo");
    if (!el) {
      el = doc.createElement("div");
      el.id = "demo-passo";
      Object.assign(el.style, {
        position: "fixed",
        top: "16px",
        left: "16px",
        zIndex: "2147483647",
        background: "rgba(0, 0, 0, 0.88)",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: "8px",
        font: "600 16px/1.35 system-ui, sans-serif",
        maxWidth: "min(420px, 90vw)",
        boxShadow: "0 4px 16px rgba(0,0,0,.35)",
        pointerEvents: "none",
      });
      doc.body.appendChild(el);
    }
    el.textContent = texto;
  });
  cy.wait(ms, { log: false });
});
