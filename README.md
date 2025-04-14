# 🚀 Starter com Gulp + Webpack + TypeScript + Bootstrap

Este projeto é um boilerplate utilizando:

- 🛠️ **Gulp** para orquestração de tarefas (live reload, compilação, build)
- 📦 **Webpack** para empacotamento e bundling dos scripts
- 🧠 **TypeScript** para melhor organização e tipagem do JS
- 💅 **SASS/SCSS** para estilos
- 🎯 **Bootstrap 5** para layout responsivo
- 💡 **jQuery** para interações rápidas no DOM

## 📁 Estrutura do Projeto
```
template-html/
├── dist/
├── src/
│   ├── ts/
│   │   └── main.ts
│   |── scss/
│   │   └── style.scss
│   └── index.html
├── gulpfile.js
├── tsconfig.json
├── webpack.config.js
├── package.json
└── .babelrc
```

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto, a partir de um terminal:

| Comandos                                                  | Ação                                                              |
| :---------------------------------------------------------| :---------------------------------------------------------------- |
| `pnpm build`                                              | Gerar build de produção                                           |
| `pnpm dev`                                                | Isso inicia um servidor local com live reload (BrowserSync)       |
