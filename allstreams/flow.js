const flow = document.getElementById("ss1");
flow.addEventListener("load",()=>{
    const svgdoc= flow.contentDocument;
    const b1 = svgdoc.getElementById("b1");
    b1.addEventListener("click",()=>{
        console.log("b1")
    })
})