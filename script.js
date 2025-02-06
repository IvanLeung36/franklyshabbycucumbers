document.addEventListener('DOMContentLoaded', function() {
    console.log('Frankly Shabby Cucumber website loaded.');
    
    // Example interactive feature:
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
      alert('Welcome to the Frankly Shabby Cucumber site!');
    });
  });
  