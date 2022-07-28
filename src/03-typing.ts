(()=> {
  let myProductName = 'Product 1'; // string
  let myProductPrice = 100; // number

  // myProductName = 100; // Error: Type 'number' is not assignable to type 'string'.
  myProductName = 'change' // OK
  myProductName.toLocaleUpperCase(); // OK

  // myProductPrice = '100'; // Error: Type 'string' is not assignable to type 'number'.
  myProductPrice.toFixed(2);// OK

  const myProductStock = 1000; // number
  // myProductStock = 2000; // Error: Cannot assign to 'myProductStock' because it is a constant or a read-only property.
  const myProductName2 = 'Product 1'; // string
})();
