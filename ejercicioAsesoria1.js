/* Ejercicio de Repaso Semana 1
Para calcular el promedio de prácticas de un curso,
se tomará la calificación de las 4 prácticas que se hicieron,
de estas 4 se va a eliminar la práctica con menor calificación
y se obtendrá el promedio de las 3 prácticas restantes. */

const P1 =8;
const P2 =9;
const P3 =10;
const P4 =7;

var resultado = 0;

var califMenor = P1;

if(P2< P1){
    califMenor = P2;
}
else if(P3 < califMenor) {
    califMenor = P3;
}
else if(P4< califMenor ) {
    califMenor = P4;
}


var resultado = (P1 + P2 + P3 + P4 - califMenor) / 3;

console.log(califMenor);
console.log(resultado);