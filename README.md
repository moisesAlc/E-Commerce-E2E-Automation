# E-Commerce Website - Cypress Automation Test

## Visão geral

Este projeto é uma suíte de testes automatizados para um site de e-commerce usando Cypress. A suíte aponta para o demo público ScandiPWA em [luma-demo.scandipwa.com](https://luma-demo.scandipwa.com/) (frontend PWA sobre dados Magento Luma).

Os scripts cobrem cadastro de conta e um fluxo de compra (coleções → produto → carrinho → checkout).

> **Nota:** o demo público pode responder com Cloudflare **502** ou ficar lento no GraphQL. A suíte usa retries e timeouts altos por causa disso.

## Instalação

Clone o repositório:

```bash
  git clone https://github.com/moisesAlc/E-Commerce-E2E-Automation.git
```

Entre no diretório do projeto:

```bash
  cd E-Commerce-E2E-Automation
```

Instale as dependências:

```bash
  npm install
```

## Cenários de teste

- Conta do usuário: cadastro via `/customer/account/create`.
- Navegação: Collections (equivalente prático ao antigo What’s New).
- Carrinho e checkout: produto configurável (Radiant Tee), opções, quantidade e compra como guest.

## Executando os testes

Abrir o Cypress Test Runner:

```bash
  npx cypress open
```

Rodar os testes em modo headless:

```bash
  npx cypress run
```

Scripts npm disponíveis:

```bash
  npm test
  npm run test:signUp
  npm run test:whatsNew
```

## Cobertura de testes

- Cadastro de cliente (mutation GraphQL `createCustomer`).
- Página de coleções e PDP do Radiant Tee.
- Seleção de cor/tamanho, adição ao carrinho e checkout guest.

## Relatórios

Após a execução, artefatos do Cypress (quando gerados) ficam em `cypress/screenshots` e `cypress/videos`.

## Contribuindo

Contribuições são bem-vindas!

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature/sua-feature`).
3. Faça o commit das alterações (`git commit -m 'Add your feature'`).
4. Envie a branch (`git push origin feature/sua-feature`).
5. Abra um pull request.

## Autores

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
