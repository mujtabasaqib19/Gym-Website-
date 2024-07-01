let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Typing Text Code
const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness','Perfect Body'],
    typeSpeed: 60,
    backspeed: 60,
    backdelay: 1000,
    loop: true,
  });