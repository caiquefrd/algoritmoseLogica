nros = "8,2,3,5,9";
nros = nros.split(",");
soma = 0;

for (i = 0; i < nros.length; i = i + 2) {
  soma = soma + parseInt(nros[i]);
}
console.log("Somatório:", soma);
