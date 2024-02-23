i = 0;
s = 0;
while ( i < 5 ) {
    idade = prompt("entre com a idade");
    idade = parseInt(idade);
    s = s + idade;
    i = i + 1;
}
console.log ('Total' , s);