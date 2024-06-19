const readline = require('readline-sync');


jogo()

function jogo(){
let numero = Math.floor(Math.random() * 100)
let loop = true
let tentativas = 0
let escolha = ""


let pergunta = readline.questionInt("Escolha um numero: ")

while(loop){
    if(pergunta > numero){
        console.log("Tente um numero menor")
        tentativas++
        pergunta = readline.questionInt("Escolha um numero: ")
    }
    else if(pergunta < numero){
        console.log("Tente um numero maior")
        tentativas++
        pergunta = readline.questionInt("Escolha um numero: ")
    }
    else{
        console.log("Você acertou!", numero)
        console.log("Numero de tentativas", tentativas)
        loop = false
    }

}

    escolha = readline.question("Quer jogar novamente? S/N: ")
    if(escolha.toLowerCase() == "s"){
        jogo()
    }
    else{
        return false;
    }


}