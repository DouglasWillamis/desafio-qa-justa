Feature: Compra de produtos no site Saucedemo
  Como um cliente, quero poder comprar produtos no site Saucedemo
  para que eu possa ter o produto em minha posse.

  Background:
    Given eu estou na página de produtos
  Scenario: Compra de uma camisa vermelha
    When eu escolho o produto "Test.allTheThings() T-Shirt (Red)" na lista de produtos
    And eu clico no botão "Add to cart" na página do produto
    And eu clico no botão "Checkout" na minha cesta de compras
    And eu preencho as informações de entrega com o meu nome, endereço e informações de pagamento
    And eu clico no botão "Finish" para finalizar a compra
    Then eu devo ser redirecionado para a página de confirmação de compra com a mensagem "THANK YOU FOR YOUR ORDER"
  Scenario: Compra de uma bolsa
    When eu escolho o produto "Sauce Labs Backpack" na lista de produtos
    And eu clico no botão "Add to cart" na página do produto
    And eu clico no botão "Checkout" na minha cesta de compras
    And eu preencho as informações de entrega com o meu nome, endereço e informações de pagamento
    And eu clico no botão "Finish" para finalizar a compra
    Then eu devo ser redirecionado para a página de confirmação de compra com a mensagem "THANK YOU FOR YOUR ORDER"
  Scenario: Ordenação e compra dos dois produtos menores
    When eu clico na opção de ordenação na barra de navegação e escolho a opção "Price (low to high)"
    And eu adiciono os dois primeiros produtos na lista ordenada à minha cesta de compras
    And eu clico no botão "Checkout" na minha cesta de compras
    And eu preencho as informações de entrega com o meu nome, endereço e informações de pagamento
    And eu clico no botão "Finish" para finalizar a compra
    Then eu devo ser redirecionado para a página de confirmação de compra com a mensagem "THANK YOU FOR YOUR ORDER"