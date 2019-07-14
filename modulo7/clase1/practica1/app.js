var valorfinal

var operacion = window.prompt("que desea hacer? suma  resta  multiplicacion  division") 
var bool = window.confirm("estas seguro")
var valor1 = window.prompt("ingrese el primer valor") 
var valor2 = window.prompt("ingrese el segundo valor")

switch(operacion){
    case 'suma': 
        valorfinal = valor1+valor2
        window.alert(valorfinal)
        break;
    case 'resta':
        valorfinal = valor1-valor2
        window.alert(valorfinal)
        break;
    case 'multiplicacion':
        valorfinal = valor1*valor2
        window.alert(valorfinal)
        break;
    case 'division':
        valorfinal = valor1/valor2
        window.alert(valorfinal)
        break;
    default:
        window.alert("error, intente otra vez")
}