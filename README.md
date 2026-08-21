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

### ✅ Checklist do grupo (antes de abrir branches)

- [ ] Mapear a lista fechada de cenários (#CT-1 … #CT-?) e o que cada um cobre / não cobre
- [ ] Validar manualmente cada cenário no Magebit (caminho existe e é estável o bastante)
- [ ] Combinar donos (quem fica com qual CT — sem sobreposição)
- [ ] Definir escopo mínimo de cada CT (asserts, fixtures, critério de “pronto”)
- [ ] Documentar os novos CTs em [`docs/fluxos.md`](docs/fluxos.md)
- [ ] Atualizar a tabela da equipe com nomes e papéis reais
- [ ] Só então cada pessoa cria a branch `ct-N-nome` e segue [Contribuindo](#-contribuindo)

## 📖 Visão geral

Suíte de testes automatizados com **Cypress** para um site de e-commerce.  
O alvo atual é o demo público Magento Luma em [magento2-demo.magebit.com](https://magento2-demo.magebit.com/) (substituto do `magento.softwaretestingboard.com`, descontinuado).

Os scripts cobrem **cadastro de conta** e **compra logada** (catálogo → carrinho → checkout → pedido).

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

## 🧭 Cenários de teste (fluxos E2E)

| Spec | CT | O que faz |
|------|----|-----------|
| `signUpForm.cy.js` | #CT-1 | 👤 Cadastro de nova conta |
| `whatsNew.cy.js` | #CT-2 | 🛍️ Compra logada (catálogo → checkout → pedido) |

📄 Descrição detalhada de cada cenário: [`docs/fluxos.md`](docs/fluxos.md).

## ▶️ Executando os testes

🖥️ Abrir o Cypress Test Runner:

```bash
npx cypress open
```

🤖 Rodar em modo headless:

```bash
npx cypress run
```

📜 Scripts npm:

```bash
npm test                 # suíte completa
npm run test:signUp      # só #CT-1
npm run test:whatsNew    # só #CT-2
```

## 📊 Relatórios

Após a execução, artefatos do Cypress (quando gerados) ficam em `cypress/screenshots` e `cypress/videos`.

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

1. Veja os cenários existentes em [`docs/fluxos.md`](docs/fluxos.md).
2. Combine com o grupo qual será o **seu CT** (ex.: login, busca, carrinho…).
3. Anote um identificador: `#CT-3`, `#CT-4`, etc. (não reutilize `#CT-1` / `#CT-2`).

### 3. Criar a branch do seu cenário

Use um nome claro, em minúsculas, com o número do CT:

```bash
git checkout -b ct-3-login
# exemplos: ct-4-busca, ct-5-carrinho, ct-6-checkout-guest
```

### 4. Implementar o cenário

Na sua branch, em geral você vai:

1. Criar o spec: `cypress/e2e/tests/<nomeDoCenario>.cy.js`
2. Criar/atualizar page object: `cypress/pages/<nome>Page.js`
3. Criar fixture, se precisar: `cypress/fixtures/<nome>Data.json`
4. Adicionar script no `package.json`, se fizer sentido: `"test:<nome>": "npx cypress run --spec ..."`
5. Documentar o CT em [`docs/fluxos.md`](docs/fluxos.md) e, se quiser, marcar seu nome na tabela da equipe no README.

Siga o padrão dos cenários atuais (`signUpForm` / `whatsNew`): Page Object + fixture + asserts claros.

### 5. Validar localmente

```bash
npx cypress open
# ou
npm run test:<seu-script>
```

### 6. Commit, push e Pull Request

```bash
git add .
git commit -m "Adicionar cenário #CT-3 Login."
git push -u origin ct-3-login
```

Abra um **Pull Request** de `ct-3-login` → `main` no GitHub, descrevendo:

- qual CT é;
- o que o fluxo cobre;
- como rodar o teste.

### Boas práticas

- Não altere o cenário de outro colega sem combinar.
- Mantenha a `main` atualizada (`git pull`) antes de abrir o PR.
- Prefira commits pequenos e mensagens claras (padrão do repositório).

## 👥 Autores

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
