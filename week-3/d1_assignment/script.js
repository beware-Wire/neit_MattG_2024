const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");


//Yellow Rectangle
ctx.beginPath();
ctx.fillStyle = "#FFCC00";
ctx.fillRect(85, 302, 100, 100);
ctx.stroke();

//Circle

ctx.beginPath()
ctx.fillStyle = "#ffff00"
ctx.arc(385, 442, 66, 0, 10*Math.PI);
ctx.stroke()

//Line
ctx.beginPath();
ctx.lineWidth = "5";

ctx.stroke();
