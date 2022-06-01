let navbar = document.querySelector('.header__nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};





window.onscroll = () => {
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".portfolio__slader", {
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   spaceBetween: 60,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});