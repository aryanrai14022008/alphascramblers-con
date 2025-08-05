let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let overlay=document.querySelector(".overlay");
let bars = document.querySelector(".navcon");
let menu = document.querySelector(".navcon-ele");
let scrolltop = document.querySelector(".top");
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
overlay.style.height=`${document.documentElement.scrollHeight}px`
let register = document.querySelector(".register");
let regbtn = document.querySelector(".login");
let cross= document.querySelector(".cross")
regbtn.addEventListener("click",()=>{
    register.classList.remove("regdis");
    header.style.opacity="0.3";
    main.style.opacity="0.3";
    footer.style.opacity="0.3";
    overlay.classList.add("overlay1");
    document.body.style.overflow="hidden";
})
cross.addEventListener("click",()=>{
    register.classList.add("regdis");
    header.style.opacity="1";
    main.style.opacity="1";
    footer.style.opacity="1";
    overlay.classList.remove("overlay1");
    document.body.style.overflow="scroll";
})
scrolltop.addEventListener("click",()=>{
    window.scrollTo(0,0);
})
window.addEventListener("scroll",()=>{
    if(scrollY>innerHeight/4){
        console.log("scroll")
        scrolltop.classList.remove("d");
    }
    if(scrollY<innerHeight/innerHeight){
        console.log("scroll")
        scrolltop.classList.add("d");
    }
})
