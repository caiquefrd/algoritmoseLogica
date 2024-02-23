entrada = " ";
senha = "abc";
i = 0;
while (entrada != senha, i < 3) {
    entrada = prompt("entre com a sua senha");
    if ( entrada != senha ){
        console.log("Senha incorreta")
    }
    else {
        console.log("acesso liberado")
    }
    i = i + 1;
}
