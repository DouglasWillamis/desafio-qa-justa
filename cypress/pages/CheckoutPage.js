class CheckoutPage {
    elements = {
        title: () => cy.get('span.title'),
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueBtn: () => cy.get('[data-test="continue"]')
    };

    fillForm(firstName, lastName, postalCode) {
        this.elements.firstName().type(firstName);
        this.elements.lastName().type(lastName);
        this.elements.postalCode().type(postalCode);
    }

    goToCheckoutOverview() {
        this.elements.continueBtn().click();
    }
}

export const checkoutPage = new CheckoutPage();