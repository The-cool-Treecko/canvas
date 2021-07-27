var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    circle(mouse_x,mouse_y);
    console.log(mouse_x,mouse_y);
}

function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.stroke();
}

function clearcanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}