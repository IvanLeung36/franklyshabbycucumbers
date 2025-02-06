document.addEventListener('DOMContentLoaded', function() {
    console.log('Frankly Shabby Cucumber website loaded.');
  
    /* Back-to-Top Button */
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
  
    /* "Learn More" Button scrolls to the About section */
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    learnMoreBtn.addEventListener('click', function() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
  
    /* Modal for Features Section */
    const modal = document.getElementById('featuresModal');
    const showFeaturesBtn = document.getElementById('showFeaturesBtn');
    const closeModal = document.querySelector('.modal .close');
    
    showFeaturesBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
    
    /* Reveal Sections on Scroll */
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
  
    /* Cucumber Clicker Game */
    const startGameBtn = document.getElementById('startGameBtn');
    const gameArea = document.getElementById('gameArea');
    const scoreDisplay = document.getElementById('score');
    const timeLeftDisplay = document.getElementById('timeLeft');
    let score = 0;
    let timeLeft = 15;
    let gameInterval, countdownInterval;
    
    startGameBtn.addEventListener('click', function() {
      // Reset game state
      score = 0;
      timeLeft = 15;
      scoreDisplay.textContent = score;
      timeLeftDisplay.textContent = timeLeft;
      gameArea.innerHTML = '';
      startGameBtn.disabled = true;
      
      // Create the moving cucumber image
      const cucumber = document.createElement('img');
      cucumber.src = 'images/image.png';
      cucumber.alt = 'Cucumber';
      cucumber.id = 'cucumber';
      cucumber.style.position = 'absolute';
      cucumber.style.width = '80px';
      cucumber.style.cursor = 'pointer';
      gameArea.appendChild(cucumber);
      
      // Function to move cucumber to a random position within gameArea
      function moveCucumber() {
        const maxX = gameArea.clientWidth - cucumber.offsetWidth;
        const maxY = gameArea.clientHeight - cucumber.offsetHeight;
        const randX = Math.floor(Math.random() * maxX);
        const randY = Math.floor(Math.random() * maxY);
        cucumber.style.left = randX + 'px';
        cucumber.style.top = randY + 'px';
      }
      
      // Start moving the cucumber every second
      moveCucumber();
      gameInterval = setInterval(moveCucumber, 1000);
      
      // On clicking the cucumber, increment score and move immediately
      cucumber.addEventListener('click', function() {
        score++;
        scoreDisplay.textContent = score;
        moveCucumber();
      });
      
      // Countdown timer for the game
      countdownInterval = setInterval(function() {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(countdownInterval);
          clearInterval(gameInterval);
          gameArea.innerHTML = `<p style="text-align:center; padding: 20px;">Game Over! Your final score is ${score}.</p>`;
          startGameBtn.disabled = false;
        }
      }, 1000);
    });
  });
  