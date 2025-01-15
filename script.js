const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
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

  // Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when user scrolls down 20px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

  