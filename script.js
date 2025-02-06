document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
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
    
    // "Learn More" Button scrolls to the About section
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', function() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Modal for Features Section
    const modal = document.getElementById('featuresModal');
    const showFeaturesBtn = document.getElementById('showFeaturesBtn');
    const closeModal = document.querySelector('.modal .close');
    
    showFeaturesBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    // Reveal sections on scroll
    const sections = document.querySelectorAll('.content-section');
    function revealSections() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('reveal');
        }
      });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();
  });
  