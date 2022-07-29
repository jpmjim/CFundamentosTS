(()=>{
  let prices = [1,2,2,1,1,212, 'hola', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);
  console.log('prices', prices);

  let products = ['hola', true];
  products.push(false);
  console.log('products', products);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);
  console.log('mixed', mixed);

  let numbers = [1,2];
  let multiply = numbers.map(item => item * 2);
  console.log('numbers', multiply);
})();
