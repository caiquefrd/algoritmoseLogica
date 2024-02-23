function notaAjustadaJSON(pontuacoes) {
  let menorNota = pontuacoes[0].nota; //cria a variavel vazia

  for (let i = 0; i < pontuacoes.length; i++) { // percorre o array procurando a menorNota nota e a colocar numa variavel chamada menorNota
    if (pontuacoes[i].nota < menorNota) {
      menorNota = pontuacoes[i].nota;
    }
  }
  for (let i = 0; i < pontuacoes.length; i++) { //percorre novamente o array e procura a posição que bater com o valor da variavel
    if (pontuacoes[i].nota == menorNota) {
      pontuacoes[i].nota = 6;
      break;
    }
  }
  return pontuacoes;
}

const pontuacoes = [
  { avaliacao: "P1", nota: 9.1 },
  { avaliacao: "P2", nota: 6.5 },
  { avaliacao: "P3", nota: 7.2 },
  { avaliacao: "Atividades", nota: 4.5 },
  { avaliacao: "API", nota: 4.5 },
];

console.log("Notas ajustadas:", notaAjustadaJSON(pontuacoes));

//function media
function mediaFinal(pontuacoes) {
  console.log(notaAjustadaJSON(pontuacoes));
  
  let notas = notaAjustadaJSON(pontuacoes);
  let somatorio = 0;

  for (let i = 0; i < notas.length; i++) {
    somatorio += pontuacoes[i].nota;

    media = somatorio / pontuacoes.length; //pega o
  }
  return media;
}

console.log("Média final:", mediaFinal(pontuacoes));
