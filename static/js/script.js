let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Autoplay every 4 seconds
setInterval(nextSlide, 4000);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize
showSlide(slideIndex);

document.addEventListener("DOMContentLoaded", function () {
    const text = `print("Hello world!, I'm Amohelang Mohlomi")`;
    const typedText = document.getElementById("typed-text");
    const cursor = document.querySelector(".cursor");

    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80); 
        } else {
            cursor.style.display = "none"; 
        }
    }

    type();
});


window.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
    });
});

