

function acaoBotao() {
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Valor 01: ")
        valor02 = prompt("Valor 02: ")
        document.getElementById('paragrafo').innerText = "Resultado: " + (parseInt(valor01) + parseInt(valor02))
        sairLoop = prompt("Deseja sair ? : S/N")
    }while(sairLoop == "N")
}
    

