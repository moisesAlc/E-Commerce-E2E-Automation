import "./commands";

// ScandiPWA demo occasionally throws unhandled promise rejections in headless Electron.
Cypress.on("uncaught:exception", () => false);
