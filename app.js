const canvas = document.getElementById("jsCanvas");
const color = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let isPainting = false;
let isFill = false;

function startPainting(event) {
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
    isPainting = true;
}

function stopPainting() {
    ctx.closePath();
    isPainting = false;
}

function onMouseMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
}

function changeColor(event) {
    ctx.strokeStyle = event.target.style.backgroundColor;
}

function changeRange(event) {
    ctx.lineWidth = event.target.value;
}

function changeMode(evnet) {
    if(isFill){
        isFill = false;
        mode.innerText = "Fill";
    }else{
        isFill = true;
        mode.innerText = "Paint";
    }
}

if (canvas.getContext) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if (range) {
    range.addEventListener("input", changeRange);
}

if (mode) {
    mode.addEventListener("click", changeMode);
}

Array.from(color).forEach(color => color.addEventListener("click", changeColor));