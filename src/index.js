import validator from './validator.js';
const tarjeta = document.querySelector('#tarjeta');
//rotar la tarjeta con un click
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});


const btnAbrir = document.querySelector('#btnAbrir');
const formulario = document.querySelector('#formulario-tarjeta');
btnAbrir.addEventListener('click', ()=>{
  btnAbrir.classList.toggle('active');
  //para abrir el formulario
  formulario.classList.toggle('active');
});




console.log(validator);
