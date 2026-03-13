module.exports = {
  presets: [
    [
      "@babel/preset-react",
      { runtime: "automatic" } // Ativa o JSX transform moderno (sem precisar de import React)
    ],
    "next/babel" // Faz o Jest entender Next.js e ES Modules
  ]
};
