const allCards = document.querySelectorAll(".cards-scroll .card");
const headHeight = 44;
const baseWidth = 44;
if (allCards.length){
allCards.forEach((card , i)=>{
const incValue = i*headHeight;
const decValue = (allCards.length-i)*headHeight;
const widthValue = (allCards.length-i)*baseWidth;
card.setAttribute("style" , `top:${incValue}px; bottom : calc(-100vh + ${decValue}px)`)
})
}