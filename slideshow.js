let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Move to the next slide
    slideIndex++;

    // Start again from the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].classList.add("active");

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);
}

// Start slideshow
showSlides();