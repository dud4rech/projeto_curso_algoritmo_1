
    function acaoBotao(){
        var valor1, valor2, resultado, operacao
        numero1 = prompt("Digite o valor 1")
        operacao = prompt("Digite a operacao: +, -, *, /")
        numero2 = prompt("Digite o valor 2")

        if(operacao == "+"){
            resultado = parseInt(valor1) + parseInt(valor2)
        }else if(operacao == "-"){
            resultado = parseInt(valor1) - parseInt(valor2)
        }else if(operacao == "*"){
            resultado = parseInt(valor1) * parseInt(valor2)
        }else if(operacao == "/"){
            resultado = parseInt(valor1) / parseInt(valor2)
        }
            

        document.getElementById("paragrafo").innerText = resultado

    }
