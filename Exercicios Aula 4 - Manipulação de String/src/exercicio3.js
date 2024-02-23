a = prompt("Entre com o menor valor:");
b = prompt("Entre com o maior valor");
a = parseInt(a);
b = parseInt(b);
if ( a > b ) {
    aux = b;
    b = a;
    a = aux;
}
while ( a <= b ){ 
    console.log(a)
    a = a + 1;   
}