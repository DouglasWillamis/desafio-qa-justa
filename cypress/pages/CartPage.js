class CartPage {
    elements = {
        title: () => cy.get('span.title'),
        cartBtn: () => cy.get('a.shopping_cart_link'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        cartBadge: () => cy.get('span.shopping_cart_badge')
    };

    goToCart() {
        this.elements.cartBtn().click();
    }

    checkout() {
        this.elements.checkoutBtn().click();
    }
}

export const cartPage = new CartPage();