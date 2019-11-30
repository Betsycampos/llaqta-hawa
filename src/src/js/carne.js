const op1 = document.getElementById('cat1');
const op2 = document.getElementById('cat2');
const op3 = document.getElementById('cat3');
const op4 = document.getElementById('cat4');
const op5 = document.getElementById('cat5');

const parrilleras = document.getElementById('parrilleras');
const guisos = document.getElementById('guisos');
const sancochados = document.getElementById('sancochados');
const especiales = document.getElementById('especiales');
const enlatados = document.getElementById('enlatados');

op1.addEventListener("click", () => {

    parrilleras.classList.add("dBlock");
    guisos.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    guisos.classList.add("dNone");
    sancochados.classList.add("dNone");
    especiales.classList.add("dNone");
    enlatados.classList.add("dNone");

});

op2.addEventListener("click", () => {
    guisos.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    sancochados.classList.add("dNone");
    especiales.classList.add("dNone");
    enlatados.classList.add("dNone");
});

op3.addEventListener("click", () => {
    sancochados.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    guisos.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    guisos.classList.add("dNone");
    especiales.classList.add("dNone");
    enlatados.classList.add("dNone");
});

op4.addEventListener("click", () => {
    especiales.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    guisos.classList.remove("dBlock");
    enlatados.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    sancochados.classList.add("dNone");
    guisos.classList.add("dNone");
    enlatados.classList.add("dNone");
});

op5.addEventListener("click", () => {
    enlatados.classList.add("dBlock");
    parrilleras.classList.remove("dBlock");
    sancochados.classList.remove("dBlock");
    guisos.classList.remove("dBlock");
    especiales.classList.remove("dBlock");
    parrilleras.classList.add("dNone");
    sancochados.classList.add("dNone");
    guisos.classList.add("dNone");
    especiales.classList.add("dNone");
});