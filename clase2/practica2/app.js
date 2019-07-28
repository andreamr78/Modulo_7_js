
window.setTimeout(function() {
    var title = document.getElementById('titulo');
    title.innerText = "Andrea"
}, 500)

window.setInterval(function() {
    var lista = document.querySelector('ul').innerHTML;
    var show = lista[Math.floor(Math.random() * lista.length)];
    document.getElementById('lista').innerHTML = show;
}, 500)