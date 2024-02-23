
/*Descrição da atividade: fazer os exercícios para praticar. Não precisa entregar as respostas.
Objetivo:
• Praticar a conversão de tipo de dados;
• Praticar estruturas de decisão e repetição while;
• Praticar operadores lógicos && (e) e || (ou);
• Fazer uso de alguns métodos da classe Math.
*/

const prompt = require('prompt-sync')(); //--> possibilita gerar prompts no vscode 


// //exercicio1
// let entrada = "15";
// entrada = parseInt(entrada)
// soma = entrada + entrada;
// console.log( soma );



// //exercicio2
// var idade = prompt ("entre com a idade");
// var idade = parseInt (idade)
// if( idade < 18 ){ 
//   console.log("de menor"); 
// } 
// else{ 
//   console.log("de maior"); 
// }



// //exercicio3
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     console.log(nro);
//     i = i + 1
// }



// //exercicio4
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     nroAux = nro * 100;
//     nroInt = Math.floor(nroAux);
//     console.log(nroInt);
//     i = i + 1
// }


// //exercicio5
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     nroAux = nro * 100;
//     nroInt = Math.floor(nroAux);
//     i = i + 1
//     if (nroInt % 2 == 0) {
//         console.log(nroInt)
//     }
// }



// //exercicio6
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     nroAux = nro * 100;
//     nroInt = Math.floor(nroAux);
//     if (nroInt % 2 == 0) {
//         console.log(nroInt);
//         i = i + 1
//     }
// }

// //exercicio7
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     nroAux = nro * 100;
//     nroInt = Math.floor(nroAux);
//     if (nroInt % 5 == 0 || nroInt % 3 == 0) {
//         console.log(nroInt);
//         i = i + 1
//     }
// }



// //exercicio8
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     nroAux = nro * 100;
//     nroInt = Math.floor(nroAux);
//     if (nroInt % 5 == 0 && nroInt % 3 == 0 && nroInt > 20) {
//         console.log(nroInt);
//         i = i + 1
//     }
// }



/* exercicio9: Altere o código do Exercício 6 para imprimir na tela seis números aleatórios menores que vinte ou 
 maiores que 80. */
// let i = 0;
// while (i < 6) {
//     nro = Math.random();
//     nroAux = nro * 100;
//     nroInt = Math.floor(nroAux);
//     if (nroInt < 20 || nroInt > 80) {
//         console.log(nroInt);
//         i = i + 1
//     }
// }


/* exercicio10: Altere o código do Exercício 6 para imprimir na tela seis números aleatórios. Os números menores 
que 50 precisam ser ímpares e os maiores ou iguais a 50 precisam ser pares */
let i = 0;
while (i < 6) {
    nro = Math.random();
    nroAux = nro * 100;
    nroInt = Math.floor(nroAux);
    if (nroInt < 50 && nroInt % 2 == 1 || nroInt >= 50 && nroInt % 2 == 0) {
        console.log(nroInt);
        i = i + 1
    }
}

