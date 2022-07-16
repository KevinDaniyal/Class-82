canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "";
var lastPositionOfX, lastPositionOfY;
color = "blue";
width_of_line = 1 

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("lineWidth").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
   currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
   currentPositionOfMouseY = e.clientY - canvas.offsetTop;

   if (mouseEvent == "mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width_of_line;
       
       console.log("last position of x and y coordinates are = ");
       console.log("X = " + lastPositionOfX + ", Y = " + lastPositionOfY);
       ctx.moveTo(lastPositionOfX,lastPositionOfY);
       
       console.log("current position of x and y coordinates are = ");
       console.log("X = " + currentPositionOfMouseX + ", Y = " + currentPositionOfMouseY);
       ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);
       ctx.stroke();
   }

   lastPositionOfX = currentPositionOfMouseX;
   lastPositionOfY = currentPositionOfMouseY;

}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
