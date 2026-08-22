# 🛒 E-Commerce Website — Cypress Automation Test

![Quality Masters](docs/assets/grupo.png)

## 👥 Equipe Quality Masters

> *Testamos hoje • Garantimos qualidade • Entregamos confiança*  
> Squad de QA

| Nome |
|------|
| Antonio Barbosa |
| Caroline Cortat |
| Gabriela Salustiano |
| Giovanna Rodrigues |
| Matheus Santos |
| Moisés Madeira |
| Paula Botelho |

## 📖 Visão geral

Suíte de testes automatizados com **Cypress** para um site de e-commerce.  
O alvo da `main` é o demo Magento Luma em [magento2-demo.magebit.com](https://magento2-demo.magebit.com/) (substituto do `magento.softwaretestingboard.com`, descontinuado).

Escopo atual: **carrinho** (adição, alteração de quantidade e remoção) — **CT601 a CT603**, com Cypress direto na UI (sem Page Object).

A URL do demo fica em `baseUrl` no [`cypress.config.js`](cypress.config.js); os specs usam `cy.visit('/')`.

> Cadastro, compra ponta a ponta e a especificação completa do Squad (incl. cenários não automatizados) ficam na branch **`apoio`**. Os IDs CT60X da especificação foram **adaptados** ao Magebit (produto/minicart); não são cópia 1:1 do demo ScandiPWA do documento.

## 🧰 Pré-requisitos

Instale e confira as ferramentas abaixo **antes** do `npm install`:

| Ferramenta | Versão recomendada | Observação |
|------------|--------------------|------------|
| 🔧 **Git** | 2.40+ (qualquer 2.x recente) | Necessário para clonar o repositório |
| 🟢 **Node.js** | **20 LTS** ou **22 LTS** (`>= 18`) | Cypress 13 exige Node.js 18 ou superior |
| 📦 **npm** | **10.x** (vem com o Node 20/22) | Usado para instalar dependências e rodar scripts |

Versões usadas com sucesso neste projeto:

- Node.js `v22.22.2`
- npm `10.9.7`
- Git `2.43.x`

Dependência do projeto (via `package.json`):

- 🧪 **Cypress** `^13.15.0` (instalado com `npm install`)

Como conferir no terminal:

```bash
git --version
node -v
npm -v
```

## ⚙️ Instalação

1️⃣ Clone o repositório:

```bash
git clone https://github.com/moisesAlc/E-Commerce-E2E-Automation.git
```

2️⃣ Entre no diretório do projeto:

```bash
cd E-Commerce-E2E-Automation
```

3️⃣ Instale as dependências (inclui o Cypress):

```bash
npm install
```

## 🧭 Cenários de teste (carrinho)

| Spec | CT | O que faz |
|------|----|-----------|
| `ct601.cy.js` | CT601 | Adicionar Fusion Backpack ao carrinho |
| `ct602.cy.js` | CT602 | Alterar quantidade no minicart |
| `ct603.cy.js` | CT603 | Remover produto do minicart |

Padrão comum nos três: abrir a home via `baseUrl`, abrir a PDP da Fusion Backpack e só clicar em **Add to Cart** quando o botão estiver visível e **habilitado**.

## ▶️ Executando os testes

🖥️ Abrir o Cypress Test Runner:

```bash
npx cypress open
```

🤖 Rodar a suíte completa (CT601–CT603) em modo headless:

```bash
npm test
# ou
npx cypress run
```

Um spec isolado:

```bash
npx cypress run --spec cypress/e2e/tests/ct601.cy.js
```

## 📊 Relatórios

Após a execução, artefatos do Cypress (quando gerados) ficam em `cypress/screenshots` e `cypress/videos`.

Histórico de mudanças: [`CHANGELOG.md`](CHANGELOG.md).

> ⚠️ **Atenção:** o fluxo de contribuição (um CT por pessoa / uma branch / um PR) só funciona bem se os cenários já estiverem **mapeados e validados** no Magebit. Sem isso, há risco de branches sobrepostas, fluxos frágeis e retrabalho nos PRs. Use o checklist da seção da equipe antes de começar.

## 🤝 Contribuindo

Cada integrante da **Quality Masters** trabalha em **um cenário (CT)** por vez, em uma branch própria, e abre um Pull Request para a `main`.

### 1. Preparar o ambiente

1. Confira os [pré-requisitos](#-pré-requisitos) (Git, Node, npm).
2. Clone o repositório (ou atualize o seu clone):

```bash
git clone https://github.com/moisesAlc/E-Commerce-E2E-Automation.git
cd E-Commerce-E2E-Automation
git checkout main
git pull origin main
npm install
```

### 2. Escolher o cenário

1. Veja os cenários existentes na tabela acima (CT601–CT603).
2. Combine com o grupo o próximo CT (ex.: CT604 checkout no Magebit).
3. Valide o fluxo **manualmente no Magebit** antes de automatizar (a especificação em `apoio` pode descrever outro demo).

### 3. Criar a branch do seu cenário

```bash
git checkout -b ct-604-checkout
# exemplos: ct-605-cupom, ct-607-persistencia-carrinho
```

### 4. Implementar o cenário

Na sua branch:

1. Crie o spec em `cypress/e2e/tests/ctNNN.cy.js`.
2. Siga o padrão dos CT60X: Cypress direto na UI, `cy.visit('/')` (via `baseUrl`), asserts claros.
3. Em ações de carrinho, espere elementos interagíveis (ex.: botão **Add to Cart** não disabled).
4. Não dependa de Page Object / fixtures a menos que o grupo combine o contrário.

### 5. Validar localmente

```bash
npx cypress open
# ou
npx cypress run --spec cypress/e2e/tests/ctNNN.cy.js
npm test
```

### 6. Commit, push e Pull Request

```bash
git add .
git commit -m "Adicionar cenário CT604 checkout."
git push -u origin ct-604-checkout
```

Abra um **Pull Request** de `ct-604-checkout` → `main` no GitHub, descrevendo:

- qual CT é;
- o que o fluxo cobre no Magebit;
- como rodar o teste.

### Boas práticas

- Não altere o cenário de outro colega sem combinar.
- Mantenha a `main` atualizada (`git pull`) antes de abrir o PR.
- Prefira commits pequenos e mensagens claras (padrão do repositório).
- Atualize o [`CHANGELOG.md`](CHANGELOG.md) quando a mudança for relevante.

## 👥 Autores

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
