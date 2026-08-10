# Comparação Magebit Magento × ScandiPWA Luma (Fundamentos de QA)

Documentação gerada a partir de **testes exploratórios / observação de interface** e amostragem HTTP em **2026-08-09**.

## Documentos para entrega / correção

1. [`matriz-comparativa.md`](matriz-comparativa.md)  
2. [`relatorio-ocorrencias.md`](relatorio-ocorrencias.md)  
3. [`conclusao.md`](conclusao.md)  

## Evidências brutas

Pasta [`evidencias/`](evidencias/):

- `metadados-sessao.md` — data/hora, navegador, método  
- `http/log-http.md` — 3 tentativas por URL  
- `http/log-graphql-complementar.md` — latência GraphQL (complementar)  
- `atc-probes.md` / `atc-probes.json` — 3× fluxo ATC→carrinho→checkout  
- `magebit/*.png` e `scandipwa/*.png` — capturas de tela  
- `indice-arquivos.txt` — inventário  

**Não** utilizar resultados de Cypress deste repositório como prova desta análise.
