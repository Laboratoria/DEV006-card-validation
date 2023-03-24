//saludo al visitante con un alert
const saludo = "Bienvenid@ a la Fundación PetsFriends Wasi",
      nombre = ("");
    alert(saludo);
    //agregando un texto y un valor en este caso nombre
nombre = prompt("Por favor, ingresa tu nombre"+ nombre);


//hacer referencia del button adoptar a una url
const paginaWeb = "http://127.0.0.1:5500/src/gracias.html";

//crear la funcion para dar click
function realizarAdopcion() {
  window.location.href = paginaWeb;
}
//realizarAdopción se llama cuando se hace click en el boton adoptar y te dirige a la pag gracias.html
document.getElementaryById("btn-adoptar").addEventListener("click",realizarAdopcion);
