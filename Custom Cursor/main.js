
const crsr = document.querySelector(".cursor");
const main = document.querySelector(".main-container");

main.addEventListener("mousemove",(detail)=>{
    crsr.style.left = detail.x+"px";
    crsr.style.top = detail.y+"px";
})