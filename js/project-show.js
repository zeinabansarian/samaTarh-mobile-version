let firstBlack = new SplitType('.section2 h2')
let lastBlack1 = new SplitType('.section5 h2')
let lastBlack2 = new SplitType('.section6 h2')


let loadTops = document.querySelectorAll('.loadTop');


const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };
  
  function observerCallback(entries) {
      entries.forEach(entry =>{
        console.log(entry.target);

        gsap.to(entry.target, {
            y: 0,
            opacity: 1,
            stagger: 1,
            duration: 0.7,
            ease: "power1.out",
          });
    })
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  loadTops.forEach((el) => observer.observe(el));
  