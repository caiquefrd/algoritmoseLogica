entradas = [9,2,4,5,8];
saídas = [3,5,2,7,4];
i = 0;
while ( i < entradas.length ) {
    if ( entradas [i] > saídas[i]) {
        console.log (i, ":", entradas[i])
    }
    else {
        console.log (i, ":", saídas[i])
    }
    i = i + 1;
}