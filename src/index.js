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
btnAbrir.addEventListener('click', () => {
  btnAbrir.classList.toggle('active');
  formulario.classList.toggle('active');
});

//Para agregar los DÍAS al label= selectMes
//agregamos un ciclo FOR para crear las 12 opciones que son los meses del año
for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

//se agrega ciclo FOR para que indique los años de expiracion
//yearActual + 4 para que solo muestre hasta 4 años despues del actual
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 4; i++) {
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

//inputNumero
//para reemplazar lo que se escribe en los input y también se copie en la tarjeta de gatito
const numeroTarjeta = document.querySelector('#tarjeta .numero');
//se accede al formulario, luego inputNumero y se reemplazan los valores
formulario.inputNumero.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  numeroTarjeta.textContent = valorInput;
  //si el usuario borra el numero de tarjeta y el espacio no se quede en blanco hacemos un if
  //condicion de que se complete como estaba anteriormente
  if (valorInput === '') {
    numeroTarjeta.textContent = "#### #### #### ####";
  }

  //volteamos la tarjeta para q el usuario vea el frente
  mostrarFrente();
});

//inputNombre 
const nombreTarjeta = document.querySelector('#tarjeta .nombre');
formulario.inputNombre.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  //para que detecte numeros y no se puedan escribir
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  //para que se copien los valores en la tarjeta 
  nombreTarjeta.textContent = valorInput;
  if (valorInput === '') {
    nombreTarjeta.textContent = "Ej. Nacdul Ramirez";
  }
  mostrarFrente();
});

//para voltear la tarjeta y mostrar la cara del frente
const mostrarFrente = () => {
  //hacer un if para comprobar si la tarjeta contiene el active y sele agrega el remove para que quite la clase y se votee
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  }
}

// Mes
const mesExpiracion = document.querySelector('#tarjeta #expiracion .mes');
formulario.selectMes.addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});

//año
const yearExpiracion = document.querySelector('#tarjeta #expiracion .year');
formulario.selectYear.addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2); //slice(2) para que nos permita ver los 2 ultimos digitos del año
  mostrarFrente();
})
