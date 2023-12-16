const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

let accordionTitle = document.querySelectorAll(".accordion-title h3");
let i = 1;
accordionTitle.forEach(e => {
    if(i<10){

        e.textContent = `0${i}`;
    }
    else{
        e.textContent = i;

    }
    i++
});