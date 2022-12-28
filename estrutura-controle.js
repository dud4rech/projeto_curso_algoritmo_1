/*
escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite as notas do aluno: ")
   leia(nota1, nota2)
   media <- (nota1 + nota2) / 2
   
   se media >= 5 entao
      escreval("Aprovado")
   senao
        escreval("Reprovado")
   fimse*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno:");
nota1 = prompt("Digite o nota do aluno:");
nota2 = prompt("Digite o nota do aluno:");

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 50)
    alert("Aprovado " + nome);
else
    alert("Reprovado " + nome);