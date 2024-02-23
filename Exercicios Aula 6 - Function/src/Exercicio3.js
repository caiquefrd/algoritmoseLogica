function ultima(nome) {
  i = 0;
  while (i < nome.length - 1) {
    i++;
  }
  return nome[i];
}

u = ultima("Zuleide");
console.log("ultima letra:", u);

u = ultima("Roberval");
console.log("ultima letra:", u);

//ou

function ultima(nome) {
  pos = nome.length - 1;
  return nome[pos]
}

u = ultima("Zuleide");
console.log("ultima letra:", u);

u = ultima("Roberval");
console.log("ultima letra:", u);

