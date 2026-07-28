// Mobile Navigation Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Smooth Fade-in Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});


// Automatic Gallery Slider

let slideIndex = 0;

function autoSlide(){

    const slides = document.querySelectorAll(".gallery-slide");

    if(slides.length === 0) return;

    slides.forEach(slide=>{
        slide.style.display="none";
    });

    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display="block";

    setTimeout(autoSlide,3000);

}

autoSlide();
