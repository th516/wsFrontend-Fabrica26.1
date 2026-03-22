# 🛸 Rick and Morty - Explorador de Personagens

Aplicação web desenvolvida com **React** e **TypeScript** que consome a [Rick and Morty API](https://rickandmortyapi.com/) para exibir e explorar os personagens da série.

---

## 📋 Funcionalidades

- 📜 **Listagem de personagens** com nome, status, espécie e imagem
- 🔍 **Barra de pesquisa** com filtragem em tempo real, por botão ou tecla Enter
- 🔀 **Alternância de visualização** entre grade (grid) e lista (list)
- 📄 **Página de detalhes** com informações completas do personagem:
  - Nome e ID
  - Imagem (avatar)
  - Origem (planeta)
  - Localização atual

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Rick and Morty API](https://rickandmortyapi.com/)

---

## 📁 Estrutura do projeto

```
src/
├── App.tsx
├── main.tsx
└── componentes/
    ├── Header.tsx
    ├── Footer.tsx
    ├── SearchBar.tsx
    ├── CharacterList.tsx
    ├── CharacterCard.tsx
    └── CharacterDetails.tsx
```

---

## ⚙️ Como rodar o projeto

**1. Clone o repositório:**
```bash
git clone https://github.com/th516/wsFrontend-Fabrica26.1.git
```

**2. Acesse a pasta do projeto:**
```bash
cd wsFrontend-Fabrica26.1
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Rode o projeto:**
```bash
npm run dev
```

**5. Acesse no navegador:**
```
http://localhost:5173
```

---

## 🖥️ Páginas

| Rota | Descrição |
|---|---|
| `/` | Página inicial com lista de personagens |
| `/detalhes/:id` | Página de detalhes do personagem |

---

## 📡 API utilizada

Este projeto consome a [Rick and Morty API](https://rickandmortyapi.com/), uma API pública e gratuita com dados de todos os personagens, episódios e localizações da série.

Endpoint utilizado:
```
https://rickandmortyapi.com/api/character
https://rickandmortyapi.com/api/character/{id}
```

---

## 👨‍💻 Autor

**Thiago Rodrigues**

Desenvolvido durante o curso **Fábrica 26.1**
