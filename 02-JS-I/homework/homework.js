// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Nico';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(Nico) {
  // "Return" la string provista: str
  // Tu código:
  return Nico ;  
  
}

function suma(x, y) {
  var sum = x + y ; // "x" e "y" son números
  return sum ; // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
 var rest = x - y ; // Resta "y" de "x" y devuelve el valor
 return rest ; // Tu código:
}

function multiplica(x, y) {
 var producto = x * y ; // Multiplica "x" por "y" y devuelve el valor
 return producto ;  // Tu código:
}

function divide(x, y) {
 var cociente = x / y ; // Divide "x" entre "y" y devuelve el valor
 return cociente ; // Tu código:
}



function sonIguales(x , y) 
{
  if (x === y) 
 {                                               // Devuelve "true" si "x" e "y" son iguales
  return true ;
 }    
 else {                                           // De lo contrario, devuelve "false"
 return false ;                            // Tu código:
}}


function tienenMismaLongitud(str1, str2) {
 if (str1.length === str2.length)  {           // Devuelve "true" si las dos strings tienen la misma longitud
  return true ; }                              // De lo contrario, devuelve "false"
 else { return false ;                                // Tu código:
}}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) 
  { return true; }
  else { return false ;}
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if  (num > 50) {return true} else {return false}

}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = (x % y);
  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) {return true; } else {return false; }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 !== 0) {return true;} else {return false;}
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow (num , 2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow (num , 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

  return Math.pow (num , exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round (num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil (num);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!' ;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var completo = (nombre + ' ' + apellido);
  return completo ;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var h = 'Hola' 
  var saludo = (h + ' ' + nombre + '!')
  return saludo
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return (alto * ancho)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
