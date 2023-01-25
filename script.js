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


let image = document.getElementById('image');
let images = ['headerphoto1.png', 'headerphoto2.png', 'headerphoto3.png', 'headerphoto4.png'];
let totalImages = images.length;
let i = 0;

function loop() {
    if(i > (totalImages - 1)) {
        i = 0;
    }
    image.innerHTML = '<img src="styles/Images/'+images[i]+'">';
    i++;
    loopTimer = setTimeout('loop()', 1000);
}

loop();

