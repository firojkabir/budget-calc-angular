/// <reference types="cypress" />

describe("budget calculator", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("should display lists of incomes & expenses", () => {
        //Incomes
        cy.get("#input-amount").type(500)
        cy.get("#input-description").type("Salary")
        cy.contains("button", "Add").click()
        cy.get("#input-amount").type(200)
        cy.get("#input-description").type("Extra income")
        cy.contains("button", "Add").click()

        //Expenses
        cy.get("#input-amount").type(-400)
        cy.get("#input-description").type("House rent")
        cy.contains("button", "Add").click()
        cy.get("#input-amount").type(-150)
        cy.get("#input-description").type("Utility cost")
        cy.contains("button", "Add").click()
        cy.get("#input-amount").type(-200)
        cy.get("#input-description").type("Monthly cost")
        cy.contains("button", "Add").click()

        //Update income
        cy.contains("Salary").click()
        cy.get('app-edit-item-modal.ng-star-inserted > app-add-item-form > form.ng-pristine > .is-horizontal > .field-body > :nth-child(1) > .control > #input-amount').clear().type(800)
        cy.get('form.ng-dirty > .is-horizontal > .field-body > :nth-child(2) > .control > #input-description').clear().type("Salary with bonus")
        cy.contains("button", "Save").click()

        //Update expense
        cy.contains("House rent").click()
        cy.get('app-edit-item-modal.ng-star-inserted > app-add-item-form > form.ng-pristine > .is-horizontal > .field-body > :nth-child(1) > .control > #input-amount').clear().type(-475)
        cy.get('form.ng-dirty > .is-horizontal > .field-body > :nth-child(2) > .control > #input-description').clear().type("Increased house rent")
        cy.contains("button", "Save").click()
    })
})
