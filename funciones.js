function calculo() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.querySelector('#numero2').value;
    let operacion = document.querySelector('#operacion').value;
    let resultado = eval(numero1 + operacion + numero2);
    console.log(typeof resultado);
    document.querySelector('#resultado').innerHTML = "<b>" + resultado + "</b>";
}