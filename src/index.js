import validator from './validator.js';

const tarjeta = document.querySelector('#tarjeta');
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});



console.log(validator);
