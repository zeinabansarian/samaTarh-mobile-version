let readMore = document.querySelectorAll('.read-more');


for (let index = 0; index < readMore.length; index++) {
readMore[index].addEventListener('click', function(){
  readMore[index].previousElementSibling.classList.toggle('active')
  readMore[index].classList.toggle('rotateMore')
})  
}

// SCROLL ACCORDION
gsap.registerPlugin(ScrollTrigger);

// Project stack FX
let projects = gsap.utils.toArray('.section2 ul li');
// let projectImages = gsap.utils.toArray('.project .project-container__inner');

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: () => "top top",
    end: () => "+=" + ((projects.length + 1) * window.innerHeight),
    scrub: 0.8,
    pin: true,
    invalidateOnRefresh: true,
    markers: true,
  }
});

projects.forEach((project, i) => {
    if(i !== projects.length - 1){
     tl
       .to(project, {
        yPercent: -96 + (projects.length - 1), 
        ease: "none",
        stagger: 0.5,
      })
    }
});
            
gsap.set(".section2 ul li", {zIndex: (i, target, targets) => targets.length - i});