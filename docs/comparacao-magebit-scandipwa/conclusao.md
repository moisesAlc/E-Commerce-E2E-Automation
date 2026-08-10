# Conclusão profissional — Magebit Magento × ScandiPWA Luma

**Contexto:** atividade de Fundamentos de QA (análise exploratória / evidências), não avaliação de frameworks de automação.  
**Base:** somente fatos coletados em **2026-08-09** nos demos públicos Magebit e ScandiPWA, com registro em [`matriz-comparativa.md`](matriz-comparativa.md), [`relatorio-ocorrencias.md`](relatorio-ocorrencias.md) e [`evidencias/`](evidencias/).

---

## 1. Diferenças comprovadas

1. **Fluxo de compra na interface (categoria crítica para o curso)**  
   No Magebit, o caminho *selecionar opções → Add to Cart → ver item no carrinho → abrir checkout com formulário* foi **bem-sucedido em 3/3** tentativas, com mensagem explícita de adição e linha de produto no carrinho.  
   No ScandiPWA, o mesmo tipo de caminho na PDP Radiant Tee resultou em **0/3** com item no carrinho na UI: o botão foi acionado, **não houve feedback de sucesso observável**, e `/cart` permaneceu em **0 items / US$ 0,00** (OCC-02, OCC-03).

2. **Navegação de catálogo por URL de coleções**  
   `https://luma-demo.scandipwa.com/collections` retornou **HTTP 404** e UI “Page not found” em **3/3** (OCC-01).  
   No Magebit, a entrada de novidades `/what-is-new.html` retornou **HTTP 200** em **3/3**.

3. **Disponibilidade pontual com erro de gateway**  
   Foi comprovado **um** episódio de **Cloudflare 502** ao abrir o checkout ScandiPWA (OCC-04), com timestamp e Ray ID.  
   Na mesma sessão, a **home** ScandiPWA e as amostras HTTP isoladas de várias rotas (incluindo `/checkout` antes do fluxo ATC) responderam **200** — portanto **não** se afirma indisponibilidade permanente da home.

4. **Lentidão de backend GraphQL (evidência complementar)**  
   A mesma consulta `storeConfig` respondeu em ~**1 s** (Magebit) versus ~**29–30 s** (ScandiPWA), ambas HTTP 200 em 3/3 (OCC-06). Isso **não** substitui a prova de falha do botão ATC, mas ajuda a explicar esperas longas na experiência do front PWA.

5. **Diferenças de interface de formulário/cadastro**  
   Labels e botões diferem (“Create an Account” × “SIGN UP”; nomes de campos de confirmação de senha). O **submit** do cadastro **não foi comprovado** nesta sessão (OCC-07).

6. **Confirmação de pedido**  
   **Não foi possível comprovar** comportamento de thank-you/success nos dois ambientes, pois **não houve compra real**.

---

## 2. Problemas que impedem ou dificultam os testes manuais

| Necessidade típica do roteiro manual | Situação comprovada |
|---|---|
| Navegar até uma coleção conhecida | `/collections` no ScandiPWA falha com 404 determinístico nesta sessão |
| Validar Add to Cart pela tela | ScandiPWA: sem mensagem e sem item no carrinho em 3/3 |
| Conferir carrinho (nome, qty, preço) | ScandiPWA: carrinho UI vazio / zerado após ATC |
| Preencher checkout | ScandiPWA: formulário não apareceu; ainda houve 502 em 1 tentativa |
| Repetir o mesmo caso três vezes | Magebit repetível; ScandiPWA repetiu a **falha** de carrinho UI |

Esses pontos afetam diretamente a capacidade do aluno de aplicar o ciclo **resultado esperado × resultado obtido** com evidência de tela.

---

## 3. Por que isso pode comprometer a avaliação

- A avaliação de Fundamentos de QA depende de **observar comportamentos da aplicação** e registrar desvios. Se o ambiente **não completa o fluxo de interface**, a evidência do aluno passa a misturar **defeito do demo** com possível erro de execução do roteiro.  
- Ambiente com **falha determinística no carrinho UI** e **404 em rota de catálogo** reduz a equidade: quem usa ScandiPWA nesta condição **não consegue** produzir o mesmo conjunto de evidências positivas de compra que quem usa Magebit.  
- Eventos **intermitentes de gateway (502)** introduzem variabilidade fora do controle do aluno, prejudicando prazos e a comparação justa entre entregas.

---

## 4. Por que o Magebit oferece melhores condições para testes funcionais de interface

Com base **apenas** nesta sessão:

- Respostas HTTP **200** consistentes nas URLs de home, categoria, PDP, cadastro, carrinho e checkout amostradas.  
- Controles de opção (swatches) e Add to Cart com **efeito visível** e carrinho populado.  
- Checkout com **formulário de endereço exibido**, permitindo inspecionar campos sem concluir compra.  
- Repetibilidade **3/3** no fluxo ATC→carrinho→checkout (UI).

Isso não afirma que o Magebit seja “livre de defeitos” em geral — apenas que, **para testes manuais de interface do fluxo de compra**, apresentou condições objetivamente mais favoráveis **neste período de observação**.

---

## 5. Limitações da comparação

1. **Janela temporal única** (2026-08-09): demos públicos mudam; resultados podem diferir em outro dia/horário.  
2. **Produtos diferentes** (Echo Fit × Radiant Tee): o contraste é de *capacidade do ambiente para completar um fluxo configurável típico*, não de A/B do mesmo SKU.  
3. **Cadastro:** formulários observados; **submit não executado** — sucesso/falha de criação de conta **não comprovados**.  
4. **Pedido/confirmação:** **não testados** (sem compra).  
5. **API Magento** após clique ATC no ScandiPWA: **não usada como prova** de funcionamento da UI (conforme escopo).  
6. Ferramenta de captura headless nativa do Chrome **travou** em várias URLs ScandiPWA; as evidências de UI desse ambiente foram obtidas com Playwright + Chrome — limitação de ferramenta, registrada nos metadados, sem alterar as conclusões de HTTP/ATC já medidas.  
7. Não se inclui o antigo `softwaretestingboard` nesta análise.

---

## 6. Encerramento

A comparação, respaldada por logs HTTP, screenshots e três repetições do fluxo de carrinho, demonstra que o **ScandiPWA apresentou problemas significativamente maiores no caminho funcional de interface (carrinho/checkout) e na rota `/collections`**, além de **lentidão GraphQL** e **ao menos um 502 de gateway**, enquanto o **Magebit permitiu concluir e repetir o fluxo UI de adicionar produto e iniciar o checkout**.  

Para uma disciplina de Fundamentos de QA centrada em evidência de tela e reprodutibilidade, o **Magebit Magento** oferece, nesta sessão, **melhores condições objetivas** para a execução dos testes manuais de interface. Qualquer escolha de ambiente em atividade avaliativa deveria considerar essas limitações comprovadas e a necessidade de roteiros alternativos caso o ScandiPWA permaneça como alvo.
