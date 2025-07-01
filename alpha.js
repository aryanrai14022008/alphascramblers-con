let bars = document.querySelector(".navcon");
let menu = document.querySelector(".navcon-ele");
let currstat="unvis";
bars.addEventListener("click",()=>{
if(currstat=="unvis"){
    currstat="vis"
    menu.classList.remove("navcon-ele");
    menu.classList.add("navcon-ele-new");
}
else{
    currstat="unvis"
    menu.classList.remove("navcon-ele-new");
    menu.classList.add("navcon-ele");
}
})
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let currentSlide = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}


setInterval(() => {
  showSlide(currentSlide);
  currentSlide++;

 
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
}, 3000);
