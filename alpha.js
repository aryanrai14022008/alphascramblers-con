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
let nextbut = document.querySelectorAll(".nextbut")
let banner = document.querySelector(".banner");
let bannerno=1;
function newBanner(){
    if(bannerno<5){
        banner.style.transform=`translateX(-${bannerno*100}vw)`
        bannerno++;}
    else if(bannerno==5){
        setTimeout(()=>{
            banner.style.transition="none";
            banner.style.transform="translateX(0%)";
        },0)
        setTimeout(()=>{
            banner.style.transition="transform 1.5s ease-in-out";
            bannerno=1;
        },50)}
}

setInterval(newBanner,5000);
nextbut[0].addEventListener("click",(e) => {
    banner.style.transform=`translateX(-${bannerno*100}vw)`
    banner.style.transition="transform 1.5s ease-in-out";
    bannerno++;

  
}
)
nextbut[1].addEventListener("click",(e) => {
    banner.style.transform=`translateX(-${bannerno*100}vw)`
    banner.style.transition="transform 1.5s ease-in-out";
    bannerno++;

  
}
)
nextbut[2].addEventListener("click",(e) => {
    banner.style.transform=`translateX(-${bannerno*100}vw)`
    banner.style.transition="transform 1.5s ease-in-out";
    bannerno++;

  
}
)
nextbut[3].addEventListener("click",(e) => {
    banner.style.transform=`translateX(-${bannerno*100}vw)`
    banner.style.transition="transform 1.5s ease-in-out";
    bannerno++;

  
}
)
nextbut[4].addEventListener("click",(e) => {
    banner.style.transform=`translateX(0%)`
    banner.style.transition="none"
    bannerno =1;

  
}
)
 banner.style.transition="transform 1.5s ease-in-out";


