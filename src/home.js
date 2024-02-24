const popup = document.getElementById('popup-home');
const closeButton = document.querySelector('.close-home');

// Cerrar la ventana emergente al hacer clic en el botón de cerrar
closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  const dobInput = document.getElementById("hb");
  const dob = new Date(dobInput.value);
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  if (dob <= eighteenYearsAgo) {
    // Si el usuario es mayor de edad, se envía el formulario a "gracias.html"
    this.submit();
  } else {
    // Si el usuario no es mayor de edad, se muestra un mensaje de alerta
    alert("Debes ser mayor de edad para enviar el formulario.");
  }
});
