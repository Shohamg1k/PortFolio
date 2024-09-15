// About Me Section - Read More Button Functionality
document.getElementById('read-more-btn').addEventListener('click', function() {
    var moreText = document.getElementById('more-text');
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        moreText.classList.add('hidden');
        this.textContent = 'Read More';
    }
});

// JavaScript for Slider Functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const sliderContainer = document.querySelector('.slider-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    leftArrow.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    rightArrow.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Show the first slide initially
    showSlide(currentSlide);
});
