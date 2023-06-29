// loader 
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
img = document.querySelector('.img')
ul = document.querySelector('.ul')
burger.addEventListener('click', () => {
    ul.classList.toggle('v-class')
    img.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})