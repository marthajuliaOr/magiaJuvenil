//OPERADORES ARITMETICOS

//definción de operandos
var operandoN1= 10;
var operandoN2 = 2;

//operador de adición (+)
var resultado = operandoN1 + operandoN2;
console.log (resultado);

//operador de multiplicación (*)
var resultado2 = operandoN1 * operandoN2;
console.log (resultado2);

//operador de resta (-)
var resultado3 = operandoN1 - operandoN2;
console.log (resultado3);

//operador de división (/)
var resultado4 = operandoN1 / operandoN2;
console.log ( "El resultado de tu división es:"+ resultado4);

//operador de incremento (++), sumandole 1
resultado4 ++;
console.log ( "Incrementando la variabe resultado4:"+ resultado4);

//operador de decremento (--), restandole 1
resultado4 --;
console.log ("Decremento la variable resultado4:"+ resultado4);

//operador exponenciación (**)
var resultado5 = operandoN1 ** operandoN2;
console.log (resultado5);

//operador modulo (%)
var resultado6 = operandoN1 % operandoN2;
console.log (resultado6);

//OPERADORES DE ASSIGNACIÓN
//operador =
operandoN1 = operandoN2
console.log(operandoN1);
var operandoN1= 10;
var operandoN2 = 2;

//operador +=
operandoN1 += operandoN2
console.log(operandoN1);
var operandoN1= 10;
var operandoN2 = 2;

//operador -=
operandoN1 -= operandoN2
console.log(operandoN1);
var operandoN1= 10;
var operandoN2 = 2;

//operador *=
operandoN1 *= operandoN2
console.log(operandoN1);
var operandoN1= 10;
var operandoN2 = 2;

//operador /=
operandoN1 /= operandoN2
console.log(operandoN1);
var operandoN1= 10;
var operandoN2 = 2;

//operador %=
operandoN1 %= operandoN2
console.log(operandoN1);
var operandoN1= 10;
var operandoN2 = 2;

//operador **=
operandoN1 **= operandoN2
console.log(operandoN1);

//OPERADORES DE COMPARACIÓN
var nComparacion1 = 5;
var nComparacion2 = "10";
var resultadoComparacion= (nComparacion1 < nComparacion2);
console.log (resultadoComparacion);

//OPERADORES LÓGICOS
var opLN1 = 5;
var opLN2 = 50;
var opLN3 = 30;
//operador &&
var resultadoOperadorLY = ( opLN1 < opLN2 ) && (opLN2 < opLN3);
console.log("resultadoOperadorlogico es:"+resultadoOperadorLY);
//Resultado operador &&
//t && t = t
//f && f = f
//t && f = f
//f && t = f


//operador ||
var resultadoOperadorLO = ( opLN1 < opLN2 ) || (opLN2 < opLN3);
console.log("resultadoOperadorlogico es:"+resultadoOperadorLO);

//Resultado operador ||
//t || t = t
//f || f = f
//t || f = t
//f || t = t


//Operador negación !
var resultadoOperadorLN = !resultadoOperadorLO;
console.log( "resultadoOperadorLN es:"+ resultadoOperadorLN );
