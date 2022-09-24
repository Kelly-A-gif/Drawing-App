const canvas  = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let color = "black";
let isPressed = false;
let size =1;
let x1 = undefined;
let y1 = undefined;


canvas.addEventListener("mousedown",(e)=>{
     x1 = e.offsetX;
     y1= e.offsetY;
    isPressed = true;
    drawCircle(x1,y1);
})
canvas.addEventListener("mouseup",(e)=>{
    isPressed = false;

    x1 = undefined;
    y1 = undefined;
})

canvas.addEventListener('mousemove',(e)=>{
  
    if(isPressed){
        const x = e.offsetX;
        const y = e.offsetY;
        // console.log(x,y)
       
        drawLine(x1,y1,x,y);
        
        x1=x;
        y1=y;
    }
    
})
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y,size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}


function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size;
    ctx.stroke();
    ctx.strokeStyle = color;
}


const clear = document.querySelector(".clear-button");
const colorfill = document.getElementById("color");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const number = document.querySelector(".number");

minusButton.addEventListener('click',()=>{

    size -= 1;
    if(size<1){
        size = 1;
    }
    
    number.textContent = size;

})
plusButton.addEventListener('click',()=>{
    size += 1;
    
    number.textContent = size;
        
})

colorfill.addEventListener('change',(e)=>{
    color = e.target.value;
})

clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})