

**Especificação de Testes**

**Professor:** Francisco Gutenberg			**Squad 03 \- Quality Masters**  
**Orientador(a):** Niêdja Kaliene			Antonio Guilherme Gomes Barbosa  
Caroline da Silva Cortat  
Gabriela Kassia da Silva Salustiano

Giovanna Coelho Rodrigues

Matheus Silva dos Santos

Moisés Alcântara Madeira

Paula Cristina Couto Botelho

**Julho / 2026**

**Histórico de Revisões:**

| Data | Versão | Descrição | Autor |
| :---- | :---- | :---- | :---- |
| 20/07/2026 | 0.1 | Estruturação do documento  | Caroline Cortat |
| 27/07/2026 | 0.2 | Elaboração de casos e cenários de teste  | Caroline Cortat |

**Sumário** 

1\. Introdução ….…………………………………………………………….……………………………………………...………4  
 1.1 Identificação do documento………………………………………………………………………..………………4  
1.2 Escopo..................................................……..……………………………………………..………………….5  
1.3 Referências Internas...…………………………………………………………………………………….………….…5  
1.4 Notação para especificações…………………….....……………………………………………….…………..5  
2\. Especificação de Casos de Teste ……………………………………………………….…………………….….6 

1. **Introdução**

**1.1 Identificador do Documento:** 

**Nome Projeto:** Luma – Magento E-Commerce  
**Versão Atual do Documento:** 0.2  
*Documento aprovado e emitido em 01 de agosto de 2026\.*

**Equipe Responsável:** 

* Antonio Guilherme Gomes Barbosa  
* Caroline da Silva Cortat  
* Gabriela Kassia da Silva Salustiano  
* Giovanna Coelho Rodrigues  
* Matheus Silva dos Santos  
* Moisés Alcântara Madeira  
* Paula Cristina Couto Botelho

**1.2 Escopo:**

O Luma \- Magento e-commerce trata-se de um simulador de loja on-line, open source, que oferece para usuário uma demonstração de uso de um site de compras de materiais esportivos. O sistema possibilita realizar navegação pela home do site e simula diversas funcionalidades próprias de um e-commerce, tais como realizar o cadastro de conta, efetuar login, adicionar produtos ao carrinho, adicionar produto à lista de desejos, realizar busca, finalizar uma compra, escrever avaliação, etc. Com isto, pessoas com interesse em verificar o funcionamento de um e-commerce tem a oportunidade de fazê-lo.

**1.3 Referências Internas:**

Documento 1: Plano de Testes (Disponível em: 01/08/2026)

**1.4 Notação para Especificações:**

\- Para representar o ID dos casos de teste iremos usar sigla CT (Caso de Teste) acompanhado de seu ID. Ex.: CT001.

\- Para representar o ID dos cenários iremos utilizar apenas a numeração simples. Ex.: 01\. 

Template que será seguido: 

**CENÁRIO XX – Nome do Cenário** 

| ID | CTXXX  |
| :---- | :---- |
| **Autor(a)** | Nome do profissional responsável pela criação do cenário.  |
| **Nome do CT** | Nome do caso de teste que será especificado.  |
| **Prioridade** | Prioridade com que o caso de teste deve ser tratado.  |
| **Ambiente** | Local e estrutura onde os testes serão realizados.  |
| **Pré-condições** | O que deve é necessário para que a tarefa seja realizada. |
| **Dados de Entrada** | Dados que o testador deve fornecer ao sistema.  |
| **Passo a passo** | Passo a passo que o testador deve seguir  |
| **Resultado Esperado** | O que é esperado que o sistema retorne após a ação.  |
| **Resultado Atual** | Resultado que o sistema exibiu após os testes.  |
| **Observação** | Observação que o testador pode fazer.  |

2. **Especificação dos casos de testes**

**CENÁRIO 01 – Pesquisa de produtos** 

|   ID |   CT101  |
| :---- | :---- |
|  **Autor(a):**  |  Gabriela Kassia da Silva Salustiano  |
|  **Nome do CT:**  |  Validar pesquisa utilizando o nome completo de um produto  |
|  **Prioridade:**  |  Alta  |
|  **Ambiente**  |  Chrome (última versão) / Windows 10  |
|  **Pré-Condições**   | O usuário deve estar na página inicial do sistema.   A barra de pesquisa deve estar disponível.    |
|  **Dados de entrada**   |  Produto: "Fusion Backpack"  |
|  **Passo a Passo**  |   Acessar a página inicial.   Clicar na barra de pesquisa.   Digitar "Fusion Backpack".   Clicar na lupa ou pressionar Enter.    |
|  **Resultado esperado**  |   O sistema deve exibir o produto pesquisado na lista de resultados.  |
|  **Resultado Atual**  |   |
|  **Status**  |   |
|  **Observação**  |   |

| ID  |  CT102  |
| :---- | ----- |
|  **Autora**  |  Gabriela Kassia da Silva Salustiano  |
|  **Nome do CT**  |  Validar pesquisa utilizando parte do nome do produto  |
|  **Ambiente**  |  Chrome (última versão) / Windows 10  |
|  **Prioridade**  |  Alta  |
|  **Pré-condições**  | O usuário deve estar na página inicial do sistema.   A barra de pesquisa deve estar disponível.  |
|  **Dados de entrada**  |  Fusion  |
|  **Passo a passo**  | Acessar a página inicial do sistema.   Clicar na barra de pesquisa.   Digitar "Fusion".   Pressionar Enter ou clicar na lupa.  |
|  **Resultado esperado**  |  O sistema deve exibir todos os produtos que  contenham a palavra "Fusion" no nome.  |
|  **Resultado Atual**  |   |
|  **Status**  |   |
|  **Observação**  |   |

 

 

| ID | CT103  |
| :---- | :---- |
|  **Autora**  |  Gabriela Kassia da Silva Salustiano  |
|  **Nome do CT**  |  Validar pesquisa com produto inexistente  |
|  **Ambiente**  |  Chrome (última versão) / Windows 10  |
|  **Prioridade**  |  Alta  |
|  **Pré-condições**  | O usuário deve estar na página inicial do sistema.   A barra de pesquisa deve estar disponível    |
|  **Dados de entrada**  | Notebook Gamer XYZ  |
|  **Passo a passo**  | Acessar a página inicial do sistema.   Clicar na barra de pesquisa.   Digitar "Notebook Gamer XYZ".   Pressionar Enter ou clicar na lupa.  |
|  **Resultado esperado**  | O sistema deve informar que nenhum produto foi encontrado para a pesquisa realizada  |
|  **Resultado Atual**  |   |
|  **Status**  |   |
|  **Observação**  |   |

| ID |  CT104  |
| :---- | ----- |
|  **Autora**  |  Gabriela Kassia da Silva Salustiano  |
|  **Nome do CT**  |  Validar pesquisa utilizando caracteres  especiais  |
|  **Ambiente**  |  Chrome (última versão) / Windows 10  |
|  **Prioridade**  |  Média  |
|  **Pré-condições**  | O usuário deve estar na página inicial do sistema.   A barra de pesquisa deve estar disponível    |
|  **Dados de entrada**  |   @\#$%  |
|  **Passo a passo**  | Acessar a página inicial do sistema.   Clicar na barra de pesquisa.   Digitar "@\#$%".   Pressionar Enter ou clicar na lupa.  |
|  **Resultado esperado**  | O sistema não deve apresentar falhas e deve informar que nenhum produto foi encontrado, caso não existam resultados.  |
|  **Resultado Atual**  |   |
|  **Status**  |   |
|  **Observação**  |   |

**CENÁRIO 02 – Ordenação de Produtos**

| ID | CT201 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por Best Match |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Best Match |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar a opção "Best Match".4\. Aguardar a atualização da listagem.5\. Verificar a opção exibida no seletor e a estabilidade da listagem. |
| **Resultado Esperado** | O sistema deve aplicar o critério Best Match, manter a opção selecionada visível e atualizar a listagem sem erros ou alteração indevida da quantidade de produtos. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT202 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por nome de A a Z |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Name: A to Z |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar "Name: A to Z".4\. Aguardar a atualização da listagem.5\. Comparar os nomes dos produtos do primeiro ao último item exibido. |
| **Resultado Esperado** | Os produtos devem ser apresentados em ordem alfabética crescente pelo nome, considerando a sequência A-Z. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT203 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por nome de Z a A |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Name: Z to A |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar "Name: Z to A".4\. Aguardar a atualização da listagem.5\. Comparar os nomes dos produtos do primeiro ao último item exibido. |
| **Resultado Esperado** | Os produtos devem ser apresentados em ordem alfabética decrescente pelo nome, considerando a sequência Z-A. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT204 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por preço do menor para o maior |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Price: Low to High |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar "Price: Low to High".4\. Aguardar a atualização da listagem.5\. Comparar os preços dos produtos na ordem em que são exibidos. |
| **Resultado Esperado** | Os produtos devem ser apresentados em ordem crescente de preço, do menor para o maior valor. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT205 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por preço do maior para o menor |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Price: High to Low |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar "Price: High to Low".4\. Aguardar a atualização da listagem.5\. Comparar os preços dos produtos na ordem em que são exibidos. |
| **Resultado Esperado** | Os produtos devem ser apresentados em ordem decrescente de preço, do maior para o menor valor. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT206 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por marca em ordem crescente |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Brand: Ascending |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar "Brand: Ascending".4\. Aguardar a atualização da listagem.5\. Verificar a sequência das marcas dos produtos exibidos. |
| **Resultado Esperado** | Os produtos devem ser apresentados em ordem alfabética crescente conforme a marca. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT207 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação por marca em ordem decrescente |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Brand: Descending |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Localizar o seletor de ordenação.3\. Selecionar "Brand: Descending".4\. Aguardar a atualização da listagem.5\. Verificar a sequência das marcas dos produtos exibidos. |
| **Resultado Esperado** | Os produtos devem ser apresentados em ordem alfabética decrescente conforme a marca. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT208 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar persistência da ordenação após atualizar a página |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Price: Low to High |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Selecionar "Price: Low to High".3\. Aguardar a atualização da listagem.4\. Atualizar a página do navegador.5\. Verificar a opção selecionada e a ordem dos produtos após o recarregamento. |
| **Resultado Esperado** | Após atualizar a página, o sistema deve manter ou restabelecer de forma consistente o critério de ordenação definido pela aplicação, sem exibir estado incorreto ou listagem incoerente. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT209 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar ordenação após aplicação de filtro |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Filtro disponível \+ Price: Low to High |
| **Passo a passo** | 1\. Acessar uma categoria que possua filtros e ordenação.2\. Aplicar um filtro disponível.3\. Selecionar "Price: Low to High".4\. Aguardar a atualização da listagem.5\. Verificar se os produtos filtrados permanecem exibidos em ordem crescente de preço. |
| **Resultado Esperado** | O sistema deve manter o filtro aplicado e ordenar somente os produtos resultantes em ordem crescente de preço. |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT210 |
| :---- | :---- |
| **Autor(a)** | Moisés |
| **Nome do CT** | Validar troca consecutiva entre critérios de ordenação |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes / Google Chrome (Desktop) / Luma Demo |
| **Pré-condições** | 1\. Conexão com a internet ativa.2\. Acesso ao Luma Demo.3\. Usuário em uma Página de Listagem de Produtos (PLP) com o seletor de ordenação disponível. |
| **Dados de Entrada** | Name: A to Z; Price: High to Low; Brand: Ascending |
| **Passo a passo** | 1\. Acessar a categoria Gear.2\. Selecionar "Name: A to Z" e verificar a atualização.3\. Alterar para "Price: High to Low" e verificar a atualização.4\. Alterar para "Brand: Ascending" e verificar a atualização.5\. Confirmar que apenas o último critério permanece ativo. |
| **Resultado Esperado** | A listagem deve ser atualizada após cada troca, sem travamentos, e somente o último critério selecionado deve permanecer ativo. |
| **Resultado Atual** |  |
| **Observação** |  |

**Cenário 03 \- Filtros de Produtos**

| ID | CT301 |
| :---- | :---- |
| **Autor(a)** | Paula Cristina Couto Botelho |
| **Nome do CT** | Validar filtro por categoria |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome Versão 150.0.7871.181 / Windows 11  |
| **Pré-condições** | O usuário deve estar na página de produtos da categoria Women. (https://demo.extension.jajuma.de/women/tops-women/jackets-women.html)  |
| **Dados de Entrada** | Categoria: Women \> Tops \> Jackets   |
| **Passo a passo** | Acessar o site Luma. Clicar em Women. Selecionar Tops. Selecionar Jackets. Aguardar o carregamento da página.  |
| **Resultado Esperado** | O sistema deve exibir apenas os produtos pertencentes à categoria Jackets.  |
| **Resultado Atual** |  |
| **Observação** | N/A  |

| ID | CT302 |
| :---- | :---- |
| **Autor(a)** | Paula Cristina Couto Botelho |
| **Nome do CT** | Validar filtro por preço  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome Versão 150.0.7871.181 / Windows 11  |
| **Pré-condições** | O usuário deve estar na página da categoria Women \> Tops \> Jackets. (https://demo.extension.jajuma.de/women/tops-women/jackets-women.html)  |
| **Dados de Entrada** | Filtro Price.  |
| **Passo a passo** | Localizar o menu Shopping Options. Clicar em Price. Selecionar uma faixa de preço. Aguardar o carregamento da página.  |
| **Resultado Esperado** | O sistema deve exibir apenas os produtos pertencentes à faixa de preço selecionada.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT303 |
| :---- | :---- |
| **Autor(a)** | Paula Cristina Couto Botelho |
| **Nome do CT** | Validar filtro por cor  |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes / Google Chrome Versão 150.0.7871.181 / Windows 11  |
| **Pré-condições** | O usuário deve estar na página da categoria Women \> Tops \> Jackets. (https://demo.extension.jajuma.de/women/tops-women/jackets-women.html?color=49)  |
| **Dados de Entrada** | Cor: Black.  |
| **Passo a passo** | Localizar a seção Shopping Options. Clicar em Color. Selecionar a cor Black. Aguardar a atualização da página.  |
| **Resultado Esperado** | O sistema deve exibir apenas os produtos da cor selecionada.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT304 |
| :---- | :---- |
| **Autor(a)** | Paula Cristina Couto Botelho |
| **Nome do CT** | Validar filtro por tamanho  |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes / Google Chrome Versão 150.0.7871.181 / Windows 11  |
| **Pré-condições** | O usuário deve estar na página da categoria Women \> Tops \> Jackets. (https://demo.extension.jajuma.de/women/tops-women/jackets-women.html?size=169)  |
| **Dados de Entrada** | Tamanho: M.  |
| **Passo a passo** | Localizar a seção Shopping Options. Clicar em Size. Selecionar o tamanho M. Aguardar a atualização da página.  |
| **Resultado Esperado** | O sistema deve exibir apenas os produtos disponíveis no tamanho selecionado.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT305  |
| :---- | :---- |
| **Autor(a)** | Paula Cristina Couto Botelho |
| **Nome do CT** | Validar combinação de filtros  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes / Google Chrome Versão 150.0.7871.181 / Windows 11  |
| **Pré-condições** | O usuário deve estar na página da categoria Women \> Tops \> Jackets. (https://demo.extension.jajuma.de/women/tops-women/jackets-women.html?color=49\&size=169)  |
| **Dados de Entrada** | Categoria: Jackets. Cor: Black. Tamanho: M. |
| **Passo a passo** | Acessar a categoria Women \> Tops \> Jackets. Aplicar o filtro Color \= Black. Aplicar o filtro Size \= M. Verificar os produtos exibidos.  |
| **Resultado Esperado** | O sistema deve apresentar apenas produtos que atendam simultaneamente aos filtros aplicados, mantendo todos os filtros ativos durante a navegação.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

**Cenário 04 \- Página de Categoria (PLP)**

| ID | CT401 |
| :---- | :---- |
| **Autor(a)** | Matheus Silva dos Santos |
| **Nome do CT** | Validação da Exibição e Redirecionamento dos Cards de Produtos na PLP  |
| **Prioridade** | Alta |
| **Ambiente** | Navegador Google Chrome / Desktop / Produção ([`https://luma-demo.scandipwa.com/`](https://luma-demo.scandipwa.com/))  |
| **Pré-condições** | Conexão com a internet ativa.  Acesso à página inicial da loja Luma Demo.  |
| **Dados de Entrada** | Categoria: [`Gear`](https://luma-demo.scandipwa.com/gear.html) |
| **Passo a passo** | Acessar o [site](https://luma-demo.scandipwa.com/) No menu principal, navegar até a categoria **Gear** Observar a exibição dos cards de produto na grade.  Validar a presença de: Imagem, Título, Preço e Botão de Ação.  Clique na imagem de um produto específico (ex: Dark Gym Outfit).  |
| **Resultado Esperado** | Todos os produtos da categoria devem carregar imagem, nome e preço visíveis e alinhados.  Ao clicar no produto, o sistema deve redirecionar corretamente para a Página de Detalhes do Produto (PDP) correspondente.  |
| **Resultado Atual** |  |
| **Observação** | • **Defeito de Imagem (Broken Image / Placeholder):** Abrir *bug ticket* para a equipe de catálogo cadastrar as imagens dos produtos *Dell Alienware x17* e *Yeezy Boost*. • **Alinhamento do Card:** A ausência de estrelas de avaliação nos dois primeiros cards causa um desalinhamento vertical do preço em relação aos produtos que possuem avaliação (*Dark Gym Outfit* e *Sprite Yoga Companion Kit*). Recomendado aplicar um `min-height` uniforme nos cards via CSS |

| ID | CT402 |
| :---- | :---- |
| **Autor(a)** | Matheus Silva dos Santos |
| **Nome do CT** | Alternância de Visualização de Produtos entre Grade (Grid) e Lista (List)  |
| **Prioridade** | Média |
| **Ambiente** | Navegador Google Chrome / Desktop / Produção ([`https://luma-demo.scandipwa.com/`](https://luma-demo.scandipwa.com/))  |
| **Pré-condições** | Conexão com a internet ativa.  Acesso à página inicial da loja Luma Demo.  Estar em qualquer página do site(Ex: Gear) |
| **Dados de Entrada** | Clique no botão de alternância de exibição (Ícones Grid/List no topo da listagem).  |
| **Passo a passo** | Acessar qualquer categoria Identifique os ícones de alteração de layout (Grid/List) no topo da listagem.  Clique no ícone de **Modo Lista (List)**. Observe a reorganização dos produtos.  Clique no ícone de **Modo Grade (Grid)**.  |
| **Resultado Esperado** | Ao selecionar "List", os produtos devem ser reordenados em linhas horizontais, exibindo descrições mais detalhadas.  Ao selecionar "Grid", o layout deve retornar ao formato de colunas sem quebras de layout.  |
| **Resultado Atual** |  |
| **Observação** | PWA/ScandiPWA pode manter apenas a visão em Grid no modo Mobile por responsividade.  |

| ID | CT403 |
| :---- | :---- |
| **Autor(a)** | Matheus Silva dos Santos |
| **Nome do CT** | Validação de Carregamento de Produtos via Paginação / Rolagem  |
| **Prioridade** | Alta  |
| **Ambiente** | Navegador Google Chrome / Desktop / Produção ([`https://luma-demo.scandipwa.com/`](https://luma-demo.scandipwa.com/))  |
| **Pré-condições** | Conexão com a internet ativa.  Acesso à página inicial da loja Luma Demo.  Estar em uma categoria com mais de 12 produtos cadastrados(Ex: gear) |
| **Dados de Entrada** | Ação de rolagem de página (Scroll) ou clique em "Carregar Mais" / Número de Página.  |
| **Passo a passo** | Acesse a categoria `gear` Role a página até o final da primeira leva de produtos. Observe o carregamento dos próximos itens ou clique nos botões de paginação. Verifique se a URL atualiza o parâmetro de página se aplicável (ex: `?p=2`). |
| **Resultado Esperado** | Novos produtos devem ser carregados sem duplicar os itens que já estavam visíveis. Não deve haver travamentos ou "glitches" visuais durante o carregamento. |
| **Resultado Atual** |  |
| **Observação** | Testar o comportamento do botão "Voltar" do navegador após rolar para a segunda página de produtos.  |

| ID | CT404 |
| :---- | :---- |
| **Autor(a)** | Matheus Silva dos Santos |
| **Nome do CT** | Validação da Hierarquia e Links do Breadcrumb na PLP  |
| **Prioridade** | Média  |
| **Ambiente** | Navegador Google Chrome / Desktop / Produção ([`https://luma-demo.scandipwa.com/`](https://luma-demo.scandipwa.com/))  |
| **Pré-condições** | Conexão com a internet ativa.  Acesso à página inicial da loja Luma Demo.  |
| **Dados de Entrada** | Categoria de nível profundo: `Women > Tops > Jackets`  |
| **Passo a passo** | Navegue no menu até `Women > Tops > Jackets`. Localize o Breadcrumb no topo da página (ex: `Home / Women / Tops / Jackets`). Confirme se o último nível (`Jackets`) reflete a página atual. Clique no nível pai `Women` presente no Breadcrumb.  |
| **Resultado Esperado** | O Breadcrumb deve exibir a trilha exata da categoria. O último item não deve ser um link clicável. Ao clicar em `Women`, o sistema deve redirecionar para a página da categoria mãe (*Women*). |
| **Resultado Atual** |  |
| **Observação** | Nenhuma.  |

| ID | CT405 |
| :---- | :---- |
| **Autor(a)** | Matheus Silva dos Santos |
| **Nome do CT** | Validação do Contador do Total de Produtos na Categoria  |
| **Prioridade** | Média  |
| **Ambiente** | Navegador Google Chrome / Desktop / Produção ([`https://luma-demo.scandipwa.com/`](https://luma-demo.scandipwa.com/))  |
| **Pré-condições** | Conexão com a internet ativa.  Acesso à página inicial da loja Luma Demo.  Estar em uma categoria de produtos (ex: `Gear > Bags`).  |
| **Dados de Entrada** | Filtro de atributos (ex: Cor ou Faixa de Preço), se disponível.  |
| **Passo a passo** | Acesse a categoria `Gear > Bags`. Note o número total de produtos indicado no topo (ex: *"14 Items"*). Verifique se todos os produtos exibidos pertencem legitimamente à categoria selecionada (Bags).  Conte manualmente quantos cards de produto estão na listagem. Aplique um filtro lateral (ex: preço ou cor). Verifique a atualização do contador de resultados. |
| **Resultado Esperado** | O número exibido no contador deve corresponder exatamente à soma dos produtos renderizados. Apenas produtos correspondentes à subcategoria acessada (Bags) devem ser exibidos.  Ao aplicar ou remover um filtro, a quantidade de resultados deve atualizar dinamicamente. |
| **Resultado Atual** |  |
| **Observação** | Verificar se a mensagem no singular/plural é exibida corretamente (ex: "1 Item" vs "2 Items").  |

**Cenário 05 \- Página de Produto (PDP)**  
 

| ID | CT501  |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a exibição e a interação com a galeria de imagens do produto  |
| **Prioridade** | Média  |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto que possua uma imagem principal e miniaturas (thumbnails)  |
| **Dados de Entrada** |  |
| **Passo a passo** | Acessar a página do produto.  Verificar o carregamento da imagem principal.  Clicar nas miniaturas disponíveis abaixo ou ao lado da imagem.  Clicar sobre a imagem principal ou utilizar a funcionalidade de zoom.  |
| **Resultado Esperado** | A imagem principal deve carregar sem distorções.  Ao clicar nas miniaturas, a imagem em destaque deve ser substituída corretamente.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT502  |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a exibição das informações básicas do produto (Nome e Preço).  |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto cadastrado e ativo no catálogo.  |
| **Dados de Entrada** |  |
| **Passo a passo** | Acessar a página do produto.  Verificar o título do produto exibido.  Verificar o valor numérico e o símbolo da moeda na seção de preço.  |
| **Resultado Esperado** | O nome do produto deve estar visível e em destaque.  O preço deve ser exibido com a formatação monetária correta, refletindo o valor exato do produto.  |
| **Resultado Atual** |  |
| **Observação** |  |

 

| ID | CT503  |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a exibição e o redirecionamento da seção de avaliações (Reviews).  |
| **Prioridade** | Baixa  |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto que já possua avaliações/reviews de usuários  |
| **Dados de Entrada** | Dados que o testador deve fornecer ao sistema.  |
| **Passo a passo** | Acessar a página do produto.  Localizar o resumo das avaliações (estrelas).  Clicar em “REVIEWS” |
| **Resultado Esperado** | A média de estrelas deve ser exibida corretamente.  Ao clicar em “REVIEWS”, o sistema deve mostrar todas as reviews realizadas anteriormente.   |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT504  |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a seleção de opções do produto (Cor e Tamanho)  |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto configurável que possua variações de cor e tamanho.  |
| **Dados de Entrada** | Tamanho Cor disponível nas opções.  |
| **Passo a passo** | Acessar a página do produto.  Na seção de opções, clicar em "Size" e escolher uma opção Clicar em "Color" e selecionar uma opção.  |
| **Resultado Esperado** | As opções selecionadas devem ficar destacadas visualmente.  A imagem principal e o preço devem ser atualizados automaticamente, caso aplicável à variação.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT505   |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a exibição do conteúdo nas abas de Detalhes. |
| **Prioridade** | Média  |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto com estoque disponível.  |
| **Dados de Entrada** |  |
| **Passo a passo** | Acessar a página do produto.  Rolar a página até a seção de abas informativas  Clicar na aba "Details"  |
| **Resultado Esperado** | A aba "Details" deve exibir o texto descritivo formatado corretamente.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT506  |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a funcionalidade de adicionar o produto ao carrinho com todos os dados preenchidos.  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto configurável.  |
| **Dados de Entrada** | Opções de Cor e Tamanho disponíveis. Quantidade válida.  |
| **Passo a passo** | Selecionar o Tamanho. Selecionar a Cor.  Confirmar a Quantidade.  Clicar no botão "Add to Cart".  |
| **Resultado Esperado** | O sistema deve exibir uma mensagem de sucesso confirmando a adição.  O contador do ícone do carrinho no cabeçalho deve ser atualizado instantaneamente.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT507  |
| :---- | :---- |
| **Autor(a)** | Antonio Guilherme |
| **Nome do CT** | Validar a restrição do botão "Add to Cart" quando opções obrigatórias não são preenchidas.  |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/Chrome Versão 150.0.7871.183/Windows  |
| **Pré-condições** | Deve estar na Página de Produto (https://luma-demo.scandipwa.com/collections.htm) Acessar a PDP de um produto configurável com opções obrigatórias de cor e tamanho.  |
| **Dados de Entrada** | Campos de opções deixados em branco  |
| **Passo a passo** | Acessar a página do produto.  Não selecionar nenhuma opção de Tamanho ou Cor.  Clicar no botão "Add to Cart".  |
| **Resultado Esperado** | O produto não deve ser adicionado ao carrinho.  O sistema deve exibir uma mensagem de validação exigindo o preenchimento.  |
| **Resultado Atual** |  |
| **Observação** |  |

**CENÁRIO 06 – Carrinho de Compras** 

| ID | CT601 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Validar a adição de um produto ao carrinho de compras.   |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do produto Erika Running Short (https://luma-demo.scandipwa.com/erika-running-short.html). \- O produto deve estar em estoque.  |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade:1 |
| **Passo a passo** | 1\. Entrar na página do produto Erika Running Short.  2\. Selecionar a cor Green no campo Color. 3\. Selecionar o tamanho 29 no campo Size.  4\. Clicar no botão "Add to Cart".  5\. Clicar no carrinho flutuante.  |
| **Resultado Esperado** | O produto deve ser adicionado ao carrinho de acordo com as especificações selecionadas.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT602 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Alterar a quantidade de um produto no carrinho de compras.  |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade inicial: 1 Nova quantidade: 2 |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\. Localizar o produto Erika Running Short. 3\. Clicar no botão “+” ao lado do número 1\.  4\. Confirmar a atualização da quantidade.  5\. Verificar a alteração de valor no subtotal.  |
| **Resultado Esperado** | O sistema deve atualizar a quantidade do produto corretamente no carrinho, exibindo a nova quantidade selecionada e recalculando o valor total da compra de acordo com a quantidade alterada.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT603 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Remover um produto do carrinho de compras.  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. \- Deve possuir o Clamber Watch (Qtd.1) adicionado ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade: 1 Item: Clamber Watch Quantidade: 1 |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\. Localizar o produto Clamber Watch. 3\. Clicar no botão "Excluir”. 4\. Verificar o conteúdo atualizado do carrinho.  |
| **Resultado Esperado** | O sistema deve remover o produto selecionado corretamente e atualizar o carrinho, ajustando a quantidade de itens e o valor total da compra.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT604 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Prosseguir para a etapa de checkout.  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade: 1 |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\. Verificar se o produto está listado corretamente. 3\. Clicar no botão “Fazer checkout”. 4\. Aguardar o carregamento da página de checkout. 5\. Verificar se as informações necessárias para finalização da compra são apresentadas. |
| **Resultado Esperado** | O sistema deve direcionar o usuário para a etapa de checkout, exibindo as informações necessárias para continuar a compra, como dados de entrega, método de envio e pagamento.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT605 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Aplicar um cupom de desconto válido para obter frete grátis.  |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade: 1 Cupom: SCANDIPWA  |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\. Localizar o campo “Seu código de desconto”. 3\. Informar o cupom SCANDIPWA .  4\. Clicar no botão de “Enviar”.  5\. Clicar no botão de “Fazer o check-out ”. 6\. Verificar o campo método de envio. |
| **Resultado Esperado** | O sistema deve aceitar o cupom SCANDIPWA e disponibilizar no método de envio a opção de frete grátis, exibindo o valor do frete como R$ 0,00 no checkout. |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT606 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Aplicar um cupom de desconto inválido no carrinho de compras.  |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade: 1 Cupom: CODEINVALIDO |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\. Localizar o campo “Seu código de desconto”. 3\. Informar o cupom CODEINVALIDO.  4\. Clicar no botão de “Enviar”.  5\. Verificar a mensagem apresentada pelo sistema. |
| **Resultado Esperado** | O sistema deve rejeitar o cupom informado, apresentar uma mensagem de aviso ao usuário e não aplicar nenhum benefício ou alteração no valor do frete/compra  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT607 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Atualizar a página e verificar a persistência dos produtos no carrinho.  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade: 1 |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\. Atualizar a página do navegador. 3\. Aguardar o carregamento completo da página. 4\. Verificar se o produto continua disponível no carrinho.  |
| **Resultado Esperado** | Após a atualização da página, o sistema deve manter o produto no carrinho, preservando suas informações como nome, tamanho, quantidade e valor.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

| ID | CT608 |
| :---- | :---- |
| **Autor(a)** | Giovanna Coelho  |
| **Nome do CT** | Verificar o comportamento do carrinho quando não há produtos.  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | \- Deve estar na página do carrinho de compras (https://luma-demo.scandipwa.com/cart). \- Deve possuir a Erika Running Short (Color: Green; Size:29; Qtd.1) adicionada ao carrinho. |
| **Dados de Entrada** | Item: Erika Running Short Color: Green Size: 29 Quantidade: 1 |
| **Passo a passo** | 1\. Acessar o carrinho de compras. 2\.  Localizar o produto Erika Running Short. 3\. Clicar no botão "Excluir”. 4\. Verificar as informações exibidas quando o carrinho está vazio.  |
| **Resultado Esperado** | O sistema deve informar que o carrinho está vazio, não exibir produtos e impedir ou limitar ações relacionadas à finalização da compra até que um item seja adicionado.  |
| **Resultado Atual** |  |
| **Observação** | N/A |

**Cenário 07 – Autenticação (Login, Cadastro, Recuperação de Senha e Logout)** 

| ID | CT701  |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | Cadastro com dados válidos |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | Estar na página **Create an Account**. |
| **Dados de Entrada** | Nome: Carol Sobrenome: Cortat Email: [carolcortatqa@gmail.com](mailto:carolcortatqa@gmail.com) Senha: Qa@12345  |
| **Passo a passo** | Acessar página inicial do site Clicar no ícone da conta (Account).  Selecionar a opção **Create an Account**.  Preencher o campo **First Name** com um nome válido.  Preencher o campo **Last Name** com um sobrenome válido. Preencher o campo **Email** com um e-mail que ainda não esteja cadastrado.   Preencher o campo **Password** com uma senha válida.  Preencher o campo **Confirm Password** com a mesma senha informada anteriormente.  Clicar no botão **Sign UP** |
| **Resultado Esperado** | Conta criada com sucesso e usuário autenticado |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT702 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | Cadastro com campos obrigatórios em branco |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | Estar na página **Create an Account**.  |
| **Dados de Entrada** | Todos os campos obrigatórios deixados em branco.  |
| **Passo a passo** | Acessar página inicial do site Clicar no ícone da conta (Account).  Selecionar a opção **Create an Account**.  Deixar todos os campos obrigatórios em branco.   Clicar no botão **Sign UP** |
| **Resultado Esperado** | O cadastro **não** deve ser realizado. Devem ser exibidas mensagens de validação para os campos obrigatórios não preenchidos  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT703 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | **Cadastro com e-mail já cadastrado**  |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | Existir um usuário previamente cadastrado no sistema.  |
| **Dados de Entrada** | Nome: Carol Sobrenome: Cortat Email: [carolcortatqa@gmail.com](mailto:carolcortatqa@gmail.com) Senha: Qa@12345  |
| **Passo a passo** | Acessar página inicial do site Clicar no ícone da conta (Account).  Selecionar a opção **Create an Account**.  Preencher o campo **First Name** com um nome válido.  Preencher o campo **Last Name** com um sobrenome válido. Preencher o campo **Email** com um e-mail que ainda não esteja cadastrado.   Preencher o campo **Password** com uma senha válida.  Preencher o campo **Confirm Password** com a mesma senha informada anteriormente.  Clicar no botão **Sign UP** |
| **Resultado Esperado** | Deve ser exibida uma mensagem informando que já existe uma conta cadastrada com esse e-mail.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT704 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | Cadastro com e-mail inválido |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | Estar na página **Create an Account**  |
| **Dados de Entrada** | Nome: Carol Sobrenome: Cortat Email: teste@email Senha: Qa@12345  |
| **Passo a passo** | Acessar página inicial do site Clicar no ícone da conta (Account).  Selecionar a opção **Create an Account**.  Preencher os campos obrigatórios com dados válidos, informando um e-mail em formato inválido.  Preencher o campo **Confirm Password** com a mesma senha informada anteriormente.  Clicar no botão **Sign UP** |
| **Resultado Esperado** | Deve ser exibida uma mensagem informando que o formato do e-mail é inválido (ou mensagem equivalente).  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT705 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | **Cadastro com senha e confirmação diferentes**  |
| **Prioridade** | Alta  |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | Estar na página **Create an Account**  |
| **Dados de Entrada** | Nome: Carol Sobrenome: Cortat Email: qatestect005@email.com Senha: Qa@12345 Confirmação de senha: Qa@123456 |
| **Passo a passo** | Acessar página inicial do site Clicar no ícone da conta (Account).  Selecionar a opção **Create an Account**.  Preencher o campo **First Name** com um nome válido.  Preencher o campo **Last Name** com um sobrenome válido. Preencher o campo **Email** com um e-mail que ainda não esteja cadastrado.   Preencher o campo **Password** com uma senha válida.  Preencher o campo **Confirm Password** com senha diferente da  informada anteriormente.  Clicar no botão **Sign UP** |
| **Resultado Esperado** | Deve ser exibida uma mensagem informando que as senhas não coincidem .  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT706 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | **Cadastro com senha fora dos critérios mínimos** |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | Estar na página **Create an Account**  |
| **Dados de Entrada** | Nome: Carol Sobrenome: Cortat Email: qatestect006@email.com Senha: 12345 Confirmação de senha: 12345 |
| **Passo a passo** | Acessar página inicial do site Clicar no ícone da conta (Account).  Selecionar a opção **Create an Account**.  Preencher os campos obrigatórios com dados válidos.   Informar uma senha que não atenda aos critérios mínimos  Confirmar a mesma senha no campo **Confirm Password**.   Clicar no botão **Sign UP** |
| **Resultado Esperado** | Deve ser exibida uma mensagem informando que a senha não atende aos requisitos mínimos.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT707 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | **Login com credenciais válidas**  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | O usuário deve estar previamente cadastrado no sistema (conta criada no **CT001**). O usuário deve estar deslogado.  |
| **Dados de Entrada** | Email: [carolcortatqa@gmail.com](mailto:carolcortatqa@gmail.com) Senha: Qa@12345  |
| **Passo a passo** | Acessar a página inicial do Luma. Clicar no ícone da conta (Account). Selecionar a opção Sign In. Informar um e-mail válido previamente cadastrado.  Informar a senha correspondente.  Clicar no botão **Sign In**.  |
| **Resultado Esperado** | O login deve ser realizado com sucesso. O usuário deve ser redirecionado para a página **My Account** (ou para a área da conta). O nome do usuário deve ser exibido no topo da página, indicando que a autenticação foi realizada.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT708 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | **Login com senha incorreta** |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | O usuário deve estar previamente cadastrado no sistema (conta criada no **CT001**). O usuário deve estar deslogado.  |
| **Dados de Entrada** | Email: [carolcortatqa@gmail.com](mailto:carolcortatqa@gmail.com) Senha: 12345678 |
| **Passo a passo** | Acessar a página inicial do Luma. Clicar no ícone da conta (Account). Selecionar a opção Sign In. Informar um e-mail válido previamente cadastrado.  Informar a senha incorreta Clicar no botão **Sign In**.  |
| **Resultado Esperado** | O sistema **não deve permitir** o login. Deve ser exibida uma mensagem informando que as credenciais são inválidas  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT709 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** |  **Login com campos obrigatórios vazios**  |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | O usuário deve estar deslogado. Estar na página de login (**Sign In**).  |
| **Dados de Entrada** | Email: em branco Senha: em branco |
| **Passo a passo** | Acessar a página inicial do Luma. Clicar no ícone da conta (Account). Selecionar a opção Sign In. Deixar os campos **E-mail** e **Senha** em branco.  Clicar no botão **Sign In**.  |
| **Resultado Esperado** | O sistema **não deve permitir** o login. Os campos obrigatórios devem ser destacados. Devem ser exibidas mensagens de validação informando que os campos são obrigatórios.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT710 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | Recuperação de senha com e-mail cadastrado |
| **Prioridade** | Média |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | O usuário deve possuir uma conta cadastrada no sistema. Estar na tela de **Login**.  |
| **Dados de Entrada** | Email: carolcortatqa@gmail.com |
| **Passo a passo** | Acessar a página inicial do Luma. Clicar no ícone da conta (Account).. Clicar na opção **Esqueceu sua senha?** (Forgot password?). Informar um e-mail previamente cadastrado.  Clicar no botão **Reset Password**.  |
| **Resultado Esperado** | O sistema deve aceitar a solicitação de recuperação de senha. Deve ser exibida uma mensagem informando que, **caso exista uma conta associada ao e-mail informado**, será enviado um link para redefinição da senha.  |
| **Resultado Atual** |  |
| **Observação** |  |

| ID | CT711 |
| :---- | :---- |
| **Autor(a)** | Caroline Cortat |
| **Nome do CT** | Logout do usuário |
| **Prioridade** | Alta |
| **Ambiente** | Ambiente de Testes/ Google Chrome Versão 150.0.7871.181/ Windows 10  |
| **Pré-condições** | O usuário deve estar autenticado no sistema.   |
| **Dados de Entrada** | Email: [carolcortatqa@gmail.com](mailto:carolcortatqa@gmail.com) Senha: Qa@12345 |
| **Passo a passo** | Acessar a página inicial do Luma. Realizar login com um usuário válido (caso ainda não esteja logado). Clicar no ícone da conta (Account).  Selecionar a opção **Sign Out** (Logout).  |
| **Resultado Esperado** | O sistema deve encerrar a sessão do usuário. O usuário deve ser redirecionado para a página inicial (ou permanecer na Home). A opção **Sign In** deve voltar a ser exibida, indicando que não há usuário autenticado.  |
| **Resultado Atual** |  |
| **Observação** |  |

