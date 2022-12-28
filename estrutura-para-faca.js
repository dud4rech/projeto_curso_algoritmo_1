
function acaoBotao(){
var numero, fatorial, contador

numero = prompt("Digite o valor")
fatorial = 1

for(contador = 1; contador <= numero; contador++){
    fatorial = fatorial * contador
}

document.getElementById("paragrafo").innerText = fatorial

}