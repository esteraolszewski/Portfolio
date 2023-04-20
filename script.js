// Hambrger Menu

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

// Header Slider

const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for(i=0; i<2; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
};
btn[1].onclick = function() {
    slide.style.transform = "translateX(-100%)";
    for(i=0; i<2; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
};

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

