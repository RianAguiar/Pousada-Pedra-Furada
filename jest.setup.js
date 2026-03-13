require("@testing-library/jest-dom");

// Corrige erro "TextEncoder is not defined" (react-router-dom v6.14+)
const { TextEncoder, TextDecoder } = require("util");
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;

// Silencia o warning do React sobre JSX transform antigo
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("using an outdated JSX transform")
  ) {
    return;
  }
  originalWarn(...args);
};
