

function acaoBotao() {

var nome, idade, limite, contador
limite = prompt("Quantas verificações ? : ")
contador = 0
while (contador < limite) {
    nome = prompt("Nome : ")
    idade = prompt("Qual idade de " + nome + " ? : ")
    if (idade >18) 
        document.getElementById("paragrafo").innerText =  nome +  " é maior de idade"
    else
        document.getElementById("paragrafo").innerText =  nome + " infelizmente não pode entrar"
     
    contador++

    }
}



