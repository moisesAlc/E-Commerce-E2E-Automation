# Changelog

Todas as mudanças relevantes deste projeto são documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [1.2.0] - 2026-08-07

### Alterado
- Migrou a `baseUrl` de `magento2-demo.magebit.com` para [luma-demo.scandipwa.com](https://luma-demo.scandipwa.com/).
- Reescreveu page objects/commands para o frontend ScandiPWA (campos `name`, selects `#color`/`#size`, botões `Add to cart` / `Sign up`).
- Substituiu o fluxo “What’s New” (inexistente no ScandiPWA) por Collections + produto Radiant Tee.
- Passou o fluxo de compra para guest checkout, evitando dependência do cadastro sob 502 intermitente.
- Aumentou timeouts/retries para lidar com lentidão e erros Cloudflare do demo público.

### Adicionado
- `cy.healthcheck` / `cy.gql` com retry em HTTP 502/503/504 e falha rápida com mensagem clara.
- `cy.visitWithRetry` para navegações HTTP 502/503/504.
- `cy.selectScandiOption` para FieldSelect (evita `pointer-events: none` no `<select>` nativo).
- Fallback GraphQL `addConfigurableProductsToCart` quando o clique de Add to Cart não dispara mutation.
- `cy.syncScandiCartId` / `cy.placeGuestOrderGraphql` quando o storefront não sincroniza o carrinho guest.
- Retry dedicado de `createCustomer` em 502 (até 3 tentativas) no signup.
- Asserts duros de carrinho (UI ou GraphQL) e `order_number` após `placeOrder`.
- Comando `cy.acceptCookies` para o banner “Got it”.
- Asserção do cadastro via resposta GraphQL `createCustomer`.

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
