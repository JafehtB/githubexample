// PPT: Agregar ejemplo listas y eventos
// Recordar funciones aplicadas a este trabajo
// Crear txt con los textos

// Declaración de preguntas
var preguntas = [
    "¿Cuál es la flor nacional de Japón?",
    "¿Cuántas franjas tiene la bandera de Estados Unidos?",
    "Cuál es el animal nacional de Australia",
    "Cuántos días le toma a la tierra dar una vuelta a la órbita del sol"
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["Flor de Canela",
    "Flor de Cerezo",
    "Flor de Lompai"],
    ["13",
    "19",
    "10"],
    ["Canguro",
    "Koala",
    "Gallito de las Rocas"],
    ["364",
    "365",
    "366"]
    ]

var puntajePorOpcion = [
    [0, 1, 0],
    [1, 0, 0],
    [1, 0, 0],
    [0, 1, 0]
]


// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";


    div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos`;
}

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    puntaje += puntajePorOpcion[i-1][indice];

    
    if (i < preguntas.length) {
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    i++;
}

siguientePregunta();  // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});