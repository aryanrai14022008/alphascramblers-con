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
setInterval(newBanner,3000);