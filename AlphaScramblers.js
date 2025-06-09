window.onload = function(){
const b1=document.querySelector(".b1text");
const b1text="Meet Rohan. He is struggling now because he lacked career mentorship, simply following his friend's choices instead of his own. Consequently, he is unable to secure a desired job with a respectable income."
const b2=document.querySelector(".b2text");
const b2text="AlphaScramblers is a website designed to help you make the right career choices at the right time, aligning with your interests and feasibility. We assure you that taking our suggestions will be beneficial."
function texttypingeffect(element , text , i=0 , getNextText){
        if(i===0){
        element.textContent="";
    }
    if(i<text.length){
        element.textContent += text[i];
        setTimeout(()=>texttypingeffect(element,text,i+1,getNextText), 50)
    }
    else{
        if(getNextText){
            getNextText();
    }}
}
texttypingeffect(b1,b1text,0,()=>{texttypingeffect(b2,b2text)});
}