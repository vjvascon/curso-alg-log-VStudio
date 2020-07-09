/*testes 09_07*/

  var nome, nota1, nota2, passou;

  passou = false;

  nome = prompt("Digite o nome")
  nota1 = prompt("Digite nota 1")
  nota2 = prompt("Digite nota 2")

  media = (parseInt(nota1) + parseInt(nota2)) / 2;

  if(media >= 5)
    passou = true;


  if(passou && (media >=7 && media <=9))
       alert("Aprovado " + nome)
   else
       alert("Reprovado " + nome)