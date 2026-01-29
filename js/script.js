document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide img');
    console.dir(slides);
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000); 
});
