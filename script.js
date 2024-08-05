// script per la navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    navbar.classList.remove('transparent-bg');
    navbar.classList.add('solid-bg');
  } else {
    navbar.classList.remove('solid-bg');
    navbar.classList.add('transparent-bg');
  }
});

// Script per chiudere il menu quando viene cliccato nuovamente


// fine script per la navbar
// script per la welcome

document.addEventListener('DOMContentLoaded', function() {
    const tableContainers = document.querySelectorAll('.table-container');

    function handleScroll() {
        tableContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                container.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

// fine script per la welcome
document.addEventListener('DOMContentLoaded', function () {
  const animatedSections = document.querySelectorAll('.animated-section-left, .animated-section-right');

  function checkVisibility() {
    animatedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Verifica la visibilità all'inizio in caso alcuni elementi siano già visibili
  checkVisibility();
});