{
    //Exercicio 1 : imprimir os numeros do intervalo indicado na função
    function imprimir(a, b) {
        for (let i = a; i <= b; i++) {
            console.log(i)
        }
    }


    imprimir(5, 10);
}

{
    //Exercicio 2 : fazer a mesma coisa do exercicio 1, porem sem declaração de variavel
    function imprimir(a, b) {
        for ( ; a <= b ; a++)
        console.log(a);
    }
    imprimir (5,10);
}

{
    //Exercicio 3 : modificar o codigo dos exercicios anteriores para que o programa funcione com qualquer variação de numeros.
    function imprimir(a,b){ 
        if( b < a ){     // predefine um if caso o valor de b seja menor que o de a.
          let temp = a;  // temporariamente, a variavel temp recebe o valor de a.
          a = b;         // substitui o valor de a por b, atribuindo o valor menor para a
          b = temp;      // caso o b seja menor que o a, substitui os valores utilizando uma variavel temp (temporária).
        } 
        for(; a <= b ; a++ ){ 
            console.log( a ); 
          } 
        } 

        imprimir(5,10); 
        imprimir(19,15);
}

{
    //Exercicio 4: programar para retornar o resultado da operação
    function operacao(a, b, tipo) {
        if (tipo == '+') {
            return a + b;
        }
        else {
            if (tipo == '-') {
                return a - b;
            }
            else {
                if (tipo == '*') {
                    return a * b;
                }
                else {
                    return a / b;
                }
            }
        }
    }

    let r = operacao(10, 4, "+");
    console.log("Soma:", r);

    r = operacao(10, 4, "-");
    console.log("Subtração:", r);

    r = operacao(10, 4, "*");
    console.log("Multiplicação:", r);

    r = operacao(10, 4, "/");
    console.log("Divisão:", r);
}

{
    //Exercicio 5: retornar NaN quando a operação não for conhecida
    function operacao(a, b, tipo) {
        let r = NaN;
        if ( tipo == '+') {
            r = a + b;
        }
        else {
            if ( tipo == '-') {
                r = a - b;
            }
            else {
                if (tipo == '*') {
                    r = a * b;
                }
                else {
                    if ( tipo == '/') {
                        r = a / b;
                    }
                }
            }
        }
        return r;
    }

    let r = operacao(10, 4, "+");
    console.log("Soma:", r);

    r = operacao(10, 4, "-");
    console.log("Subtração:", r);

    r = operacao(10, 4, "*");
    console.log("Multiplicação:", r);

    r = operacao(10, 4, "/");
    console.log("Divisão:", r);

    r = operacao(10, 4, "**"); // não encontra o parametro "**" e retorna o valor inicial da variavel (Nan)
    console.log("Potência:", r);
}

{
    //Exercicio 6 : concatenar o conteudo das strings de r
    function concatenar(a, b, c) {
        return a + " " + b + " " + c;
    }
    let r = concatenar("Ana", "Maria", "Silva");
    console.log("Nome:", r);

    r = concatenar("Pedro", "Antonio", "Marques");
    console.log("Nome:", r);
}

{
    //Exercicio 7: 
    function longo(a, b) {
        if ( a.length > b.length) {
            return a ;
        }
        else {
            return b;
        }
    }

    let r = longo("Ana", "Maria");
    console.log("Nome mais longo:", r);
    r = longo("Antonio", "Pedro");
    console.log("Nome mais longo:", r);
}

{
    //Exercicio 8: somar todos os numeros de 0 ate o  numero fornecido (nro)
    function somatorio(nro){ 
        let soma = 0; 
        for( i = 0; i <= nro; i++){ 
          soma += i; 
        } 
        return soma; 
      } 

      let r = somatorio(5); 
      console.log("Somatório:", r);
}

{
    // Exercicio 9 : fazer uma função com as propriedades da fatoração
    function fatorial (nro){ 
        let total = 1; //o valor neutro da multiplicação é 1 e não 0
        for(let i = 1; i <= nro; i++){ 
          total *= i; 
        } 
        return total; 
      } 

      let r = fatorial(5); 
      console.log("Fatorial:", r); 
      r = fatorial(2);  
      console.log("Fatorial:", r); 
      r = fatorial(1);  //multiplica o valor apenas uma vez pelo valor de i, que é 1
      console.log("Fatorial:", r); 
      r = fatorial(0);  //retorta o valor da variavel total, pois i não é menor do que 0, e o fatorial de 0 é 1
      console.log("Fatorial:", r);
}

{
    //Exercicio 10: apontar fatorial negativo inexistente
    function fatorial(nro) {
        if (nro < 0){  //define que não pode haver fatorial de numero negativo
            return NaN
        }
        let total = 1; //o valor neutro da multiplicação é 1 e não 0
        for (let i = 1; i <= nro; i++) {
            total *= i;
        }
        return total;
    }

    let r = fatorial(5);
    console.log("Fatorial:", r);
    r = fatorial(-2);
    console.log("Fatorial:", r);
}