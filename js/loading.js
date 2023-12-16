let h2 = new SplitType('.loading h2')
let h5 = new SplitType('.loading h5')


window.addEventListener("load" , ()=>{
    gsap.to(".loading .word", {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        delay: 1.2,
        duration: 1.5,
        ease: "power1.out",
          });
})