a = prompt("Entre com o menor valor:");
b = prompt("Entre com o maior valor");
a = parseInt(a);
b = parseInt(b);
if ( a > b ) {
    aux = b;
    b = a;
    a = aux;
}
soma = 0;
while ( a <= b ){ 
    soma = soma + a;
    a = a + 1;   
}
console.log ("Somatório", soma)