/* eslint-disable no-console */

//crear la funcion para dar click
function realizarAdopcion() {
  window.location.href = "http://127.0.0.1:5500/src/gracias.html";
}
//realizarAdopción se llama cuando se hace click en el boton adoptar y te dirige a la pag gracias.html
document.getElementaryById("btn-adoptar").addEventListener("click",realizarAdopcion);



// seleccionar el button VALIDAR
const boton = document.getElementaryById("VALIDAR");
// Agregar un event listener para el click
boton.addEventListener("click", function() {
  alert("Haz click en el boton");
} );



import validator from './validator.js';

console.log(validator);
