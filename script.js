document.addEventListener('DOMContentLoaded', function() {
  console.log('Frankly Shabby Cucumber website loaded')

  let backToTopBtn = document.getElementById('backToTop')
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block'
    } else {
      backToTopBtn.style.display = 'none'
    }
  })
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  let learnMoreBtn = document.getElementById('learnMoreBtn')
  learnMoreBtn.addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  })

  let modal = document.getElementById('featuresModal')
  let showFeaturesBtn = document.getElementById('showFeaturesBtn')
  let closeModal = document.querySelector('.modal .close')
  
  showFeaturesBtn.addEventListener('click', function() {
    modal.style.display = 'block'
  })
  
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none'
  })
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  })
  
  let sections = document.querySelectorAll('.content-section')
  function revealSections() {
    sections.forEach(section => {
      let rect = section.getBoundingClientRect()
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('reveal')
      }
    })
  }
  window.addEventListener('scroll', revealSections)
  revealSections()

  let startGameBtn = document.getElementById('startGameBtn')
  let gameArea = document.getElementById('gameArea')
  let scoreDisplay = document.getElementById('score')
  let timeLeftDisplay = document.getElementById('timeLeft')
  let score = 0
  let timeLeft = 15
  let gameInterval, countdownInterval
  
  startGameBtn.addEventListener('click', function() {
    score = 0
    timeLeft = 15
    scoreDisplay.textContent = score
    timeLeftDisplay.textContent = timeLeft
    gameArea.innerHTML = ''
    startGameBtn.disabled = true
    
    let cucumber = document.createElement('img')
    cucumber.src = '/images/image.png' // Fixed path for zh and es pages
    cucumber.alt = 'Cucumber'
    cucumber.id = 'cucumber'
    cucumber.style.position = 'absolute'
    cucumber.style.width = '80px'
    cucumber.style.cursor = 'pointer'
    gameArea.appendChild(cucumber)
    
    function moveCucumber() {
      let maxX = gameArea.clientWidth - cucumber.offsetWidth
      let maxY = gameArea.clientHeight - cucumber.offsetHeight
      let randX = Math.floor(Math.random() * maxX)
      let randY = Math.floor(Math.random() * maxY)
      cucumber.style.left = randX + 'px'
      cucumber.style.top = randY + 'px'
    }
    
    moveCucumber()
    gameInterval = setInterval(moveCucumber, 1000)
    
    cucumber.addEventListener('click', function() {
      score++
      scoreDisplay.textContent = score
      moveCucumber()
    })
    
    countdownInterval = setInterval(function() {
      timeLeft--
      timeLeftDisplay.textContent = timeLeft
      if (timeLeft <= 0) {
        clearInterval(countdownInterval)
        clearInterval(gameInterval)
        gameArea.innerHTML = `<p style="text-align:center; padding: 20px;">Game Over! Your final score is ${score}.</p>`
        startGameBtn.disabled = false
      }
    }, 1000)
  })
})