//do While and While.
//para comentar várias linhas shift + alt + a.
const r = require('readline-sync');

/* let nota;

do {
    nota = parseFloat(r.question("Digite uma nota (0 a 10):"));

    if(nota < 0 || nota > 10){
        console.log("Nota inválida. Digite uma nota (0 a 10).");
    }

}while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota); */

let soma = 0;
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
console.log("A média é: " + media.toFixed(2));
