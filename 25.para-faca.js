/*testes 09_07*/

function acaoBotao() {

   var numero, fatorial,
   numero = prompt("Fatorial a ser calculado :")
   fatorial = 1

   for (var contador = 1; contador <= numero; contador++) {
       fatorial = fatorial * contador;
       
   }
      
    document.getElementById("paragrafo").innerText =  "O fatorial de " + numero + " é : " +fatorial
}