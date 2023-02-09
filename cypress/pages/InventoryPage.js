class InventoryPage {
    elements = {
        title: () => cy.get('span.title'),
        productName: (productName) => cy.contains('div.inventory_item_name', productName),
        sortSelect: () => cy.get('[data-test="product_sort_container"]'),
        products: () => cy.get('div.inventory_item')
    };

    goToProduct(productName) {
        this.elements.productName(productName).parent('a').click();
    }

    selectOrder(order) {
        this.elements.sortSelect().select(order);
    }

    addToCartByIndex(index) {
        this.elements.products()
            .eq(index)
            .find('button.btn_inventory')
            .click();
    }

}

export const inventoryPage = new InventoryPage();