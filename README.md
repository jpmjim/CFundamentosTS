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
## El compilador de TypeScript
  El código TS no es leído por navegadores ni servidores. Lo que se hace es transpilarlo a JS.

  Podemos seleccionar una versión en específico de TS e indicar en dónde queremos que guarde el archivo JS

  Este compilador lo que realmente hace es transpilar, pues ni el navegador ni Node.js (a abril de 2022) pueden leer nativamente archivos TypeScript, por lo que realiza un proceso de traducción en la que su código lo convierte a JavaScript.
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ctf-8.jpg)

  Compilación de archivos TypeScript desde Node.js

  Para realizar el proceso de transpilación en Node.js, ejecutemos lo siguiente en la terminal:
  ```
  npx tsc archivo_typescript.ts
  ```

  Tras esto, se creará un archivo JavaScript dentro de la misma carpeta donde este tu archivo TypeScript y con el mismo nombre. Por ejemplo, en nuestro proyecto realizamos esa operación dentro de la carpeta src con el archivo 01-hello.ts, dando como resultado
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ctf-9.jfif)

  ### Compilación a una versión específica

  Podemos hacer que nuestro archivo TypesSript sea transpilado a un archivo JavaScript, por ejemplo, con el estándar ECMAScript 6. Para ello ejecutemos:
  ```
  npx tsc archivo_typescript.ts --target es6
  ```
  ### Enviando compilación a una carpeta

  Si deseas que los archivos transpilados no se generen en la misma carpeta donde están tus archivos TypeScript, puedes indicarle al compilador hacia donde quieres que vayan:
  ```
  npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino
  ```
  También podrías indicar que deseas aplicar la anterior operación a todos los archivos con extensión TypeScript:
  ```
  npx tsc *.ts --target es6 --outDir carpeta_destino
  ```
  ### Deno: un entorno nativo para ambos lenguajes

  [Deno](https://deno.land/), del mismo creador de Node.js, es un nuevo entorno de ejecución para JavaScript que puede correr también nativamente TypeScript. Sin embargo, aún no tiene la madurez en el ecosistema de Node.js

## Veamos el TSConfig.json
  Nos ayuda a ahorrar mucho trabajo manual como transpilar archivo por archivo, indicar el target, etc.

  ### Creando un archivo TSConfig.json
  En la terminal, ubicándonos dentro del directorio en el que queremos que se cree el archivo, ejecutemos:
  ```
  npx tsc --init
  ```
  Nos creará automáticamente el archivo con propiedades básicas activadas. Si deseas ver el archivo, puedes hacerlo desde la terminal con:
  ```
  cat tsconfig.json
  ```
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/tsconfigjson1light.png)

  Dentro del archivo TSConfig.json podemos ver que tiene muchas propiedades comentadas (desactivadas) y de las cuales solo algunas están activadas.

  ### Compilación en TypeScript
  Nuestro código TypeScript se transpilará según las propiedades indicadas en nuestro archivo `TSConfig.json``:
  ```
  npx tsc
  ```

  ### Compilación en tiempo real
  Nos puede resultar tedioso estar ejecutando el comando anterior siempre después de escribir nuestro código. Para evitar esto, podemos hacer que el compilador esté detectando cada cambio que realicemos en nuestros archivos TypeScript y haga la transpilación de inmediato:
  ```
  npx tsc --watch
  ```

  ### Proyecto
  - Creemos el archivo TSConfig.json en nuestro proyecto
  - Activamos las siguientes propiedades dentro de dicho archivo:
    - outDir: indicando la carpeta dist como el directorio destino de los archivos transpilados
    ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/tsconfig2l.png)
    - rootDir: indicamos que nuestros archivos TypeScript, los cuales serán “compilados” luego, estarán en la carpeta src
    ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/tsconfig3l.png)
  - Creamos el archivo 02-demo2.ts dentro de la carpeta src con el siguiente código:
  ```
  const numbers = [1,3,4];
  ```
  - Probemos la compilación de nuestros archivos:
  ```
  npx tsc
  ```
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/tsconfig4l.png)
  Observaremos que los archivos transpilados se encuentran en nuestra carpeta dist.

## Qué es el tipado en TypeScript
  El tipado en TypeScript hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, conocido como type annotation, con esto evitamos mezclar distintos tipos de datos.

  ### La flexibilidad de JavaScript
  Nosotros podemos declarar una variable de un tipo de valor y a lo largo del código ir cambiándolo si lo deseamos. Por lo que en un momento puede ser de tipo string y después de tipo boolean:
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/tsl.jpg)
  Para proyectos de sofware que tienen una gran escalabilidad, esto podría ser fuente de fallas en el programa.

  ### Controlando la flexibilidad
  Gracias a TypeScript podemos manejar el tipado de las variables para evitar anomalías en el código.

  En JavaScript, para declarar una variable constante lo realizamos así:
  ``` javascript
  const productPrice = 12;
  ```
  En TypeScript, para el caso anterior, es similar solo que añadimos : y el tipo de dato de la variable, la cual sería number. A esto último se le llama type annotation o anotación de tipo:
  ``` typescript
  const productPrice: number = 12;
  ```

## Tipos inferidos
  TypeScript puede inferir el tipo de dato de una variable a pesar de no haberlo declarado explícitamente.

  ### Inferencia de tipos
  A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:
  ``` typescript
  let myName = "Victoria";
  ```
  Si bien no indicamos el tipo de dato como se haría de esta manera:
  ``` typescript
  let myName: string = "Victoria";
  ```
  TypeScript infiere que la variable myName será del tipo string y en adelante no podrá tomar un valor que no sea de este tipo de dato.
  ``` typescript
  myName = 30; 
  //Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
  ```
  En Visual Studio Code puedes obtener autocompletado teniendo sugerencias según el tipo de dato que sea la variable:
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ts6l.png)

  ### Nombres de variables iguales
  TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

  Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:
  ``` typescript
  (() => {
    const myName = "Victoria";
  })();
  ```
  Lo mismo por cada variable que desees tener el mismo nombre (myName para este ejemplo) deberás crear este tipo de función para evitar que te den estas advertencias.

## Numbers
  Herramienta para VSCode [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) funcione presionas “F1” y eliges “Quokka: start on current file” es todo.

  El tipo de dato number se usa para variables que contendrán números positivos, negativos o decimales.

  ### Operaciones
  En JavaScript, una variable de tipo number puede fácilmente ser concatenado con otra de tipo string:

  En JavaScript
  ``` javascript
  let myNumber = 30;
  myNumber = myNumber + "5"; //El resultado sería '305'
  ```
  Sin embargo, esto podría llevar confusiones y errores durante la ejecución del programa, además de estar cambiando el tipo de dato de la variable. Por ello, en TypeScript solo se pueden hacer operaciones numéricas entre números valga la redundancia:
  ``` typescript
  let myNumber: number = 30;
  myNumber = myNumber + 10; //CORRECTO
  myNumber = myNumber + "10"; //INCORRECTO
  ```
  ### Uso de variables sin inicializar
  Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial:
  ``` typescript
  let productInStock: number;
  console.log("Product in stock: " + productInStock);
  //Nos señalará como error pues no se le ha dado un valor a la variable productInStock.
  ```
  Señalar que si no se va a inicializar aún la variable, definir explícitamente el tipo de dato, pues TypeScript no puede inferirlo si no tiene un valor inicial.
  
  ### Conversión de números de tipo string a tipo number
  Para esto usaremos el método parseInt:
  ``` typescript
  let discount: number = parseInt("123");

  let numeroString: string = "100";
  let nuevoNumero: number;
  nuevoNumero = parseInt(numeroString);
  ```
  Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario, el resultado será de tipo NaN (Not a Number):
  ``` typescript
  let numeroPrueba: number = parseInt("palabra");
  console.log(numeroPrueba); //NaN
  ```
  ### Binarios y Hexadecimales
  TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango:
  ``` typescript
  Binarios: se definen colocando "0b" al inicio del valor
  let primerBinario = 0b1010; //CORRECTO
  let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

  Hexadecimales: se definen colocando "0x" al inicio del valor
  let primerHexa = 0xfff; //CORRECTO
  let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido
  ```
  En consola, si están correctamente asignados, se hará una conversión a decimal de dichos números:
  ``` typescript
  let primerHexa = 0xfff;
  console.log(primerHexa); // 4095

  let primerBinario = 0b1010;
  console.log(primerBinario); // 10
  ```
  ### Consejo
  Cuando definas una variable de tipo de dato number, es preferible que el nombre de tipo sea en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato number y no al objeto Number propio del lenguaje:
  ``` typescript
  let myNumber: number = 20; // Buena practica.
  let otherNumber: Number = 20; // Mala practica.
  ```
