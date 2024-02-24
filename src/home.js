/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.getElementById('popup-home');
  const closeButton = document.querySelector('.close-home');

  if (popup && closeButton) {
    // Cerrar la ventana emergente al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }
});

// para enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener la fecha de nacimiento ingresada por el usuario
    const birthday = new Date(document.getElementById('hb').value);

    // Calcular la edad basada en la fecha de nacimiento
    const age = calculateAge(birthday);

    // Verificar si la persona es mayor de edad (18 años o más)
    if (age >= 18) {
      // Permitir que el formulario se envíe
      document.getElementById('myForm').submit();
      // Redirigir a la página de gracias.html
      window.location.href = 'gracias.html';
    } else {
      // Si es menor de edad, mostrar un mensaje de alerta
      alert('Debes ser mayor de edad para enviar este formulario.');
    }
  });

  // Función para calcular la edad basada en la fecha de nacimiento
  function calculateAge(birthday) {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }
});
