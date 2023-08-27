var mouseEvent;

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 2;
var radius = 50;

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mousedown(e) {
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mouseDown";
}

function my_mousemove(e) {
  if (mouseEvent == "mouseDown") {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
  return;
}

function my_mouseup(e) {
  mouseEvent = "mouseUp";
}

function my_mouseleave(e) {
  mouseEvent = "mouseLeave";
}

function clearArea() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
