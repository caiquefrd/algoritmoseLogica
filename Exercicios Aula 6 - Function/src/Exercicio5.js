function inverte(nome) {
  i = 0;
  saida = "";
  while (i < nome.length) {
    saida = nome[i] + saida ;
    i++;
  }
  return (saida)
}

r = inverte("Pedro");
console.log("Invertido:", r);

r = inverte("Mariana");
console.log("Invertido:", r);
