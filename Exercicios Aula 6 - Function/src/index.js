function mensagem (){
    console.log ("oie");
}

function saudacao(nome){
    console.log("oie", nome);
}

function somar(x,y){
    console.log ("soma:", x + y);
}

function parImpar ( nro ){
    if ( nro %2 == 0 ){
    console.log (nro, "é par");
    }
    else {
        console.log (nro, "é impar")
    }
}

function pow (x,y){
    return x**y;
}

r = pow(2,3);
console.log(r);


mensagem ();
saudacao ("Ana");
saudacao ("Pedro");
somar ( 10,5 );
somar ( 200, 560 );
somar ( 400, 1050 );
parImpar ( 900 );