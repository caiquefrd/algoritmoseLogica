nros = "2,3,4,1,2,5";
nros = nros.split(",");

for (i = 0; i < nros.length; i++) {
  nro = parseInt(nros[i]);
  if ( nro%2 == 0) {
    console.log(nros[i]);
  }
}
