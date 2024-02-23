nros = "2,3,5,1,6,2";
nros = nros.split(",");
soma = 0;

for (i = 0; i < nros.length; i++) {
  soma = soma + parseInt(nros[i]);
}
console.log("Somatório:", soma);
