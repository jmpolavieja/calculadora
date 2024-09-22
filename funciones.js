let respuestas = [];
function calculo() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    if (numero1 != 0 && numero2 != 0) {
        let operacion = document.querySelector('#operacion').value;
    let resultado = eval(numero1 + operacion + numero2);
    //console.log(typeof resultado);
    respuestas.push(numero1 + ' ' + operacion + ' ' + numero2 + ' = ' + resultado);
    document.querySelector('#resultado').innerHTML = "<b>" + resultado + "</b>";
    muestraHistorico(resultado);
    } else {
        alert("Debes rellenar primero los números");
    }
    
}

function muestraHistorico(respuesta) {
    let ul = document.querySelector('#listaResultados');

    let li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = respuestas[respuestas.length-1];
    ul.appendChild(li);

    document.forms[0].reset();
}