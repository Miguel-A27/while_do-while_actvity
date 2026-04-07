//do While and While.
//para comentar várias linhas shift + alt + a.
const r = require('readline-sync');

//contador de 0 a 10, mas ele não termina até passar de 9. Ainda incompleto.
let contador1 = 0;

while (contador1 <= 9) {
    contador1 = parseFloat(r.question("Digite uma Nota de (0 a 10): "));
   
    if (contador1 < 0 || contador1 > 10) {
        console.log("Nota inválida.");
    }
    
} console.log("Nota válida: " + contador1);

//contador de 0 a 10 com Do While.
/* let nota;

do {
    nota = parseFloat(r.question("Digite uma nota (0 a 10):"));

    if(nota < 0 || nota > 10){
        console.log("Nota inválida. Digite uma nota (0 a 10).");
    }

}while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota); */

//???
/* let soma = 0;
let contador = 1;

//contador para controlar o numero de notas
while (contador <= 5) {
    //solicita a nota do usuario
    let nota = parseFloat(r.question(`Nota ${contador}: `));

    //realiza o calculo das notas, 5 notas.
    soma += nota;

    //incrementa o contador para a próxima nota.
    contador++;
}
// define a media a soma das 5 notas dividio por 5, para obter a média.
let media = soma / 5;

//printa a média e usa toFixed para limitar a 2 casas decimais.
console.log("A média é: " + media.toFixed(2)); */

//media com Do While.
/* let somaDoWhile = 0;
let contadorDoWhile = 1;

do {
    let nota = parseFloat(r.question(`Nota ${contadorDoWhile}: `));
    somaDoWhile += nota;
    contadorDoWhile++;
} while (contadorDoWhile <= 5);

let mediaDoWhile = somaDoWhile / 5;
console.log("A média é: " + mediaDoWhile.toFixed(2)); */