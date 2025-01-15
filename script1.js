const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });



    let currentSlide = 0;

    function showSlide(index) {
      const sliderImages = document.querySelector('.slider-images');
      const totalSlides = sliderImages.children.length;
      
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
    
      const offset = -currentSlide * 100;
      sliderImages.style.transform = `translateX(${offset}%)`;
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
    
    // Initialize the slider
    showSlide(currentSlide);
    

    function updateCenterImage(selectedImage, heading, description) {
        const centerImage = document.getElementById('centerImage');
        const fanHeading = document.getElementById('fanHeading');
        const fanDescription = document.getElementById('fanDescription');
        
        // Update the center image source
        centerImage.src = selectedImage.src;
        
        // Update the heading and description
        fanHeading.textContent = heading;
        fanDescription.textContent = description;
      }

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
    