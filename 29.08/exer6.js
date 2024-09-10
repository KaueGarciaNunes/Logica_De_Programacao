const prompt = require("prompt-sync")();

const senha = prompt("Senha");

function verificarSenha(senha){
    if(senha.length < 8 ) return false;

    if (!/[A-Z]/.test(senha)) return false;

    if (!/[a-z]/.test(senha)) return false;


    if (!/\d/.test(senha)) return false;

    if (!/[!@#$%^&*(),.?":{}]|<>]/.test(senha)) return false;
    
    return true

    if (verificarSenha(senha)){
        console.log(" A Senha é Considerada forte");
        
}else{ console.log(("A senha é considerada fraca"));
}
}
