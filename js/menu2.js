
$(".openMenu2 ul li").click(function(e) {
    $(".openMenu2 ul li").removeClass("activeMenuLi");
    $(this).addClass("activeMenuLi");
  });
  
// const items = document.querySelectorAll(".openMenu2 ul li");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('open-true');
  
//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('open-true', 'false');
//   }
  
//   if (itemToggle == 'false') {
//     this.setAttribute('open-true', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));