//export {} --truque para tirar a sangria da variavel resposta nos outros arquivos ( colocar no final do arquivo )

/*
:string -> define o tipo de campo para string
:number  -> define o tipo de campo para number
:boolean -> define o tipo de campo para bolean
:string[] -> define o tipo de campo para array de string
:number[] -> define o tipo de campo para array de number
:bolean[] -> define o tipo de campo para array booleano
*/


//Exercicio 1 : receber um array de numeros inteiros separados por virgula e converter em array
// function converter(entrada: string): number[] {
//     const textos: string[] = entrada.split(",");
//     const nros: number[] = []; //cria um array vazio do tipo number
//     for (let i = 0; i < textos.length; i++) {
//         nros[i] = parseInt(textos[i]);

//     }
//     return nros;
// }

// const teste: string = "30,60,50,10,20,40";
// const resposta = converter(teste);
// console.log(resposta);





//Exercicio2 : formatar a string de endereco para uma extrutura JSON
// function formatar(entrada: string) {
//     const textos = entrada.split(";");
//     const obj = {
//         logradouro: textos[0].trim(),  //propriedade .trim() remove os espaços do array
//         bairro: textos[1].trim(),
//         municipio: textos[2].trim(),
//         uf: textos[3].trim(),
//         cep: textos[4].trim()
//     }
//     return obj
// }

// const endereco = "R. Faria Lima, 155; Jardim Santa Maria; Jacareí; SP; 12328-070";
// const resposta = formatar(endereco);
// console.log(resposta);



//Exercicio 3 : criar a quantidade solicitada de numeros aleatórios
// function aleatorio(quantidade: number) {
//     const itens: number[] = [];
//     for (let i = 0; i < quantidade; i++) {
//         itens[i] = Math.floor(Math.random() * 100); //mathfloor pega o primeiro numero inteiro, math.random gera um numero aleatorio decimal
//     }
//     return itens;
// }

// const nros = aleatorio(10);
// console.log(nros);



// Exercicio 4 : gerar uma quantidade de numeros aleatorios dentro de um intervalo
// function aleatorio(quantidade: number, min: number, max: number) {
//     const itens: number[] = [];
//     const intervalo = max - min; //institui o intervalo dos numeros
//     for (let i = 0; i < quantidade; i++) {
//         itens[i] = Math.floor(Math.random() * intervalo) + min; //mathfloor pega o primeiro numero inteiro, math.random gera um numero aleatorio decimal, +min desloca o intervalo entre max e min
//     }
//     return itens;
// }

// const nros = aleatorio(5, 50, 100);
// console.log(nros);



//Exercicio 5 : ordenar o resultado do exercicio 4
// function aleatorio(quantidade: number, min: number, max: number) {
//     const itens: number[] = [];
//     const intervalo = max - min; //institui o intervalo dos numeros
//     for (let i = 0; i < quantidade; i++) {
//         itens[i] = Math.floor(Math.random() * intervalo) + min; //mathfloor pega o primeiro numero inteiro, math.random gera um numero aleatorio decimal, +min desloca o intervalo entre max e min
//     }
//     return itens.sort(); //.sort() ordena o resultado de return.itens
// }

// const nros = aleatorio(5, 50, 100);
// console.log(nros);



//Exercicio 6 : receber um array com numeros inteiros e retortar um array apenas com os que forem pares.
// function pares(elementos: number[]) {
//     const itens: number[] = [];
//     for (let i = 0; i < elementos.length; i++) {
//         if (elementos[i] % 2 == 0) {
//             itens.push(elementos[i]); //adiciona a variavel itens apenas quando o numero for par
//         }
//     }
//     return itens;
// }

// const nros = [21, 12, 18, 15, 28, 19, 23, 14];
// const resultado = pares(nros);
// console.log(resultado)



//Exercicio 7 : alterar o exercicio anterior para a função receber um segundo parametro, e retornar apenas os valores multiplos desse parametro
// function multiplo(elementos: number[], parametro:number) {
//     const itens: number[] = [];
//     for (let i = 0; i < elementos.length; i++) {
//         if (elementos[i] % parametro == 0) {
//             itens.push(elementos[i]); //adiciona a variavel itens apenas quando o numero for multiplo do parâmetro
//         }
//     }
//     return itens;
// }

// const nros = [21, 12, 18, 15, 28, 19, 23, 14];
// const resultado = multiplo(nros, 4);
// console.log(resultado)



//Exercicio 8 : adicionar mais um parâmetro ao exercício anterior
// function multiplo(elementos: number[], parametro1: number, parametro2: number) {
//     const itens: number[] = [];
//     for (let i = 0; i < elementos.length; i++) {
//         if (elementos[i] % parametro1 == 0 || elementos[i] % parametro2 == 0) {
//             itens.push(elementos[i]); //adiciona a variavel itens apenas quando o numero for multiplo de algum dos parâmetros
//         }
//     }
//     return itens;
// }

// const nros = [21, 12, 18, 15, 28, 19, 23, 14];
// const resultado = multiplo(nros, 4, 5);
// console.log(resultado)




//Exercicio 9 : mostrar apenas a quantidade de multiplos do exercicio anterior
// function contaMultiplo(elementos: number[], parametro1: number, parametro2: number) {
//     let quantidade:number = 0;
//     for (let i = 0; i < elementos.length; i++) {
//         if (elementos[i] % parametro1 == 0 || elementos[i] % parametro2 == 0) {
//             quantidade ++ // adiciona + 1 a variavel quantidade para mostrar apenas quantos multiplos existem dentro do array
//         }
//     }
//     return quantidade;
// }

// const nros = [21, 12, 18, 15, 28, 19, 23, 14];
// const resultado = contaMultiplo(nros, 4, 5);
// console.log(resultado)



//Exercicio 10 : alterar o codigo anterior para mostra o resultado em extrutua JSON
function contaMultiplo(elementos: number[], parametro1: number, parametro2: number) {
    let quantidade:number = 0;
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] % parametro1 == 0 || elementos[i] % parametro2 == 0) {
            quantidade ++ // adiciona + 1 a variavel quantidade para mostrar apenas quantos multiplos existem dentro do array
        }
    }
    return {quantidade}; // envolver por {} o coloca numa extrutura JSON
}

const nros = [21, 12, 18, 15, 28, 19, 23, 14];
const resultado = contaMultiplo(nros, 4, 5);
console.log(resultado)

