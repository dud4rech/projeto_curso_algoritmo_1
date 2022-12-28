function acaoBotao(){
var valor1, valor2, sair
   do{
    valor1 = prompt("Digite o primeiro valor")
    valor2 = prompt("Digite o primeiro valor")
    document.getElementById("paragrafo").innerText = (parseInt(valor1)) + (parseInt(valor2))
    sair = prompt("Deseja sair?")
}while(sair == "n")

}