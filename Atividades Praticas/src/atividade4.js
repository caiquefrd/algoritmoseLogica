{
  // Exercicio 1 : quebrar a string com o atributo split.
  function quebrar(nome) {
    return nome.split("");
  }

  let r = quebrar("Pedro");
  console.log("Exer 1 - Separado:", r);
}


{
  //Exercicio 2 : substituir as letras "a" por traço "-".
  function quebrar(nome) {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
      if (v[i] == "a") {
        v[i] = "-";
      }
    }
    return v;
  }
  let r = quebrar("Mariana");
  console.log("Exer 2 - Separado:", r);
}


{
  //Exercicio 3 : substituir qualquer vogal por traço "-".
  function quebrar(nome) {
    const v = nome.split("");
    for (let i = 0; i < v.length; i++) {
      if (
        v[i] == "a" ||
        v[i] == "e" ||
        v[i] == "i" ||
        v[i] == "o" ||
        v[i] == "u"
      ) {
        v[i] = "-";
      }
    }
    return v;
  }
  let r = quebrar("Mariana");
  console.log("Exer 3 - Separado:", r);
}


{
  //Exercicio 4 : retornar array com letras envolvidas por "<div>".
  function quebrar(nome) {
    let v = nome.split("");
    for (let i = 0; i < v.length; i++) {
      v[i] = "<div>" + v[i] + "<div>";
    }
    return v;
  }

  let r = quebrar("Mariana");
  console.log("Exer 4 - Separado:", r);
}


{
  //Exercicio 5 : receber dois numeros inteiros e retornar um array com os o intervalo entre os numeros.
  function criar(a, b) {
    let v = []; //cria um array vazio
    for (let i = 0; a <= b; i++, a++) {
      (v[i] = a), b;
    }
    return v;
  }
  let r = criar(5, 10);
  console.log("Exer 5 - Array:", r);
}


{
  //Exercicio 6 : alterar o exercicio anterior para o resultado sair em forma de string "".
  function criar(a, b) {
    let v = []; //cria um array vazio
    for (let i = 0; a <= b; i++, a++) {
      v[i] = a + ""; //soma o resultado á uma string vazia
    }
    return v;
  }
  let r = criar(5, 10);
  console.log("Exer 6 - Array:", r);
}

{
  //Exercicio 7 : soma os numeros na mesma posição dos arrays, ex: A na posição 0 = 5, B na posição 0 = 3, a[0] + b[0] = 8.
    function somar(a, b) {
      let v = []; //cria um array vazio
      for (let i = 0; i < a.length; i++) {
        v[i] = a[i] + b[i];
      }
      return v;
    }
    let a = [5, 8, 3, 4, 9, 7];
    let b = [3, 5, 9, 2, 3, 4];
    let r = somar(a, b);
    console.log("Exer 7 - Soma:", r);
}


{
  //Exercicio 8 : mostras apenas o maior numero de cada posição dos dois arrays, ex: A[0] = 5, B[0] = 3, A é maior que B.
  function somar(a, b) {
    let v = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) {
        v[i] = b[i];
      }
      else {
        v[i] = a[i];
      }
    }
    return v;
  }

  let a = [5, 8, 3, 4, 9, 7];
  let b = [3, 5, 9, 2, 3, 4];
  let r = somar(a, b);
  console.log("Exer 8 - Maior:", r);
}


{
  //Exercicio 9 : transformar os arrays do exercicio 7 em um array bidimensional
  function somar(a, b) {
    return [a, b]; //coloca os arrays dentro de colchetes, criando um novo array
  }
  let a = [5, 8, 3, 4, 9, 7];
  let b = [3, 5, 9, 2, 3, 4];
  let r = somar(a, b);
  console.log("Exer - 9 Bidimensional:", r);
}

{
  //Exercicio 10: 
  function somar(m) {
    let soma = 0;
    for (let i = 0; i < m.length; i++) {  //percorre a quantidade de arrays ( 0, 1 ) .
      for (let j = 0; j < m[i].length; j++) { //percorre cada numero dos arrays 0 e 1.
        soma += m[i][j]; //soma os numeros dentro dos arrays
      }
    }
    return soma;
  }

  let m = [
    [5, 8, 3, 4, 9, 7],
    [3, 5, 9, 2, 3, 4]
  ]
  let r = somar(m);
  console.log("Exer 10 - Somatório:", r);
}