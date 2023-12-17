var swiper = new Swiper(".mySwiper", {

  breakpoints: {
    576: {

      slidesPerView: 1.2,
      spaceBetween: -20,
      centeredSlides: false,
      speed: 1000,

      navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
      },
      loop: true,
      paginatiopagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "fraction",
        formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' - ' +
            '<span class="' + totalClass + '"></span>';
        },
      },
      Clickable: true,
      paginationClickable: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
    },
  },

});

var detailSwiper = new Swiper(".detailSwiper", {
  breakpoints: {
    576: {

      slidesPerView: 1.2,
      speed: 1000,
      spaceBetween: 20,
      centeredSlides: false,
      navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
      },
      loop: true,
      Clickable: true,
      paginationClickable: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          if (current < 10) {
            current = `0${current}`
          }
          if (total < 10) {
            total = `0${total}`
          }
          return `<p>${current}</p> <span></span> <p>${total}</p>`;
        }
      },
    }
  },
});


detailSwiper.controller.control = swiper;
swiper.controller.control = detailSwiper;


let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")
let btnMp3 = document.querySelector("audio")
prevBtn.addEventListener("click" , ()=>{
  btnMp3.play();
})
nextBtn.addEventListener("click" , ()=>{
  btnMp3.play();
})