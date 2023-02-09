class CheckoutCompletePage {

    elements = {
        title: () => cy.get('span.title'),
        textCheckoutComplete: () => cy.get('h2.complete-header')
    };
}

export const checkoutCompletePage = new CheckoutCompletePage();