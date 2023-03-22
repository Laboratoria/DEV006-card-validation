/* eslint-disable no-console */
const newLocal = "http://127.0.0.1:5500/src/gracias.html";

//crear la funcion para dar click
function realizarAdopcion() {
  window.location.href = newLocal;
}
//realizarAdopción se llama cuando se hace click en el boton adoptar y te dirige a la pag gracias.html
document.getElementaryById("btn-adoptar").addEventListener("click",realizarAdopcion);

// seleccionar el button VALIDAR
function validarDonación() {
  window.location.href=newLocal;
}
document.getElementById("VALIDAR").addEventListener("click",validarDonación)



import validator from './validator.js';

console.log(validator);
