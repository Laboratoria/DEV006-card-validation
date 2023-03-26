import validator from './validator.js';
const tarjeta = document.querySelector('#tarjeta');
//rotar la tarjeta con un clickA
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});


const btnAbrir = document.querySelector('#btnAbrir');
const formulario = document.querySelector('#formulario-tarjeta');
//para abrir el formulario
btnAbrir.addEventListener('click', ()=>{
  btnAbrir.classList.toggle('active');
  formulario.classList.toggle('active');
});




console.log(validator);
