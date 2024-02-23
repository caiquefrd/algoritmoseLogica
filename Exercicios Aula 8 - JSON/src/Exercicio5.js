
disciplina = {
  nome: "Algoritmos",
  carga: 80,
  notas: [
    {
      peso: 0.25,
      nota: 8.2,
    },
    {
      peso: 0.35,
      nota: 7.5,
    },
    {
      peso: 0.4,
      nota: 9,
    },
  ],
};

a = disciplina.notas[0].peso * disciplina.notas[0].nota;
b = disciplina.notas[1].peso * disciplina.notas[1].nota;
c = disciplina.notas[2].peso * disciplina.notas[2].nota;

console.log("P1:", disciplina.notas[0]);
console.log("P2:", disciplina.notas[1]);
console.log("Projeto:", disciplina.notas[2]);
console.log("Nota final:", a + b + c);
