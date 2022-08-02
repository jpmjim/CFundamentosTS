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
## Booleans
  Este tipo de dato puede tomar dos valores: true o false.
  ``` typescript
  let isEnable: boolean = true;
  let isNew = false;
  ```

## Strings
  Este tipo de dato nos permite almacenar una cadena de caracteres.

  Podemos definir un string con:
  - Comillas simples:
  ``` typescript
  let myProduct = 'Soda'; //CORRECTO
  let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
  let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO
  ```

  Se pueden usar comillas dobles dentro, más no otra vez comillas simples.
  - Comillas dobles:
  ``` typescript
  let myProduct = "Soda"; //CORRECTO
  let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
  let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO
  ```
  Se puede usar comillas simples dentro, más no otra vez comillas dobles.
  - Usando backticks:
  ``` typescript
  let myName = `Frank`;
  ```

  Esta forma de asignar string trae algunas ventajas:
  - Declarar valores de múltiples líneas:
  ``` typescript
  let texto = `
    Nunca
    pares
    de aprender :)
  `;
  ```
  - Concatenar dentro del mismo string. Para esto es necesario usar este símbolo del dólar seguido de llaves ${} y escribir lo que queremos concatenar dentro de esas llaves:
  ``` typescript
  let variableTitulo = "TypeScript";
  let summary = `
      title: ${variableTitulo}
  `;
  ```
  - También respeta la indentación:
  ``` typescript
  let html= `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      ...
    </body>
  </html>
  `;
  ```

## Arrays
  Es una colección de datos ordenada. Los definimos de la siguiente manera:
  ``` typescript
  let prices = [1,2,3,4,5];

  /* Método Push para agregar un elemento al final del array */
  prices.push(6);
  console.log(prices); // [1,2,3,4,5,6]
  ```
  Para el array prices, TypeScript, de no indicarle explícitamente, va a inferir que este solo contendrá valores del tipo number, por lo que si se quiere agregar un valor string, por ejemplo, nos indicará un error:
  ``` typescript
  prices.push("texto"); //ERROR. Se espera agregar solo números al array.
  ```
  Esto debido a que en su inicialización se le asignó un array que solo contenía números.

  También nos indicará error si pretendemos hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo:
  ``` typescript
  let meses = ["Mayo","Junio","Julio"];
  meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.
  ```

  ### Tipado de arrays en TypeScript
  Lo puedes definir así:
  
  - Indicar explícitamente los tipos de datos que almacenará el array:
  ``` typescript
  let prices: (number | string)[] = ["hola",2,4,6,"mundo"];
  let otherPrices: (boolean | number)[];
  ```

  Para este caso, a menos que la variable sea una constante, no es necesario que inicialices la variable, pues ya le indicaste el tipo de dato.

  - En la inicialización de la variable, colocar datos con el tipo de dato que quieres que soporte tu array en adelante para que lo pueda inferir TypeScript:
  ``` typescript
  let prices = ["hola",2,4,6,"mundo"];
  // "hola", "mundo" => string
  // 2,4,6 => number
  ```
  Dejamos claro que queremos que soporte los tipos de dato string y number.

## Any
  Es un tipo de dato exclusivo de TypeScript. Su traducción sería “cualquiera”, pues literalmente nos permite almacenar cualquier tipo de dato en una variable:
  ``` typescript
  let myDynamicVar: any;

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string
  ```
  Se recomienda no usar este tipo de dato, pues se considera mala práctica.

  ### Importancia del Any
  La utilidad de any radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

  ### Tratar Any como un primitivo
  Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:
  ``` typescript
  //Caso 1
  myDynamicVar = "HOLA";
  const otherString = (myDynamicVar as string).toLowerCase();

  //Caso 2
  myDynamicVar = 1212;
  const otherNumber = (<number>myDynamicVar).toFixed();
  ```
  Como observamos, podemos tratar nuestra variable any como string en el primer caso y como number en el segundo. Después de esto, podemos acceder a los métodos toLowerCase() y toFixed() según el tipo de dato correspondiente.

## Union Types
  Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
  ``` typescript
  let userId: string | number;

  userId = 10;
  userId = "10";

  function helloUser(id: string | number){
      console.log(`Hola usuario con el número de id ${id}`);
  }
  ```
  Aquí indicamos que id y userId pueden ser de tipo string o number.
  
  ### Una mejor práctica
  El tipo de dato any nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.

## Alias y tipos literales
  Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:
  ``` typescript
  type UserID = string | boolean | number;
  ```
  ¡Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number!
  ```typescript
  let dynamicVar: UserID = "300";

  dynamicVar = true;
  dynamicVar = 200;
  ```
  Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.
  ```typescript
  type UserID = string | boolean | number;

  let dynamicVar: UserID = "300";

  function helloUser( userId: UserID ) {
      console.log(`Un saludo al usuario con el número de id ${userId}`);
  }
  ```
  Nota: la palabra type en los Alias es algo propio de TypeScript.

  ### Tipos Literales (Literal Types)
  Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:
  ```typescript
  let shirtSize: "S" | "M" | "L" | "XL";

  shirtSize = "M"; //CORRECTO
  shirtSize = "S"; //CORRECTO
  shirtSize = "qwrty"; //ERROR. No está en las opciones.
  shirtSize = "SS"; //ERROR. Letra de más.
  shirtSize = "m"; //ERROR. Está en minúscula.
  ```
  Definimos que la variable shirtSize pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo string y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

  ### Alias + Tipos Literales
  También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:
  ```typescript
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  let shirtSize: Sizes;
  shirtSize = "M";

  function yourSize( userSize: Sizes ){
      console.log(`Tu medida es ${userSize}`);
  }
  ```

## Null y Undefined
  Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, string o number.

  El tipo de datonull es para indicar un valor nulo y undefined para algo indefinido. Son tipos diferentes.

  ### Null y Undefined como tipo Any
  En TypeScript, si no especificamos que va a ser null o undefined, estos son inferidos como tipo any:
  ```typescript
  let myVar = null; //Tipo any
  let otherVar = undefined; //Tipo any

  let myNull: null = null; // Tipo null
  let myUndefined: undefined = undefined; //Tipo undefined
  ```

  ### Union Types como emergencia
  Hay casos en la que queremos que una variable sea de tipo string o number y que al inicializarlas sean de tipo null o undefined para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los Union Types:
  ```typescript
  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = "Hola TypeScript";
  ```

## Funciones
  Las funciones son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:
  - Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):
  ```typescript
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
  ){
    return {
          title,
          createdAt,
          stock,
          size
      }
  }
  ```
  En el argumento createdAt se indica que es de tipo Date en alusión al objeto Date propio de JavaScript y no a un tipo de dato como string o number. Son diferentes las definiciones.
  - Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:
  ```typescript
  const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
  )
  ```
  ![](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/ts10l.png)

  En Visual Studio Code, si dejas el cursor sobre el nombre de la función que vas a invocar, te mostrará un mensaje con los detalles de la función, lo que espera como parámetros y lo que devolverá indicando además el orden y el tipo de dato de cada variable.
  - Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:
  ```typescript
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
      title: string,
      createdAt: Date,
      stock?: number,
      size?: Sizes
  ){
      /*Código de la función*/
  }
  ```
  Nota: cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:
  ```typescript
  function randomFunc(title: string, amount?: number){} //CORRECTO

  function otherFunc(title?: string, amount: number){} // ERROR
  ```

## Retorno de funciones
  En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno:
  ### Retornos tipados en TypeScript
  El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:
  - **Void: funciones sin retorno**
    Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void. Se definen así:
    ```typescript
    function imprimirNombre(yourName: string): void {
    console.log(`Hello ${yourName}`);
    }
    ```
  - **Funciones con retorno** Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:
    ```typescript
    function sumar(a: number, b: number): number {
    return a + b;
    }
    function holaMundo(): string {
    return "Hello, World!";
    }
    ```
  También los retornos pueden ser más de un tipo de dato:
  ```typescript
  function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if( b > a ) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
  }
  ```
  ### TypeScript también lo infiere
  Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea string, number, etc.) o si nada es devuelto (tipo void).

## Objetos en funciones
  Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:
  ```typescript
  function imprimirDatos( data: { username: string, email: string } ): void {

    console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)
    
  }

  imprimirDatos({
        username: 'freddier',
        email: 'freddy@email.com'
  })
  ```
  En el ejemplo, el nombre data hace referencia al objeto que recibirá la función imprimirDatos. Por ello, para acceder al valor de username lo definimos en el console.log como data.username y para el email como data.email, pues así es como se accede a las propiedades de un objeto.

  Finalmente, cuando invocamos imprimirDatos y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como data tal como lo hicimos en la definición de la función.

## Objetos como tipos
  En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:
  ```typescript
  type userData = {
    username: string,
    email: string
  }
  ```
  Y luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir:
  ```typescript
  type userData = {
    username: string,
    email: string
  }

  let usersList: userData[] = [];

  usersList.push({
      username: "freddier", //CORRECTO
      email: "freddy@email.com", //CORRECTO
  });
  usersList.push({
      username: "cvander", //CORRECTO
      email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
  });
  ```
  