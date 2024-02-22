const popup = document.getElementById('popup-home');
const closeButton = document.querySelector('.close-home');

// Cerrar la ventana emergente al hacer clic en el botón de cerrar
closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});

// slide
document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".imagen");

  function showSlide() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.opacity = 1;
      } else {
        slide.style.opacity = 0;
      }
    });

    currentSlide = (currentSlide + 1) % slides.length;
  }

  function toggleSlides() {
    setInterval(function() {
      showSlide();
      setTimeout(() => {
        showSlide();
      }, 2000); // Cambiar de slide cada 2 segundos
    }, 6000); // Iniciar cambio de slides cada 6 segundos
  }

  toggleSlides();
});
