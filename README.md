# 🏨 Pousada Pedra Furada 

Aplicação SPA feito em **Next.js**, com foco em **CI/CD**, **TDD** e **boas práticas**.

## 🚀 Tecnologias

- Next.js 15+
- Node.js 20+
- React 19+
- React Router DOM 6+
- Prisma ORM
- MySQL
- Jest + React Testing Library
- GitHub Actions (CI/CD)

## 📁 Estrutura do Projeto

```
src/
├── App.jsx               # Roteamento principal da SPA
├── main.jsx              # Ponto de entrada da SPA
├── components/
│   ├── Header.jsx        # Barra de navegação
│   ├── Footer.jsx        # Rodapé
│   └── Layout.jsx        # Estrutura visual comum
├── pages/
│   ├── api/              # Rotas da API RESTful (Next.js)
│   ├── index.jsx         # Página inicial (Next.js)
│   ├── LoginPage.jsx     # Página de login
│   ├── TarefasPage.jsx   # Gestão de tarefas
│   └── RelatoriosPage.jsx# Relatórios e dashboard
├── hooks/                # Hooks personalizados
├── lib/                  # Funções utilitárias e helpers
├── styles/
│   └── globals.css       # Estilos globais
└── tests/                # Testes automatizados
    ├── main.test.jsx
    ├── App.test.jsx
    ├── Layout.test.jsx
    ├── pages/
    │   ├── index.test.jsx
    │   ├── LoginPage.test.jsx
    │   ├── TarefasPage.test.jsx
    │   └── RelatoriosPage.test.jsx
    └── components/
        ├── Header.test.jsx
        └── Footer.test.jsx
prisma/                   # Schema e migrations do banco de dados
public/                   # Arquivos estáticos (ícones, imagens)
```

## ⚙️ Instalação

```bash
git clone https://github.com/RianAguiar/pousada-pedra-furada.git
cd pousada-pedra-furada
npm install
npm run dev
```

## 🧪 Testes

```bash
# Rodar testes em modo watch
npm test

# Rodar testes uma vez
npx jest --runInBand
```

# Pousada-Pedra-Furada