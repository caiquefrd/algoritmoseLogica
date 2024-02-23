// // Descrição da atividade: fazer os exercícios para praticar. Não precisa entregar as respostas.
// // Objetivo:
// // • Praticar estrutura de decisão for;
// // • Tabela ASCII;
// // • Array;
// // • parseInt.

const prompt = require('prompt-sync')(); //--> possibilita gerar prompts no vscode 


//   /*Exercício 1
// O  programa  a  seguir  imprime  no  console  os  números  de  0  a  9.  Alterar  o  código  para  imprimir
// somente os números ímpares*/
//   for (let i = 0; i < 10; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }



//   /*Exercício 2
// Alterar o código o Exercício 1 para exibir os números ímpares na ordem decrescente.*/
//   for (let i = 9; i >= 0; i -= 2) {
//     console.log(i);
//   }



//   /*Exercicio 3
//   Complete o código para imprimir no console os caracteres da placa do automóvel.
// let placa = prompt("Entre com a placa:");
// for(let i = _____; i < _____________; ______ ){
//   console.log(_____________);
// } */
//   {
//     let placa = prompt("Entre com a placa:");
//     for (let i = 0; i < placa.length; i++) {
//       console.log(placa[i]);
//     }
//   }



//   /* Exercicio 4 Alterar o código do Exercício 3 para imprimir o código ASCII de cada caractere.
// O método charCodeAt retorna código do caractere na tabela ASCII
// */
//   {
//     let placa = prompt("Entre com a placa:");
//     for (let i = 0; i < placa.length; i++) {
//       placaAux = placa.charCodeAt([i])
//       console.log(placaAux);
//     }
//   }


// /*Exercício 5: Alterar o código do Exercício 4 para imprimir somente os dígitos numéricos.
// Na tabela ASCII os dígitos numéricos possuem valores de 48 a 57.
// Dica: será necessário comparar se o valor ASCII do caractere está no intervalo [48,57].
// */
// {
//   let placa = prompt("Entre com a placa:");
//   for (let i = 0; i < placa.length; i++) {
//     placaAux = placa.charCodeAt([i])
//     if (placaAux > 48 && placaAux < 57) {
//       console.log(placaAux);
//     }
//   }
// }



// // Exercício 6: Completar o código a seguir para imprimir na tela o somatório dos números do array.
// // Dica: será necessário converter cada elemento do array de string para inteiro.
// {
//   let nros = ["19", "11", "5", "10", "20"];
//   let soma = 0;
//   for (let i = 0; i < nros.length; i++) {
//     soma += parseInt(nros[i]);
//   }
//   console.log("Somatório:", soma);
// }



// // Exercício 7: Completar o código a seguir para imprimir na tela o somatório dos números que estão na string.
// // Observação: no Exercício 6 os números estavam em um array, aqui os números estão em uma string.
// // Dica: use o método split para quebrar a string em um array de strings.
// {
//   let nros = "19,11,5,10,20";
//   nros = nros.split(",");
//   let soma = 0;
//   for (let i = 0; i < nros.length; i++) {
//     soma += parseInt(nros[i]);
//   }
//   console.log("Somatório:", soma);
// }



// // Exercício 8: Complete o código para imprimir na tela somente o 1º caractere de cada nome.
// {
//   let nomes = ["Pedro", "Lucy", "Ana", "Karla"];
//   for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i][0]);
//   }
// }



// Exercício 9: Altere o código do Exercício 8 para imprimir na tela somente o último caractere de cada nome.
// Dica: será necessário saber a quantidade de caracteres de cada string.
// {
//   let nomes = ["Pedro", "Lucy", "Ana", "Karla"];
//   for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i][nomes[i].length - 1]);
//   }
// }



//Exercício  10:  Complete  o  código  a  seguir  para  imprimir  na  tela  individualmente  os  caracteres  de  cada  string  do 
//array.
  let nomes = ["Pedro ", "Lucy ", "Ana ", "Karla"];
  for (let i = 0; i < nomes.length; i++) {
    for (let j = 0; j < nomes[i].length; j++) {
      console.log(nomes[i][j]);
    }
  }



