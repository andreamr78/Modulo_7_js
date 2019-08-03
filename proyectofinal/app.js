
function suma(){
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    suma = parseInt(valor1)+parseInt(valor2)
    document.getElementById("response").innerHTML = suma; 
}

function resta(){
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    suma = parseInt(valor1)-parseInt(valor2)
    document.getElementById("response").innerHTML = suma; 
}

function mult(){
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    suma = parseInt(valor1)*parseInt(valor2)
    document.getElementById("response").innerHTML = suma; 
}

function div(){
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    suma = parseInt(valor1)/parseInt(valor2)
    document.getElementById("response").innerHTML = suma; 
}

document.getElementById("clear").onclick = function() {
    document.getElementById("response").innerHTML = '';
}