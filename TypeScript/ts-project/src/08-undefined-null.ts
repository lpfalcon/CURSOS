(() => {
  // let numberVariable:number = undefined error
  //let stringVariable:string = null error
  let nullVariable: null = null;
  let undefinedVariable: undefined = undefined;

  let numberVariable: number | null = null;
  let stringVariable: string | undefined = undefined;
  stringVariable = 'String';

  function nullParams(name: string | null = null) {
    let stringValue = 'HI';
    return   `${stringValue} ${name?.toLocaleUpperCase() || 'NOBODY' }`;
  }

  console.log(nullParams());
  console.log(nullParams('Laura'));
})();
