# CFundamentosTS
Curso de Fundamentos de TypeScript

## Por qué usar TypeScript
  TypeScript es un lenguaje de programación que permite a los desarrolladores escribir código de manera más limpia y rápida.

  Según un [estudio](https://earlbarr.com/publications/typestudy.pdf), TypeScript puede prevenir hasta un 15% de fallas en tus proyectos. TypeScript va a estar analizando tu código constantemente indicando posibles fallas o mejores maneras de escribir tu código.

  - Según VueJS, puede evitar varios errores que podrían ir a producción
  - ReactJS nos dice que puede prevenir muchos problemas antes de correr el código
  - Slack indica que tiene una gran integración con el editor, incrementando la productividad de los desarrolladores
  - Airbnb comenta que le ayudó a prevenir hasta un 38% de bugs y que los ingenieros pueden avanzar más rápido y seguro

  - TypeScript agrega sintaxis adicional a JavaScript para admitir una integración más estrecha con su editor . Detecte errores temprano en su editor.

  - El código TypeScript se convierte a JavaScript, que se ejecuta en cualquier lugar donde se ejecute JavaScript : en un navegador, en Node.js o Deno y en sus aplicaciones.

  - TypeScript entiende JavaScript y utiliza la inferencia de tipos para brindarle excelentes herramientas sin código adicional.

  [StackOverflow 2022](https://survey.stackoverflow.co/2022/survey-results)

## TypeScript vs. JavaScript
  ¿TypeScript es diferente a JavaScript? ¿Un desarrollador en TypeScript es diferente a uno en JavaScript? La respuesta a ambas es sí, sin embargo, no hay una notable diferencia. Uno (TypeScript) se base en el otro (JavaScript) añadiendo elementos para mejorar la detección de bugs y experiencia de desarrollo.

  ### Panorama
  JavaScript ha sufrido un incremento exponencial en su uso, pues se puede usar en Frontend, Backend, IoT, entre otros. No obstante, este no fue creado como un lenguaje maduro desde el inicio, fue con el tiempo que ha ido mejorando hasta lo que es hoy en día.

  En JavaScript solo te das cuenta de que tienes un error hasta el momento en que lo ejecutas, sea en el navegador o en un entorno de ejecución como NodeJS, más no antes. Lo que queremos como desarrolladores es obtener retroalimentación lo antes posible para tener la menor cantidad de errores en producción
  El aporte de TypeScript

  TypeScript abarca todo lo que tiene JavaScript, más las nuevas versiones de ECMAScript, y añade análisis estático a nuestro código.
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ctf-4.jpg)

  ¿Qué significa análisis de código estático?

  Entre más rápido encuentres un error, más fácil será solucionarlo

  En el libro Software Engineering at Google[1] señalan ciertas capas para detectar fallas en el desarrollo de programas:

  - Análisis de código estático: corre en el editor de código en busca de un typo (error en la escritura de un término), llamadas incorrectas a funciones y brinda autocompletado de código
  - Pruebas Unitarias (Unit Tests): se realiza pruebas para verificar si una parte del código hace lo que queremos que ejecute
  - Pruebas de Integración (Integration Tests): vemos como todo el código funciona en conjunto y que se ejecute cómo deseamos
  - Revisión de código (Code Review): se verifica si se ha seguido con las normas, estándares y mejores prácticas establecidas por el equipo

## Configurado nuestro proyecto
  No vamos a instalar TypeScript de manera global, sino solo para el proyecto, ya que normalmente así se hace en mundo real. Se trabaja por proyecto.

  Instalar TypeScript en un proyecto es muy fácil:
  ```
  npm install typescript --save-dev
  npx tsc --version
  ```
  A continuación, puede ejecutar el compilador de TypeScript con uno de los siguientes comandos: 
  ```
  npx tsc
  tsc --help
  tsc --version
  tsc --init
  ```
  Nuestro .gitignore incluye el archivo .tsconfig.json, que es el archivo que se usa para configurar el compilador. [gitignore.io](https://www.toptal.com/developers/gitignore/)
  
  .editorconfig es un archivo que se usa para configurar el editor de texto. [editorconfig.org](https://editorconfig.org/)
  Podemos usarlo dentro de Visual Studio Code [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

  Iniciamos un proyecto con NPM:
  ```
  npm init -y
  ```

## Atrapando bugs
  El análisis de código estático nos ayudará a detectar fallas en nuestro programa durante su desarrollo.

  En la carpeta src del proyecto de curso, vamos a crear un archivo JavaScript llamado demo.js.

  Al analizarlo nos damos cuenta de que tiene unos errores que podrían pasar desapercibidos al no ver advertencias. Es hasta que lo ejecutamos en un navegador web o entornos como NodeJS que los bugs saldrán a relucir. Por lo que, nosotros como desarrolladores, esto no es conveniente, pues queremos feedback lo más pronto posible.

  ### Activando poderes de TypeScript en JavaScript 🧐

  Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente:
  ```
  //@ts-check --no-eslint
  ```

