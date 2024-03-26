(()=>
  {

  let dynamicVariable: any;
  dynamicVariable = 'string';

  const stringCast = (dynamicVariable as string).toLowerCase(); // CASTING

  dynamicVariable= 1234

  const numberCast = (<number> dynamicVariable).toFixed() // CASTING

  console.log(stringCast, numberCast)
  }

)();
