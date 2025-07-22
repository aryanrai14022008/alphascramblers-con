let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let overlay=document.querySelector(".overlay");
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
overlay.style.height=`${document.documentElement.scrollHeight}px`
let register = document.querySelector(".register");
let regbtn = document.querySelector(".login");
regbtn.addEventListener("click",()=>{
    register.classList.remove("regdis");
    header.style.opacity="0.3";
    main.style.opacity="0.3";
    footer.style.opacity="0.3";
    overlay.classList.add("overlay1");
    document.body.style.overflow="hidden";
})
for(let i=1;i<=10;i++){
    let button = document.querySelector(`.b${i}`);
    let answer = document.querySelector(`.a${i}`);
    let answernew = document.querySelector(`.a${i}n`)

    button.addEventListener("click",()=>{
    if(currstat=="unvis"){
        currstat="vis"
        answer.classList.remove(`a${i}`);
        answer.classList.add(`a${i}n`)
        button.innerHTML="-"
    }
    else{
        currstat="unvis"
        answer.classList.remove(`a${i}n`);
        answer.classList.add(`a${i}`)
        button.innerHTML="+"
    }
})
}
