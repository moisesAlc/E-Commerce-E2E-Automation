# Relatório de ocorrências — comparação Magebit × ScandiPWA

**Sessão:** 2026-08-09 (America/Sao_Paulo, -03)  
**Navegador:** Google Chrome 151.0.7922.108 (capturas headless / Playwright com o mesmo executável)  
**Método:** observação de UI + amostragem HTTP (3 tentativas independentes por URL, sem retry automático que oculte falha)  
**Escopo:** apenas problemas **reproduzidos ou comprovados** nesta sessão. Itens sem prova constam como “não foi possível comprovar”.

Metadados: [`evidencias/metadados-sessao.md`](evidencias/metadados-sessao.md).

---

## OCC-01 — Rota `/collections` retorna 404 (ScandiPWA)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-01 |
| **Título** | Página `/collections` apresenta 404 Page not found |
| **Ambiente** | ScandiPWA — https://luma-demo.scandipwa.com |
| **Pré-condições** | Acesso à internet; nenhuma autenticação |
| **Passos** | 1. Abrir `https://luma-demo.scandipwa.com/collections`. 2. Observar status HTTP e conteúdo da página. 3. Repetir total de 3 vezes. |
| **Resultado esperado** | Página de coleção/listagem disponível (HTTP 200 e conteúdo de catálogo), ou redirecionamento claro para rota válida. |
| **Resultado obtido** | HTTP **404** nas **3/3** tentativas. UI: título “Page not found”, texto “Sorry, we can’t find the page…”, botão “BACK TO HOMEPAGE”. |
| **Frequência** | 3 falhas / 3 tentativas — **determinístico** nesta sessão |
| **Evidência** | [`evidencias/http/log-http.md`](evidencias/http/log-http.md); `evidencias/scandipwa/02-collections.png`; `02-collections.txt` |
| **Contraste Magebit** | `https://magento2-demo.magebit.com/what-is-new.html` → HTTP **200** em 3/3, conteúdo de categoria |
| **Classificação** | Defeito funcional da aplicação (recurso/rota inexistente ou mal publicada) |
| **Severidade sugerida** | Alta (para roteiros que dependem dessa entrada de catálogo) |
| **Impacto na atividade do curso** | Impede validar navegação por “Collections” como passo estável; aluno pode interpretar erro próprio em vez de defeito do ambiente |

---

## OCC-02 — Add to Cart na UI não resulta em item no carrinho (ScandiPWA)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-02 |
| **Título** | Clique em ADD TO CART sem confirmação visível e sem item no carrinho |
| **Ambiente** | ScandiPWA — PDP `https://luma-demo.scandipwa.com/radiant-tee.html` |
| **Pré-condições** | PDP Radiant Tee carregada; opções Color=Blue e Size=M selecionáveis |
| **Passos** | 1. Abrir a PDP. 2. Selecionar Color Blue e Size M. 3. Clicar em ADD TO CART. 4. Observar feedback na PDP. 5. Abrir `/cart`. 6. Repetir o fluxo completo 3 vezes (sessões de página novas). |
| **Resultado esperado** | Feedback de sucesso na UI e/ou item Radiant Tee no carrinho com quantidade/preço. |
| **Resultado obtido** | Seleção OK (SKU exibido `WS12-M-Blue`). Clique ATC executado. **Sem** toast/mensagem de sucesso observável (`visibleToast=false`). Em `/cart`: **0 items**, subtotal **US$ 0,00**; produto não listado. Em 1 tentativa, spinner no centro do carrinho com summary já zerado. |
| **Frequência** | 0 sucessos de carrinho UI / 3 tentativas — falha **determinística** nesta sessão |
| **Evidência** | [`evidencias/atc-probes.md`](evidencias/atc-probes.md), [`atc-probes.json`](evidencias/atc-probes.json); `scandipwa/08-atc-attempt-1..3.png`; `09-cart-after-atc-attempt-1..3.png` |
| **Contraste Magebit** | Mesmo tipo de fluxo na PDP Echo Fit: mensagem “You added Echo Fit…”, carrinho com item e $24.00 em **3/3** |
| **Classificação** | Defeito funcional da aplicação (UI); não se afirma aqui estado de API — **somente interface** |
| **Severidade sugerida** | Crítica para testes funcionais de carrinho |
| **Impacto na atividade do curso** | Bloqueia o fluxo compra na interface; impede evidenciar qty/preço/subtotal; gera falso negativo se o aluno seguir o roteiro padrão |

---

## OCC-03 — Checkout inacessível / sem formulário após tentativa de ATC (ScandiPWA)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-03 |
| **Título** | Checkout sem formulário de endereço após ATC pela UI |
| **Ambiente** | ScandiPWA — `https://luma-demo.scandipwa.com/checkout` |
| **Pré-condições** | Execução prévia dos passos de OCC-02 (carrinho UI sem item) |
| **Passos** | 1. Após ATC, abrir `/checkout`. 2. Verificar presença de campos de endereço/entrega. 3. Repetir em cada uma das 3 tentativas de ATC. |
| **Resultado esperado** | Formulário de checkout (ou mensagem clara de carrinho vazio impedindo checkout). |
| **Resultado obtido** | Tentativas 1 e 2: formulário de First Name/Shipping **não** localizado (`checkoutHasForm=false`). Tentativa 3: ver OCC-04 (502). Compra **não** realizada. |
| **Frequência** | Formulário ausente em 2/3; 1/3 falhou por gateway |
| **Evidência** | `atc-probes.json`; `scandipwa/10-checkout-after-atc-attempt-*.png` |
| **Contraste Magebit** | `/checkout/` após ATC exibiu Email/First Name/Street etc. em **3/3** |
| **Classificação** | Falha de carregamento da interface / consequência do carrinho UI vazio |
| **Severidade sugerida** | Alta |
| **Impacto na atividade do curso** | Impede praticar validação de formulário de checkout na UI |

---

## OCC-04 — Cloudflare 502 no checkout (ScandiPWA)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-04 |
| **Título** | Bad gateway (HTTP 502) ao abrir checkout |
| **Ambiente** | ScandiPWA — host `luma-demo.scandipwa.com` via Cloudflare |
| **Pré-condições** | Ter navegado até a tentativa 3 do fluxo ATC→checkout |
| **Passos** | 1. Abrir `/checkout` no contexto da tentativa 3. 2. Observar a página retornada. |
| **Resultado esperado** | Página de checkout da loja (HTTP 200) ou mensagem funcional da aplicação. |
| **Resultado obtido** | Página Cloudflare: **“Bad gateway”**, **Error code 502**, timestamp **2026-08-09 17:02:37 UTC**, diagrama Browser/Cloudflare Working e Host Error, Ray ID **a288545e4a860c5f**. |
| **Frequência** | **1 ocorrência comprovada** entre as 3 aberturas de checkout pós-ATC nesta sessão. Nas amostras HTTP isoladas de `/checkout` (antes do fluxo ATC), 3/3 foram 200 — logo o 502 é **intermitente**, não constante. |
| **Evidência** | `evidencias/scandipwa/10-checkout-after-atc-attempt-3.png`; log textual em `atc-probes.md` |
| **Contraste Magebit** | Nenhuma página 502 observada nas URLs Magebit amostradas (todas HTTP 200) |
| **Classificação** | Erro de servidor ou gateway |
| **Severidade sugerida** | Alta (bloqueia o passo no momento da falha) |
| **Impacto na atividade do curso** | Quebra a repetibilidade; aluno pode perder a janela da atividade por indisponibilidade externa |

---

## OCC-05 — Texto “Image not found” na PDP Radiant Tee (ScandiPWA)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-05 |
| **Título** | PDP exibe a string “Image not found” |
| **Ambiente** | ScandiPWA — `/radiant-tee.html` |
| **Pré-condições** | Abrir a PDP |
| **Passos** | 1. Abrir a PDP. 2. Extrair texto visível da página. |
| **Resultado esperado** | Galeria/imagem do produto sem mensagem de erro de mídia. |
| **Resultado obtido** | Corpo textual contém **“Image not found”** junto ao título Radiant Tee / SKU WS12. A captura PNG também mostra área de imagem do produto — há **ambiguidade visual** vs texto de erro. |
| **Frequência** | Observado na captura documentada da PDP (1 registro textual explícito). Repetição dedicada 3× só para essa string: **não foi possível comprovar** frequência além desse registro. |
| **Evidência** | `scandipwa/04-pdp-radiant-tee.txt`; `04-pdp-radiant-tee.png` |
| **Contraste Magebit** | PDP Echo Fit sem mensagem “Image not found” na observação correspondente |
| **Classificação** | Falha de carregamento da interface / recurso de mídia (parcialmente comprovado) |
| **Severidade sugerida** | Média |
| **Impacto na atividade do curso** | Dificulta critérios de aceite sobre imagem do produto |

---

## OCC-06 — Lentidão do endpoint GraphQL (complementar; ScandiPWA)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-06 |
| **Título** | `POST /graphql` storeConfig ~30 s no ScandiPWA vs ~1 s no Magebit |
| **Ambiente** | Ambos (complementar à UI) |
| **Pré-condições** | Cliente HTTP simples (`curl`) |
| **Passos** | 1. `POST` `{storeConfig{store_name}}` em `/graphql`. 2. Medir HTTP e tempo. 3. Três tentativas por ambiente. |
| **Resultado esperado** | Resposta em tempo razoável para uso de vitrine. |
| **Resultado obtido** | Magebit: HTTP 200, **~0,9–1,0 s** (3/3). ScandiPWA: HTTP 200, **~29–30 s** (3/3). |
| **Frequência** | Lentidão **determinística** nas 3 amostras ScandiPWA desta medição |
| **Evidência** | [`evidencias/http/log-graphql-complementar.md`](evidencias/http/log-graphql-complementar.md) |
| **Contraste Magebit** | Mesma query ~30× mais rápida nesta sessão |
| **Classificação** | Lentidão |
| **Severidade sugerida** | Média (não prova sozinha falha de botão ATC) |
| **Impacto na atividade do curso** | Se a UI depende de GraphQL, aumenta espera e risco de timeout percebido pelo aluno |

---

## OCC-07 — Diferença de rótulos no cadastro (observação; não é falha de submit)

| Campo | Conteúdo |
|---|---|
| **ID** | OCC-07 |
| **Título** | Formulários de criação de conta com labels/botões diferentes |
| **Ambiente** | Ambos |
| **Pré-condições** | Abrir páginas de create account |
| **Passos** | 1. Abrir create account em cada ambiente. 2. Registrar campos e botão principal. **Sem envio** nesta sessão. |
| **Resultado esperado** | Formulário utilizável e compreensível. |
| **Resultado obtido** | Magebit: botão **“Create an Account”**; confirmação `password_confirmation` / id `password-confirmation`. ScandiPWA: botão **“SIGN UP”**; confirmação `confirm_password`; cookie “GOT IT”. Ambos HTTP 200 3/3 na abertura. |
| **Frequência** | Diferença estável na observação única documentada por ambiente |
| **Evidência** | `magebit/04-create-account.png`, `10-create-account-fields.png`; `scandipwa/05-create-account.png`, `12-create-account-fields.png`; `nav-e-cadastro.json` |
| **Classificação** | Diferença de implementação/UX (não classificado como defeito sem critério de igualdade de rótulos) |
| **Severidade sugerida** | Baixa (para comparação) / informativa |
| **Impacto na atividade do curso** | Exige ajustar o roteiro de passos; submit **não comprovado** |

---

## Ocorrências deliberadamente não registradas como defeito

| Tema | Motivo |
|---|---|
| Confirmação de pedido / thank-you | **Fluxo não testado** (compra não realizada). |
| “ScandiPWA sempre retorna 502 na home” | **Não comprovado** nesta sessão (home 200 em 3/3). |
| Menu COLLECTIONS clicável | Texto aparece na home; localização do link falhou em 3/3 — registrado como limitação da sessão, não como prova de href. A prova forte de catálogo quebrado permanece OCC-01 (URL direta). |
| Estado da API Magento após ATC ScandiPWA | **Fora do escopo de evidência de UI**; não inventado. |

---

## Resumo quantitativo (esta sessão)

| Fluxo UI ATC → carrinho → form checkout | Magebit | ScandiPWA |
|---|---|---|
| Tentativas | 3 | 3 |
| Sucesso (item no carrinho UI) | **3** | **0** |
| Form checkout visível | **3** | **0** (2 sem form + 1× 502) |
