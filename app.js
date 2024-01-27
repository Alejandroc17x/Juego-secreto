let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let intentosMaximos = 100; // Número máximo de intentos

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor"); 
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado;
    
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; 
    } while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    }

    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "¡Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número entre el 1 y el ${numeroMaximo}`);
    listaNumerosSorteados = []; // Reinicia la lista de números sorteados
    intentos = 0;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();

