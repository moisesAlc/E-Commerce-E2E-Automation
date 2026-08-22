# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [Unreleased]

### Alterado
- Escopo da `main` restrito à suíte de carrinho **CT601–CT603** (Fusion Backpack / minicart no Magebit).
- README alinhado aos CT60X (padrão Cypress direto, `baseUrl`, adaptação Magebit vs spec em `apoio`); cadastro/compra e especificação completa ficam na branch `apoio`.
- Specs passam a abrir a home com `cy.visit('/')`, usando o `baseUrl` de [`cypress.config.js`](cypress.config.js).
- Clique em **Add to Cart** nos três specs espera o botão visível e habilitado (`.and('not.be.disabled')`).

### Removido
- Specs, page objects e fixtures de cadastro/compra (`signUpForm`, `whatsNew`) da `main` (preservados em `apoio`).
- [`docs/fluxos.md`](docs/fluxos.md) da `main` (preservado em `apoio`).
- Scripts npm `test:signUp` e `test:whatsNew`.
- Comandos customizados `cy.login` e `cy.registerAccount`.
- `env.URL` (página de Create Account) em `cypress.config.js`.

## [1.1.0] - 2026-08-07

### Alterado
- Migrou a suíte Cypress do alvo descontinuado `magento.softwaretestingboard.com` para o demo público Magento Luma em [magento2-demo.magebit.com](https://magento2-demo.magebit.com/).
- Atualizou as URLs do repositório para [moisesAlc/E-Commerce-E2E-Automation](https://github.com/moisesAlc/E-Commerce-E2E-Automation).
- Substituiu URLs absolutas do Magento por seletores relativos e navegação baseada em `baseUrl`.
- Estabilizou o checkout abrindo `/checkout/` diretamente quando o CTA do carrinho é instável no demo Magebit.
- Passou a validar a compra pelo histórico de pedidos do cliente, porque o demo Magebit costuma redirecionar para um carrinho vazio em vez de `/checkout/onepage/success`.
- Atualizou as fixtures de envio para um endereço dos EUA com região explícita, para um checkout Magento mais confiável.

### Adicionado
- Geração de e-mail único nos fluxos de cadastro e compra, para as execuções não dependerem de credenciais compartilhadas do demo.
- Comando customizado `cy.registerAccount` para criar um cliente autenticado antes dos testes de compra.
- Scripts npm: `test`, `test:signUp` e `test:whatsNew`.
- Timeouts do Cypress ajustados para o checkout Magento (`defaultCommandTimeout`, `pageLoadTimeout`).
- Entradas no `.gitignore` para `cypress/screenshots`, `cypress/videos` e `cypress/downloads`.

### Corrigido
- Tratamento de senha/confirmação de senha e asserção da mensagem de sucesso no page object de cadastro.
- Seleção do produto Echo Fit Compression Short (não é mais o primeiro item da coleção Yoga).
- Seleção de tamanho/cor via swatches do Magento, em vez de IDs frágeis do demo antigo.

### Removido
- Credenciais de login fixas nas fixtures.
- Screenshots de falha do Cypress versionados no repositório.
