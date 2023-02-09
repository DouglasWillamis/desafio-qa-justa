class CheckoutOverviewPage {

    elements = {
        title: () => cy.get('span.title'),
        finishBtn: () => cy.get('[data-test="finish"]')
    };

    checkout() {
        this.elements.finishBtn().click();
    }
}

export const checkoutOverviewPage = new CheckoutOverviewPage();