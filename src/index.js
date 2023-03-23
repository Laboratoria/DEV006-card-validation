/* eslint-disable no-console */
import validator from './validator.js';

//hacer un boton que se valide en el validator
const boton = document.getElementaryById("VALIDAR");
// Agregar un event listener para el click
boton.addEventListener("click", function() {
  alert("Hacer click");
} );

console.log(validator);
