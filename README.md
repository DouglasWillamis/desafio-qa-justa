# Aplicação Cypress para processo seletivo na justa pagamentos

Repositório com testes automatizados para WEB utilizando o framework: Cypress

> Testando e validando a plataforma SauceDemo com
[Cypress](https://www.cypress.io/)

## Índice

- [Pré-requisitos](#pre-requisitos)
- [Configuração](#configuracao)
- [Instalação](#instalacao)
- [Execução](#execucao)


---

## <a id="pre-requisitos"></a>Pré-requisitos

- [Ter o node LTS](https://nodejs.org/en/download/)
- [Ter o VSCode ou outra IDE](https://code.visualstudio.com/download)

## <a id="configuracao"></a>Configuração

##### Instalação do Node
- Windows, Linux e Mac: https://www.freecodecamp.org/news/how-to-install-node-in-your-machines-macos-linux-windows/

## <a id="instalacao"></a>Instalação

> Clonar o projeto

- Clone este repositório para sua máquina local usando http ou ssh, por exemplo:

`git clone git@github.com:DouglasWillamis/desafio-qa-justa.git`

- Instale todas as dependências utilizando npm:

`cd desafio-qa-justa/`

`npm install -D`

![Baixe as dependências via npm](https://verdaccio.org/pt-BR/assets/images/npm_install-16c1331c7b4bd69e473e02f27b9b9619.gif)

## <a id="execucao"></a>Execução

> Execução interativa

- Para executar o cypress em modo gráfico é só utilizar o comando abaixo no terminal

`npm run test`

> Execução não interativa

- Para executar o cypress em modo headless é só utilizar o comando abaixo no terminal

`npm run cy:run-specs`

> Notas

- Comando para ver os reports gerados para o allure `allure serve` (comando deve ser rodado na pasta raiz do projeto)