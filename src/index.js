/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import validator from './validator.js';

//llamar al elemento del html por su ID
const numero = document.getElementById('inputNumero');
const msjVal = document.getElementById('msjVal');
const msj = document.getElementById('msj');
const cerrar = document.getElementById('cerrar');
const errorMensaje = document.getElementById('errorMsj');
const mensajeValido = document.getElementById('msjValido');


//llamando al button VALIDAR por si ID
document.getElementById('validar').addEventListener('click', function (event) {
  event.preventDefault()

  const numArray = numero.value;

  if(numArray.length < 11 || numArray.length > 19){
    alert ("Your card number must contain between 11 to 19 digits.");
    console.log(numero);
    return false
  }

  //Algoritmo de Luhn
  const resultado = validator.isValid(numero.value);
  console.log(resultado);

  //MASKIFY
  const mask = validator.maskify(numero.value);
  if (resultado === true){
  //si la tarjeta es válida debe mostrar el mensaje de verificación
    msj.innerHTML = "Card verified N°" + mask;
    //se debe mostrar una alerta como ventana emergente
    msjVal.classList.add('show');
    mensajeValido.style.display = 'block'; //mostrar mensaje de éxito
    errorMensaje.style.display =  'none'; //ocultar mensaje de error
  } else {
    // si la tarjeta es inválida mostrará este mensaje
    msj.innerHTML ="There was an error with the payment. Please try again.";
    msjVal.classList.add('show');
    mensajeValido.style.display = 'none'; //mostrar mensaje de éxito
    errorMensaje.style.display =  'block'; //ocultar mensaje de error
  }
});


//para cerrar la ventana emergente
cerrar.addEventListener('click', () =>  {
  msjVal.classList.remove('show');
});


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


//inputNumero
//para reemplazar lo que se escribe en los input y también se copie en la tarjeta de gatito
const numeroTarjeta = document.querySelector('#tarjeta .numero');
//se accede al formulario, luego inputNumero y se reemplazan los valores
//el addEventListener detecta cuando el usuario presiona y suelta la tecla y se ejecutará un evento
formulario.inputNumero.addEventListener('keyup', (e) => {
  //se crea el valorInput para q la informacion ingresada se guarde dentro de una variable
  const valorInput = e.target.value;
  //para eliminar los espacios se hace con replace las '' van vacias porque no quiero que lo reemplace con nada
  //para que se borren las letras tambien se hace el mismo paso con una expresion regular (/\D/g,'')
  //para que se separen por grupo de 4 se coloca otra expresion regular ([0-9]{4})
  //para borrar el espacio inicial y final se usa trim
  formulario.inputNumero.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').trim();

  numeroTarjeta.textContent = valorInput;
  //si el usuario borra el numero de tarjeta y el espacio no se quede en blanco hacemos un if
  //condicion de que se complete como estaba anteriormente
  if (valorInput === '') {
    numeroTarjeta.textContent = "#### #### #### ####";
  }
  //volteamos la tarjeta para q el usuario vea el frente
  irFrente();
});


//inputNombre
const nombreTarjeta = document.querySelector('#tarjeta .fullName');
formulario.inputNombre.addEventListener('keyup', (e) => {
  const valorInput = e.target.value;

  //para que detecte numeros y no se puedan escribir
  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
  //para que se copien los valores en la tarjeta
  nombreTarjeta.textContent = valorInput;
  if (valorInput === '') {
    nombreTarjeta.textContent = "Ej. Nacdul Ramirez";
  }
  irFrente();
});


//para voltear la tarjeta y mostrar la cara del frente
const irFrente = () => {
  //hacer un if para comprobar si la tarjeta contiene el active y sele agrega el remove para que quite la clase y se votee
  if (tarjeta.classList.contains('active')) {
    tarjeta.classList.remove('active');
  }
}


//Para agregar los DÍAS al label= selectMes
//agregamos un ciclo FOR para crear las 12 opciones que son los meses del año
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}


// Mes
const mesExpiracion = document.querySelector('#tarjeta #expiracion .mes');
formulario.selectMes.addEventListener('change', (e) => {
  mesExpiracion.textContent = e.target.value;
  irFrente();
});


//se agrega ciclo FOR para que indique los años de expiracion
//yearActual + 4 para que solo muestre hasta 4 años despues del actual
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 6; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}


//año
const yearExpiracion = document.querySelector('#tarjeta #expiracion .year');
formulario.selectYear.addEventListener('change', (e) => {
  yearExpiracion.textContent = e.target.value.slice(2); //slice(2) para que nos permita ver los 2 ultimos digitos del año
  irFrente();
});

//PARA OCULTAR CVV DE LA TARJETA
document.addEventListener('DOMContentLoaded', function() {
  const inputCCV = document.getElementById('inputCCV');

  inputCCV.addEventListener('input', function() {
    // Reemplazar el valor del campo con asteriscos
    this.value = this.value.replace(/\d/g, '*');
  });
});

// eslint-disable-next-line no-console
console.log(validator);





