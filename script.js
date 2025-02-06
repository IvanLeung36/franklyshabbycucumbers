document.addEventListener('DOMContentLoaded', function() {
    console.log('Frankly Shabby Cucumber website loaded.');
    
    // Back to Top functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Extra interactivity: Toggle highlight on content section click
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.addEventListener('click', function() {
        section.classList.toggle('highlight');
      });
    });
  });  