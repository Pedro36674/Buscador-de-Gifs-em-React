# Buscador de GIFs

Este projeto é uma aplicação React criada com Vite que permite pesquisar GIFs usando a API do Giphy.

## Visão geral

A aplicação exibe um campo de busca para o usuário digitar um termo e, ao enviar, realiza a requisição à API para carregar GIFs relacionados. Durante a busca, é exibida uma mensagem de carregamento.

## Arquivos principais

- `src/App.jsx` - Componente principal que organiza o layout e usa o hook personalizado `useSearchGifs`.
- `src/useSearchGifs.js` - Hook personalizado responsável pela lógica de estado, busca dos GIFs e controle de carregamento.
- `src/Buscador.jsx` - Componente de formulário para capturar o texto da pesquisa e enviar a busca.
- `src/GridGifs.jsx` - Componente que renderiza a lista de GIFs retornados pela busca.
- `src/Gif.jsx` - Componente que exibe cada GIF individualmente com animação ao aparecer e efeito de hover.
- `src/estilos.css` - Estilos básicos para o layout e visual dos componentes.

## Funcionalidades

- Busca de GIFs pela API do Giphy
- Mostra indicador de carregamento enquanto a pesquisa é realizada
- Renderiza resultados em grade de imagens animadas
- Usa componentes e hooks reutilizáveis

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o navegador no endereço mostrado no terminal.

## Observações

A lógica de busca está organizada em `src/useSearchGifs.js`, e a exibição dos resultados é feita pelo conjunto de componentes em `src/GridGifs.jsx` e `src/Gif.jsx`.
