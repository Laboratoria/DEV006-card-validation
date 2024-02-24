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
      alert('You must be of legal age to submit this form.');
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


document.addEventListener('DOMContentLoaded', function() {
  // Función para detectar cambios de idioma y cambiar la imagen del flyer
  function detectLanguageChangeFlyer() {
    const originalText = document.body.textContent;
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'characterData') {
          const newText = document.body.textContent;
          if (originalText !== newText) {
            document.getElementById('flyer-img').src = 'images/flyer_es.png';
          } else {
            document.getElementById('flyer-img').src = 'images/flyer.png';
          }
        }
      });
    });
    observer.observe(document.body, { subtree: true, characterData: true });
  }

  // Llamar a la función para detectar cambios de idioma para el flyer
  detectLanguageChangeFlyer();

  // Función para detectar cambios de idioma y cambiar la imagen de adoptme-img
  function detectLanguageChangeAdoptme() {
    const originalText = document.body.textContent;
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'characterData') {
          const newText = document.body.textContent;
          if (originalText !== newText) {
            document.getElementById('adoptme-img').src = 'images/adoptme_es.png';
          } else {
            document.getElementById('adoptme-img').src = 'images/adoptme2.png';
          }
        }
      });
    });
    observer.observe(document.body, { subtree: true, characterData: true });
  }

  // Llamar a la función para detectar cambios de idioma para adoptme-img
  detectLanguageChangeAdoptme();
});





