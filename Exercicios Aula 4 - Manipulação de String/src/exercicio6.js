menor = Infinity;
while ( i < 5 ) {
    nro = prompt ("entre com o numero");
    nro = parseInt(nro);
    i = i + 1;
        if ( menor > nro ){
        menor = nro;
        }
}
console.log ("menor:", menor);