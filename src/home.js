const popup = document.getElementById('popup-home');
const closeButton = document.querySelector('.close-home');

// Cerrar la ventana emergente al hacer clic en el botón de cerrar
closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

btnSend.addEventListener('click', function (event) {
  event.preventDefault()
  window.location.href = "gracias.html";
});
