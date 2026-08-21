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

- [ ] Mapear a lista fechada de cenários (CT601 …) e o que cada um cobre / não cobre
- [ ] Validar manualmente cada cenário no Magebit (caminho existe e é estável o bastante)
- [ ] Combinar donos (quem fica com qual CT — sem sobreposição)
- [ ] Definir escopo mínimo de cada CT (asserts, critério de “pronto”)
- [ ] Só então cada pessoa cria a branch `ct-N-nome` e segue [Contribuindo](#-contribuindo)

## 📖 Visão geral

Suíte de testes automatizados com **Cypress** para um site de e-commerce.  
O alvo atual é o demo público Magento Luma em [magento2-demo.magebit.com](https://magento2-demo.magebit.com/) (substituto do `magento.softwaretestingboard.com`, descontinuado).

Os scripts cobrem o **carrinho de compras** (adição, alteração de quantidade e remoção) — CT601 a CT603.

> Fluxos de cadastro/compra e a especificação completa de testes ficam na branch `apoio`.

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

1. Veja os cenários existentes na tabela acima (CT601–CT603).
2. Combine com o grupo qual será o **seu CT** (ex.: CT604 checkout, busca…).
3. Anote um identificador alinhado à especificação (ex.: `CT604`).

### 3. Criar a branch do seu cenário

Use um nome claro, em minúsculas, com o número do CT:

```bash
git checkout -b ct-604-checkout
# exemplos: ct-605-cupom, ct-101-busca
```

### 4. Implementar o cenário

Na sua branch, em geral você vai:

1. Criar o spec: `cypress/e2e/tests/ctNNN.cy.js`
2. Criar page object / fixture se precisar
3. Rodar e validar localmente com Cypress

Siga o padrão dos CT60X atuais: asserts claros sobre a UI do Magebit.

### 5. Validar localmente

```bash
npx cypress open
# ou
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
- o que o fluxo cobre;
- como rodar o teste.

### Boas práticas

- Não altere o cenário de outro colega sem combinar.
- Mantenha a `main` atualizada (`git pull`) antes de abrir o PR.
- Prefira commits pequenos e mensagens claras (padrão do repositório).

## 👥 Autores

- [@moisesAlc](https://github.com/moisesAlc)
- Original: [@Tahamidul Haque](https://github.com/tahmid888)
