
function acaoBotao(){
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificada a idade: ")
    contador = 0
    while (contador < limite) {
        nome = prompt("Digite o nome da pessoa: ")
 
        //Eu alterei a linha abaixo, a concatenacao estava errada.
        idade = prompt("Digite a idade de " + nome + ": ")
 
        if (idade > 18)
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade"
        else
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade"
        contador++
    }
}