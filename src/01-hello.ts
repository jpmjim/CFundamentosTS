const myName = "John Doe";
console.log(`Hello, ${myName}!`);
// Ejecutamos npx tsc src/01-hello.ts
// Esto genera un archivo src/01-hello.js

// Ejecutamos npx tsc src/01-hello.ts --target es6 --outDir dist
// Esto genera un archivo dist/01-hello.js
// node dist/01-hello.js
