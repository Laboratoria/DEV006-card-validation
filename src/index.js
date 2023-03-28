import validator from "./validator.js";

const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
  formulario = document.querySelector('#formulario-tarjeta'),
  inputTarjeta = document.querySelector("#inputNumero"),
  inputNombre = document.querySelector("#inputNombre"),
  mesExpiracion = document.querySelector("#selectMes"),
  yearExpiracion = document.querySelector("#selectYear"),
  inputEnviar = document.querySelector("#boton-enviar");


inputTarjeta.addEventListener("change", () => {
  const esTarjetaValida = validator.isValid(inputTarjeta.value);
  const mostrarTarjeta = document.querySelector("#mostrar-tarjeta");
  const grupoInputTarjeta = document.querySelector("#grupo-input-tarjeta");

  if (esTarjetaValida) {
    mostrarTarjeta.textContent = validator.maskify(inputTarjeta.value);
    inputTarjeta.classList.remove("input-con-error");
  } else {
    mostrarTarjeta.textContent = "#### #### #### ####";
    inputTarjeta.classList.add("input-con-error");
    const textInvalido = document.createElement('p');
    textInvalido.textContent = "Tarjeta invalida";
    grupoInputTarjeta.appendChild(textInvalido);
  }
});

inputNombre.addEventListener("change", () => {
  if (inputNombre.value !== "") {
    inputNombre.classList.remove("input-con-error");

  }
  const mostrarNombre = document.querySelector("#nombre-tarjeta");
  mostrarNombre.textContent = inputNombre.value.toUpperCase();

});
mesExpiracion.addEventListener("change", () => {
  if (mesExpiracion.value !== "Mes") {
    mesExpiracion.classList.remove("input-con-error");
  }
  const mostrarMes = document.querySelector("#mes-exp");
  if (mesExpiracion.value < 10) {
    mostrarMes.textContent = "0" + mesExpiracion.value;
  } else {
    mostrarMes.textContent = mesExpiracion.value;
  }
});
yearExpiracion.addEventListener("change", () => {
  if (yearExpiracion.value !== "Año") {
    yearExpiracion.classList.remove("input-con-error");
  }
  const showYear = document.querySelector("#year-exp");
  showYear.textContent = yearExpiracion.value.substring(2, yearExpiracion.value.length);

});
inputEnviar.addEventListener("click", () => {
  let formularioConErrores = false;
  if (inputTarjeta.value === "") {
    inputTarjeta.classList.add("input-con-error");
    formularioConErrores = true;
  }
  if (inputNombre.value === "") {
    inputNombre.classList.add("input-con-error");
    formularioConErrores = true;
  }
  if (mesExpiracion.value === "Mes") {
    mesExpiracion.classList.add("input-con-error");
    formularioConErrores = true;
  }
  if (yearExpiracion.value === "Año") {
    yearExpiracion.classList.add("input-con-error");
    formularioConErrores = true;
  }
  if (!formularioConErrores) {
    alert("Su tarjeta nro. " + validator.maskify(inputTarjeta.value) + " envió correctamente");
  }

});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
  btnAbrirFormulario.classList.toggle("active");
  formulario.classList.toggle("active");
});
// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);

}
// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}