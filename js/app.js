
const bienvenidaMusical = document.getElementById("bienvenidaMusical");
const comenzarMusica = document.getElementById("comenzarMusica");
const musica = document.getElementById("musicaFondo");

comenzarMusica.addEventListener("click", () => {

    bienvenidaMusical.classList.add("oculta");

    if (musica && musica.querySelector("source")) {
        musica.play().catch(error => {
            console.log("La música todavía no está disponible.");
        });
    }

});

const imagenCarrusel = document.getElementById("imagenCarrusel");
const textoCarrusel = document.getElementById("textoCarrusel");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const puntosCarrusel = document.getElementById("puntosCarrusel");

const recuerdos = [
    {
        imagen: "img/recuerdo1.jpg",
        texto: "Un momento para recordar ❤️"
    },
    {
        imagen: "img/recuerdo2.jpg",
        texto: "Conexión única"
    },
    {
        imagen: "img/recuerdo3.jpg",
        texto: "Primera pena juntos"
    },
    {
        imagen: "img/recuerdo4.jpg",
        texto: "Nuestra película/serie."
    },
    {
        imagen: "img/recuerdo5.jpg",
        texto: "Una S de..."
    },
    {
        imagen: "img/recuerdo6.jpg",
        texto: "Armando."
    },
    {
        imagen: "img/recuerdo7.jpg",
        texto: "Gastando tinta en lo que más amo."
    },
    {
        imagen: "img/recuerdo8.jpg",
        texto: "Las escaleras de nuestras mil oportunidades."
    },
];

let indiceActual = 0;

function mostrarRecuerdo() {

    imagenCarrusel.src = recuerdos[indiceActual].imagen;
    textoCarrusel.textContent = recuerdos[indiceActual].texto;

    const puntos = document.querySelectorAll(".punto");

    puntos.forEach((punto, indice) => {
        punto.classList.toggle("activo", indice === indiceActual);
    });

}

recuerdos.forEach((recuerdo, indice) => {

    const punto = document.createElement("button");

    punto.classList.add("punto");

    punto.addEventListener("click", () => {
        indiceActual = indice;
        mostrarRecuerdo();
    });

    puntosCarrusel.appendChild(punto);

});

siguiente.addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= recuerdos.length) {
        indiceActual = 0;
    }

    mostrarRecuerdo();

});

anterior.addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = recuerdos.length - 1;
    }

    mostrarRecuerdo();

});

mostrarRecuerdo();

const botonCarta = document.getElementById("botonCarta");
const contenidoCarta = document.getElementById("contenidoCarta");

botonCarta.addEventListener("click", () => {

    contenidoCarta.classList.toggle("visible");

    if (contenidoCarta.classList.contains("visible")) {
        botonCarta.textContent = "Cerrar mi carta 💌";
    } else {
        botonCarta.textContent = "Abrir mi carta 💌";
    }

});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");
});

document.querySelectorAll(".nav-links a").forEach(enlace => {

    enlace.addEventListener("click", () => {
        navLinks.classList.remove("abierto");
    });

});
