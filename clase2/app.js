/*document.querySelector('h1').className
> "card bg-warning"
document.querySelector('h1').className = "card bg-success"
> "card bg-success"*/

    function calculadora(){
    var valor1 = document.getElementById('firstNumber').innerHTML = Math.floor(Math.random()*5)
    var valor2 = document.getElementById('secondNumber').innerHTML = Math.floor(Math.random()*5)
    var calculos =["+","-","*","/"];

    switch (valor1) {
        case 0:
            document.getElementById('operator').innerHTML = calculos[0]
            var respuestas = parseInt(valor1)+parseInt(valor2);
            document.getElementById('response').innerHTML = parseInt(respuestas)
            break;
        case 1:
            document.getElementById('operator').innerHTML = calculos[1]
            var respuestas = parseInt(valor1)-parseInt(valor2);
            document.getElementById('response').innerHTML = parseInt(respuestas) 
            break;
        case 2:
            document.getElementById('operator').innerHTML = calculos[2]
            var respuestas = parseInt(valor1)*parseInt(valor2);
            document.getElementById('response').innerHTML = parseInt(respuestas)
            break;
        case 3:
            document.getElementById('operator').innerHTML = calculos[3]
            var respuestas = parseInt(valor1)/parseInt(valor2);
            document.getElementById('response').innerHTML = parseInt(respuestas)
            break;
        case 4:
            document.getElementById('operator').innerHTML = calculos[0]
            var respuestas = parseInt(valor1)+parseInt(valor2);
            document.getElementById('response').innerHTML = parseInt(respuestas)
            break;
        case 5:
            document.getElementById('operator').innerHTML = calculos[1]
            var respuestas = parseInt(valor1)-parseInt(valor2);
            document.getElementById('response').innerHTML = parseInt(respuestas) 
            break;
        default:
            break;
    }
}

window.setInterval("calculadora()",500)
    
