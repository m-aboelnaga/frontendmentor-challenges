
import './style/main.scss';
import Splide from '@splidejs/splide';import '@splidejs/splide/css';


Splide.defaults = {
  type: "loop",
  arrows: false,

  perPage: 3,
  breakpoints: {
    900: {
      perPage: 1,
      arrows: false,
    },
  },
};

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide' );
  splide.mount();
} );

const menuBtn = document.querySelector('.icon-hamburger');
const open = document.querySelector('.icon-open');
const close = document.querySelector('.icon-close');
const nav = document.querySelector('.main-nav');
const background = document.querySelector('.background');
console.log(nav)

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('display-none-m');
  background.classList.toggle('display-none-m');
  open.classList.toggle('display-none-m');
  close.classList.toggle('display-none-m');
  menuBtn.classList.toggle('bg');
  
  
  
})