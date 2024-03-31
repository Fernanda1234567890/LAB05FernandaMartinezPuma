(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const listarEmails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(listarEmails);

  //Lista de compras de un carrito
  const productos: Array<Object> = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" }
  ];

  console.log(productos);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const sumar = (numero: number): number => {
    return numero + 3;
  }

  console.log(sumar(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capi(w: string): string {
    w = w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }

  console.log(capi("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let www: boolean = false;

  if(www) {
    alert('event');
  }

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let c: boolean = true;

  if(c) {
    console.log('welcome');
  }

  //variable para hallar el promedio de 3 numeros
  const promedio: number = (1 + 2 + 3) / 3;

  console.log(promedio);
  
  
  //variable que almacena el valor de PI
  let pi: number = 3.141592654;

  console.log(pi);
  

  //variabel que controla si un archivo es modificable 
  let modificar: boolean = false;

  if(modificar) {
    console.log('edit this file?');
  } 
  
  //variable para almacenar el valor de e
  const e: number = 2.718281828; 


})();