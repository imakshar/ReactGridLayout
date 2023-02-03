/// <reference types="Cypress" />
describe("spec", () => {
  it("should loads the app", () => {
    cy.visit("/");
  });

  it("should render sigin form", () => {
    cy.visit("/");
    cy.get("[data-cy=signinLabelCy]").should("be.visible");
  });

  it("should able to login and redirect to dashboard", () => {
    cy.visit("/");
    cy.get("[data-cy=usernameInput]").type("admin");
    cy.get("[data-cy=passwordInput]").type("admin");
    cy.get("[data-cy=submitButton").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/home`);
  });

  it("should throw invalid error snackbar", () => {
    cy.visit("/");
    cy.get("[data-cy=usernameInput]").type("test");
    cy.get("[data-cy=passwordInput]").type("test");
    cy.get("[data-cy=submitButton").click();
    cy.get("[data-cy=snackbar").should("be.visible");
  });

  it("sholud logout successfully", () => {
    cy.visit("/");
    cy.get("[data-cy=usernameInput]").type("admin");
    cy.get("[data-cy=passwordInput]").type("admin");
    cy.get("[data-cy=submitButton").click();
    cy.get("[data-cy=logout]").click();
  });
});
