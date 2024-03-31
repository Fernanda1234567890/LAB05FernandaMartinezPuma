(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }
  //aplicando dry

  function calculateOperation(e: number, f: number, g: number): number {
    const sumResult = e + f;
    const multiplicationResult = sumResult * g;
    return multiplicationResult;
  }
   const resultado1 = calculateOperation(2, 4, 6);
   console.log(resultado1);

   const resultado2 = calculateOperation(10, 20, 30);
   console.log(resultado2);

  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }
  //aplicando dry

  function calculateArea(shape: string, ...args: number[]): number {
    if (shape === "rectangle" && args.length === 2) {
        const [length, width] = args;
        return length * width;
    } else if (shape === "circle" && args.length === 1) {
        const [radius] = args;
        return Math.PI * radius * radius;
    } else {
        throw new Error("Forma geométrica no válida o argumentos incorrectos.");
    }
  }

  const rectArea = calculateArea("rectangle", 7, 8); 
  console.log("Área del rectángulo:", rectArea); 

  const circleArea = calculateArea("circle", 10); 
  console.log("Área del círculo:", circleArea); 


  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }
  //aplicando dry
    
  function validateInput(input: string, type: string): boolean {
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input);
    } else if (type === "username") {
        return input.length >= 5;
    } else {
        throw new Error("Tipo de entrada no válido.");
    }
  }

})();