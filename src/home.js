/* eslint-disable no-console */
export {closePopupOnLoad}
function closePopupOnLoad() {
  const popup = document.getElementById('popup-home');
  const closeButton = document.querySelector('.close-home');

  if (popup && closeButton) {
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }
}

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

// Detectar cuando el traductor está activo
document.addEventListener('DOMContentLoaded', function() {
  // Función para detectar cambios de idioma
  function detectLanguageChange() {
    // Obtener el texto original del documento
    const originalText = document.body.textContent;

    // Observar los cambios en el texto del documento
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // Verificar si el texto del documento ha cambiado
        if (mutation.type === 'characterData') {
          const newText = document.body.textContent;
          // Verificar si el texto ha sido traducido
          if (originalText !== newText) {
            // Cambiar la imagen a la versión en español
            document.getElementById('flyer-img').src = 'images/flyer_es.png';
          } else {
            // Cambiar la imagen a la versión original (inglés)
            document.getElementById('flyer-img').src = 'images/flyer.png';
          }
        }
      });
    });

    // Configurar el observador para observar cambios en el texto del documento
    observer.observe(document.body, { subtree: true, characterData: true });
  }

  // Llamar a la función para detectar cambios de idioma
  detectLanguageChange();
});

// cambiar imagen en español del titulo de adoptame
document.addEventListener('DOMContentLoaded', function() {
  // Función para detectar cambios de idioma
  function detectLanguageChange() {
    // Obtener el texto original del documento
    const originalText = document.body.textContent;

    // Observar los cambios en el texto del documento
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        // Verificar si el texto del documento ha cambiado
        if (mutation.type === 'characterData') {
          const newText = document.body.textContent;
          // Verificar si el texto ha sido traducido
          if (originalText !== newText) {
            // Cambiar la imagen a la versión en español
            document.getElementById('adoptme-img').src = 'images/adoptme_es.png';
          } else {
            // Cambiar la imagen a la versión original (inglés)
            document.getElementById('adoptme-img').src = 'images/adoptme2.png';
          }
        }
      });
    });

    // Configurar el observador para observar cambios en el texto del documento
    observer.observe(document.body, { subtree: true, characterData: true });
  }

  // Llamar a la función para detectar cambios de idioma
  detectLanguageChange();
});
