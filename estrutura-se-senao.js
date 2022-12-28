
    function acaoBotao(){
        var numero1, numero2, resultado, operacao
        numero1 = prompt("Digite o valor 1")
        operacao = prompt("Digite a operacao: +, -, *, /")
        numero2 = prompt("Digite o valor 2")

        if(operacao == "+"){
            resultado = parseInt(numero1) + parseInt(numero2)
        }else if(operacao == "-"){
            resultado = parseInt(numero1) - parseInt(numero2)
        }else if(operacao == "*"){
            resultado = parseInt(numero1) * parseInt(numero2)
        }else if(operacao == "/"){
            resultado = parseInt(numero1) / parseInt(numero2)
        }
            

        document.getElementById("paragrafo").innerText = resultado

    }
