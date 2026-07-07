# 📝 Lista de Tarefas (React + Vite)

Este é um projeto de **Lista de Tarefas (To-Do List)** simples e intuitivo, desenvolvido em React utilizando o ecossistema rápido do Vite. 
Objetivo: adicionar, editar, excluir e marcar tarefas como concluídas ou não.
Curso: Dev Fullstack 2026 +PraTi & Codifica.
---

## 🚀 Funcionalidades

O projeto oferece todas as operações essenciais de um CRUD de tarefas:

- **Adicionar Tarefas**: Crie novas tarefas digitando no campo de texto e clicando em "Adicionar".
- **Listar Tarefas**: Visualize todas as tarefas ativas e concluídas.
- **Concluir/Desconcluir**: Clique no texto de uma tarefa para marcar ou desmarcar como concluída (tarefas concluídas ganham um efeito visual tachado).
- **Editar Tarefas**: Altere o texto de tarefas existentes com suporte a cancelamento de edição.
- **Excluir Tarefas**: Remova tarefas permanentemente da lista.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** (v19): Biblioteca principal para construção da interface baseada em componentes e gerenciamento de estado local com `useState`.
- **[Vite](https://vite.dev/)** (v8): Bundler e ambiente de desenvolvimento extremamente rápido com HMR (Hot Module Replacement).
- **[Oxlint](https://oxc.rs/)**: Linter moderno de altíssimo desempenho para identificar possíveis problemas e manter a consistência do código.
- **CSS Vanilla**: Estilização personalizada de componentes para um visual clean e responsivo.

---

## 📦 Estrutura de Arquivos Principal

- [App.jsx](file:///c:/Users/Rudinei/OneDrive/WEB-DEV/dev-fullstack-2026/lista-tarefas-react/src/App.jsx): Contém a lógica principal da aplicação, funções de manipulação de estado (`adicionar`, `excluir`, `editar`, `concluir`) e renderização dos elementos HTML.
- [App.css](file:///c:/Users/Rudinei/OneDrive/WEB-DEV/dev-fullstack-2026/lista-tarefas-react/src/App.css): Arquivo de estilização global e específica para o layout da aplicação.
- [main.jsx](file:///c:/Users/Rudinei/OneDrive/WEB-DEV/dev-fullstack-2026/lista-tarefas-react/src/main.jsx): Ponto de entrada que monta a aplicação React no DOM.
- [index.html](file:///c:/Users/Rudinei/OneDrive/WEB-DEV/dev-fullstack-2026/lista-tarefas-react/index.html): Arquivo HTML base onde o React é injetado.

---

## 💻 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18+) e o **npm** instalados em sua máquina.

### 2. Instalar as dependências
No diretório raiz do projeto, execute o comando para instalar as bibliotecas necessárias:
```bash
npm install
```

### 3. Executar o servidor de desenvolvimento
Para rodar a aplicação em modo de desenvolvimento:
```bash
npm run dev
```
Após executar, abra o endereço exibido no terminal (geralmente `http://localhost:5173`) no seu navegador.

### 4. Outros Scripts Disponíveis
- **Build de produção**: `npm run build` (Gera os arquivos otimizados para deploy na pasta `dist`)
- **Rodar o Linter**: `npm run lint` (Executa a verificação estática do código com Oxlint)
- **Pré-visualizar o Build**: `npm run preview` (Executa localmente a pasta de produção gerada)
