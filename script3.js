const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelector('.container').addEventListener('click', () => {
        alert('You clicked the section!');
    });


    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
          alert("You clicked 'View This' for " + this.previousElementSibling.previousElementSibling.textContent);
        });
      });
    
    
    
      window.addEventListener('scroll', () => {
        const fanSection = document.querySelector('.fan-categories');
        const scrollY = window.scrollY;
      
        // Check if the user has scrolled down
        if (scrollY > 30) { // Adjust this value based on when you want the animation to trigger
          fanSection.classList.add('scroll-active');
        } else {
          fanSection.classList.remove('scroll-active');
        }
      });