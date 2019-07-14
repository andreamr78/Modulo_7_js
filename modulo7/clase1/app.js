
//variables, string:
var global = "hello modulo java script";
//entero
global = 45;

//boolean
global = true;

//null
global = null;
//undefined
var test;
//array
global = ['movie', 'music', 'books'];

//object
global = {
    city: 'boston',
    state: 'MA'
}

//fecha/date
global = new Date();
console.log(global);

//-----------------------------------------------------
//ACTIVIDAD 1
var andrea = "andrea montelongo rodriguez";
console.log(andrea);

andrea2 = 22;
console.log(andrea2);

andrea3 = false;
console.log(andrea3);

andrea4 = ['moras', 'manzanas', 'piña', 'fresas']
console.log(andrea4);

andrea5 = {
    nombre: andrea,
    edad: 22,
    ciudad: 'monterrey',
    estado: 'nuevo leon'
}
console.log(andrea5);

//----------------------------------------------------

//ACTIVIDAD 2

var global2 = 34;
global2 = String(global2)
global2 = 5+global2
console.log(global2);

var global3 = "45";
global3 = Number(global3)
console.log(global3);

var global4 = "45.55";
global4 = parseFloat(global4)
console.log(global4);

var global5 = Math.round(5.5443);
var global6 = Math.ceil(16.272);
var global7 = Math.floor(716.827);
console.log(global5);
//console.log(global6);
//console.log(global7);

var global8 = "hello"
global8 = global8+" "+"there";
global9 = global8.length
//console.log(global8);
//console.log(global9);

var global10 = "hello"
var global11 = "there"
//global10 = global10.concat('' , global11 , 'modulo7')
global10 = global10.toLocaleUpperCase
global11 = global11.toLocaleUpperCase
//console.log(global10);

var global12 = 'hello world hello'
//global12 = global12.indexOf('world')
/*if(global12 > 0){
    console.log('si se encontro');
}*/
//global12 = global12.charAt(13)
//global12 = global12.substring(1, 5)
//global12 = global12.split(",")
global12 = global12.replace("hello","hola")
console.log(global12);

var global13 = [67, 77, 97]
global13 = global13.find(function(age){
    return age>=90;
})
console.log(global13);

//--------------------------------------
//TAREA:

var tarea = {
    fisrtName: 'andrea',
    lastName: 'montelongo',
    age: 22,
    email: 'madbluebox78@gmail.com',
    hobbies: ['swim', 'work', 'code'],
    address: {
        city: 'monterrey',
        state: 'nuevo leon',
    },
    getBirthday: function(){
        return this.age;
    }
}
console.log(tarea);

if(tarea.age === 100){
    console.log(tarea.fisrtName); 
}else if(tarea.hobbies === 'swim'){
    console.log(tarea.lastName);
}else{
    console.log(tarea.email);  
}

switch(tarea.address.city){
    case 'monterrey':
        console.log('monterrey');
        break;
    case 'san':
        console.log('san nicolas');
        break;
    default:
        break;
}

for (var index = 0; index < tarea.hobbies.length; index++) {
    console.log(tarea.hobbies[index]);
}

var array2 = ['test',5 ,'hello', null];
/*for (var i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}*/
var i = 0;
while (i< array2.length) {
    console.log(array2[i]);
    i++;
}

/*do{
    console.log(array2[i]);
    i++
}while(i>array2.length)*/


























