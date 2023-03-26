import validator from './validator.js';
console.log(validator);

const tarjeta = document.querySelector('#tarjeta');
//addEventListener para girar la tarjeta con un click
tarjeta.addEventListener('click', () => {
  tarjeta.classList.toggle('active');
});

// addEventListener para abrir, botón abrir el formulario
const btnAbrir = document.querySelector('#btnAbrir');
const formulario = document.querySelector('#formulario-tarjeta');
btnAbrir.addEventListener('click', ()=>{
  btnAbrir.classList.toggle('active');
  formulario.classList.toggle('active');
});

//Para agregar los DÍAS al label= selectMes
//agregamos un ciclo FOR para crear las 12 opciones que son los meses del año
for(let i = 1; i <= 12; i++){
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

//seleccionar el año
//se crea la variable yearActual
const yearActual = new Date().getFullYear();
//se agrega ciclo FOR para que indique los años de expiracion
// yearActual + 4 para que solo muestre hasta 4 años despues del actual
for(let i = yearActual; i <= yearActual + 4; i++){
  const opcion2 = document.createElement('option2');
  opcion2.value = i;
  opcion2.innerText = i;
  formulario.selectYear.appendChild('opcion2');
}

//inputNumero =>> Numero de Tarjeta
//el input va a recibir un evento cuando se presiono una letra
formulario.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;
  formulario.inputNumero.value = valorInput.replace(/\D/g, '');
});


