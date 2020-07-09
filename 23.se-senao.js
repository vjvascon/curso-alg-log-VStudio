 /*
A function é acionada pelo acaoBotao, criado no index
 */

 function acaoBotao() {
    var valor01, valor02, resultado, operacao
    valor01  = prompt("Digite o primeiro valor: ")
    operacao = prompt("Escolha a operação: +,-,*,/ : ")
    valor02  = prompt("Digite o segundo valor: ")

if (operacao == "+"){
    resultado = parseInt(valor01) + parseInt(valor02)
}else if (operacao == "-"){
    resultado = parseInt(valor01) - parseInt(valor02)
}else if (operacao == "*"){
    resultado = parseInt(valor01) * parseInt(valor02)
}else if (operacao == "/"){
    resultado = parseInt(valor01) / parseInt(valor02)
}
document.getElementById("paragrafo").innerText = resultado
}
    


