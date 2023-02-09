class ProductPage {
    elements = {
        productName: () => cy.get('div.inventory_details_name.large_size'),
        addToCartBtn: () => cy.get('button.btn_inventory'),
    };

    addToCart() {
        this.elements.addToCartBtn().click();
    }
}

export const productPage = new ProductPage();