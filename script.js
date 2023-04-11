// Hambrger Menu
    // Hamburger menu help from tutorial on Youtube by Web Dev Tutorials

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Header Image Loop
    // Help from tutorial on Youtube by Adam Khoury


// let image = document.getElementById('image');
// let images = ['headerphoto1.png', 'headerphoto2.png', 'headerphoto3.png', 'headerphoto4.png'];
// let totalImages = images.length;
// let i = 0;

// function loop() {
//     if(i > (totalImages - 1)) {
//         i = 0;
//     }
//     image.innerHTML = '<img src="styles/Images/'+images[i]+'">';
//     i++;
//     loopTimer = setTimeout('loop()', 1000);
// }

// loop();

// Back to Top Button

let myButton = document.getElementById('topButton');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Project Slider
    // Help from tutorial on Youtube by Web Dev Simplified

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})