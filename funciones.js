let respuestas = [];
function calculo() {
    event.preventDefault();
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    if (numero1 != 0 && numero2 != 0) {
        let operacion = document.querySelector('#operacion').value;
        let resultado = eval(numero1 + operacion + numero2);
        //console.log(typeof resultado);
        respuestas.push(numero1 + ' ' + operacion + ' ' + numero2 + ' = ' + resultado);
        document.querySelector('#resultado').innerHTML = "<b>" + resultado + "</b>";
        //muestraHistorico();
        document.forms[0].reset();
    } else {
        alert("Debes rellenar primero los números");
    }

}

function muestraHistorico() {
    let ul = document.querySelector('#listaResultados');

    let li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = respuestas[respuestas.length - 1];
    ul.appendChild(li);

    document.forms[0].reset();
}

function muestraTodoResultado() {
    // Crear una lista desde cero, para mostrar todos los resultados guardados
    let newUl = document.createElement('ul');
    newUl.className = "list-group list-group-flush";
    newUl.id = "listaFlush";
    respuestas.forEach(resp => { // Esto se llama función anónima, es una forma eficiente de asignar una función a un elemento del array
        let li = document.createElement('li');
        li.className = "list-group-item";
        li.innerText = resp;
        newUl.appendChild(li);
    });
    document.querySelector('#allResults').append(newUl);
}

// Variación: SOLO AÑADIR las respuestas nuevas
function respuestasNuevas() {
    if (document.querySelector('#listaFlush')) { // Compruebo si existe el ul con los resultados
        let liArray = document.querySelectorAll('#listaFlush>li');
        let ul = document.querySelector('#listaFlush');
        console.log(liArray.length);
        console.log(respuestas.length);
        if (respuestas.length > liArray.length) {
            let indice = respuestas.length - liArray.length; // Esto me dá cuantos elementos de más que hay en repuestas
            for (let i = indice; i < respuestas.length; i++) {
                let li = document.createElement('li');
                li.className = "list-group-item";
                li.innerText = respuestas[i];
                ul.appendChild(li);
            }
        }
    } else {
        muestraTodoResultado();
    }
}