/*
passou <- falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite as notas do aluno: ")
   leia(nota1, nota2)
   media <- (nota1 + nota2) / 2
   
   se media >= 50 entao
      passou <- verdadeiro
   fimse
   
   se (passou) e ((media >= 50) ou (media <= 70)) entao
      escreval("Aprovado")
   senao
        escreval("Reprovado")
   fimse
   */

   var nome, nota01, nota02, passou;

   passou = false;

   nome = prompt("Digite o nome do aluno:")
   nota01 = prompt("Digite a nota do aluno:")
   nota02 = prompt("Digite a nota do aluno:")

   media = (parseInt(nota01) + parseInt(nota02)) / 2;

   if(media >=50)
        passou = true;

    
    if(passou && (media >= 70 && media <= 90))
        alert("Aprovado" + nome)
    else 
     alert("Reprovado" + nome)
