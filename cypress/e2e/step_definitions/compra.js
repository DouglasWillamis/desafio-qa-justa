import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker';
import {loginPage} from '@pages/LoginPage';
import {inventoryPage} from '@pages/InventoryPage';
import {productPage} from '@pages/ProductPage';
import {cartPage} from '@pages/CartPage';
import {checkoutPage} from "@pages/CheckoutPage";
import {checkoutOverviewPage} from "@pages/CheckoutOverviewPage";
import {checkoutCompletePage} from "@pages/CheckoutCompletePage";

Given("eu estou na página de produtos", () => {
    cy.visit("/");
    loginPage.submitLogin(Cypress.env('login').username, Cypress.env('login').password);
    inventoryPage.elements.title().should('have.text', 'Products');
});

When("eu escolho o produto {string} na lista de produtos", (camisa) => {
    inventoryPage.goToProduct(camisa);
    productPage.elements.productName().should('have.text', camisa);
});

When("eu clico no botão {string} na página do produto", (btnText) => {
    productPage.elements.addToCartBtn().should('have.text', btnText);
    productPage.addToCart();
});

When("eu clico no botão {string} na minha cesta de compras", (btnText) => {
    cartPage.goToCart();
    cartPage.elements.title().should('have.text', 'Your Cart');
    cartPage.elements.checkoutBtn().should('have.text', btnText);
    cartPage.checkout();
})

When("eu preencho as informações de entrega com o meu nome, endereço e informações de pagamento", () => {
    checkoutPage.fillForm(faker.name.firstName(), faker.name.lastName(), faker.address.zipCode());
    checkoutPage.elements.title().should('have.text', 'Checkout: Your Information');
    checkoutPage.goToCheckoutOverview();
})

When("eu clico no botão {string} para finalizar a compra", (btnText) => {
    checkoutOverviewPage.elements.title().should('have.text', 'Checkout: Overview');
    checkoutOverviewPage.elements.finishBtn().should('have.text', btnText);
    checkoutOverviewPage.checkout();
})

Then("eu devo ser redirecionado para a página de confirmação de compra com a mensagem {string}", (successText) => {
    checkoutCompletePage.elements.title().should('have.text', 'Checkout: Complete!');
    checkoutCompletePage.elements.textCheckoutComplete().should('have.text', successText);
})

When("eu clico na opção de ordenação na barra de navegação e escolho a opção {string}", (ordem) => {
    inventoryPage.selectOrder(ordem);
})

When("eu adiciono os dois primeiros produtos na lista ordenada à minha cesta de compras", () => {
    inventoryPage.addToCartByIndex(0);
    inventoryPage.addToCartByIndex(1);
    cartPage.elements.cartBadge().should('have.text', 2);
})