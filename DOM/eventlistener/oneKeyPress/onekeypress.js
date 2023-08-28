let display=document.getElementById("display");
let inputBox=document.getElementById("input-box");
//key press event listner.
inputBox.addEventListener('keypress',function(e){
    display.innerText="you have pressed" + e.key
});