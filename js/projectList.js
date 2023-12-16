var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: -50,
  centeredSlides: false,
  speed : 1000,
  
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

});

var detailSwiper = new Swiper(".detailSwiper", {
  slidesPerView: 1.2,
  speed : 1000,
  // spaceBetween: 0,
  centeredSlides: false,
  navigation: {
    nextEl: '.nextBtn',
    prevEl: '.prevBtn',
  },
  loop: true,
  paginationClickable: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          let newFraction = '<p class="' +currentClass + '"></p>' +
                   ' <span></span>' +
                   '<p class="' + totalClass + '"></p>';

            return newFraction
        },
  },
});


detailSwiper.controller.control = swiper;
swiper.controller.control = detailSwiper;