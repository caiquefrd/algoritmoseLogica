function notaAjustada(notas) {
  let menorNota = notas[0]; //inicializa a variavel vazia 

  for (let i = 0; i < notas.length; i++) { //percorre o array procurando a menorNota nota e a colocar numa variavel chamada menorNota
    if (notas[i] < menorNota) {
      menorNota = notas[i];
    }
  }
  for (let i = 0; i < notas.length; i++) { //percorre novamente o array e procura a posição que bater com o valor da variavel 
    if (notas[i] == menorNota) {
      notas[i] = 6;
      break;
    }
  }
  return notas;
}

const notas = [9.1, 6.5, 7.2, 4.5, 8.1];
console.log("Notas ajustadas:", notaAjustada(notas));
