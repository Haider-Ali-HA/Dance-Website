let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if (counter == 65) {
        clearInterval
    }
    else {

        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 75)
let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if (counter2 == 11) {
        clearInterval
    }
    else {

        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 449)
let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if (counter3 == 47) {
        clearInterval
    }
    else {

        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 103)


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