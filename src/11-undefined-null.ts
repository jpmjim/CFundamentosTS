(()=> {
  //  let myNumber: number = undefined; // Error
  //  let myString: string = null;    // Error
    let myNull: null = null;       // OK
    let myUndefined: undefined = undefined; // OK

    let myNumber: number | null = null; //
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'aas';

    function hi(name: string | null) {
      let hello = 'Hola ';
      if (name) {
        hello += name.toLowerCase();
      } else {
        hello += 'nobody';
      }
      console.log(hello);
    }

    function hiV2(name: string | null) {
      let hello = 'Hola ';
      hello += name?.toLowerCase() || 'nobody';
      console.log(hello);
    }

    hi('Nicolas');
    hi(null);

    hiV2('Nicolas');
    hiV2(null);
  })();
