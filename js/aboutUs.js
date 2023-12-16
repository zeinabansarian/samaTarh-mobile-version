// SLIDER


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " | " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
});


var swiper = new Swiper('.roleSwiper', {
    effect: 'coverflow',
  direction: 'vertical',

  centeredSlides: true,

  slidesPerView:5,
  // allowTouchMove: false,
  navigation: {
    nextEl: ".roleNext",
    prevEl: ".rolePrev",
  },
  spaceBetween: 10,
  loop:true,
  loopedSlides: 50,

  coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: false,
  },
  // freeMode:false,
  // freeModeSticky:true
});


let tabTitle = document.querySelectorAll(".tabTitle");

for (let index = 0; index < tabTitle.length; index++) {
  tabTitle[index].addEventListener("click", function () {
    tabTitle[index].previousElementSibling.classList.toggle("active");
    tabTitle[index].classList.toggle("activeTab");
  });
}

const cards = gsap.utils.toArray(".accordionItem");
const spacer = 20;

cards.forEach((card, index) => {
  const tween = gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: `top top`,
      scrub: true,
      //   markers: true,
      invalidateOnRefresh: true,
    },
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: card,
    start: `top-=${index * spacer + 30} top`,
    endTrigger: ".accordionSection",
    end: `bottom center+=${cards.length * spacer}`,
    pin: true,
    pinSpacing: false,
    // markers: true,
    id: "pin",
    invalidateOnRefresh: true,
  });
});

document.addEventListener("scroll", () => ScrollTrigger.refresh());
