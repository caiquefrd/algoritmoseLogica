/*
let a = 1; //declarada fora do bloco
if (a == 1) {
    let a = 2; //esta variável possui o escopo deste bloco
    console.log("Dentro do bloco:", a);
}


function teste() {
    var b = 2;
    if (b == 2) {
        var b = 890; //esta variável atualiza a variável b
        console.log("Dentro do if:", b);
    }
    console.log("Fora do if:", b);
}
teste();



function teste() {
    if (true) {
        c = 3; //esta variável possui o escopo de todo o programa
    }
    console.log("Fora do if:", c);
}
teste();
console.log("Fora da função:", c);

console.log(x); //leitura da variável x. O conteúdo de x é undefined
var x = 10; //declaração da variável x

const vet = [];
vet[0] = 10;
vet[1] = 20;

console.log(vet); //não gera erro, pois é apenas a leitura da variável vet



um();
function um() {
    if (true) {
        var x = 10;
    }
    console.log("x:", x);
}

*/


// dois();
// function dois() {
//     var x = 10
//     if (true) {
//         const x = 20;
//         console.log (x);
//     }
//     console.log("x:", x);
// }



tres();
function tres() {
    x = 10;
    if (true) {
        var x = 20;
    }
}
console.log("x:", x); 


// banho ()
// function banho () {
//     if (false) {
//         console.log("ananda cheirosa")
//     }
//     else {
//         console.log("ananda fedida")
//     }
// 

// const quatro = {};
// quatro.nome = "Exercício";
// quatro = []; 

// cinco();
// function cinco() {
//     console.log("x:", x);
//     if (true) {
//         var x = 20;
//     }
// }
