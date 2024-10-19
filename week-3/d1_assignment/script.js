const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");




//Yellow Rectangle
ctx.beginPath();
ctx.fillStyle = "#FFCC00";
ctx.fillRect(85, 302, 100, 100);
ctx.lineWidth = "5";
ctx.strokeStyle = "black";
ctx.rect(85, 302, 100, 100);
ctx.stroke();



//Circle
ctx.beginPath()
ctx.arc(385, 440, 67.5, 0, 2*Math.PI);
ctx.fillStyle = "red";
ctx.strokeStyle = "yellow";
ctx.fill();
ctx.stroke();



//Line
ctx.beginPath();
ctx.lineWidth = "5";
ctx.moveTo(85,683);
ctx.lineTo(280,550);
ctx.fillStyle = "255,0,0";
ctx.strokeStyle = "rgba(255,0,0)";
ctx.stroke();



//Pentagon
ctx.beginPath()
ctx.lineWidth = "5";
ctx.moveTo(559,309);
ctx.lineTo(666,283);
ctx.lineTo(725,380);
ctx.lineTo(650,465);
ctx.lineTo(548,420);
ctx.lineTo(559,309);
ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.fill();
ctx.stroke();



//Star
ctx.beginPath()
ctx.lineWidth = "5";

ctx.moveTo(635,497);
ctx.lineTo(603,554);
ctx.lineTo(538,567);
ctx.lineTo(583,614);
ctx.lineTo(575,681);
ctx.lineTo(635,653);
ctx.lineTo(696,681);
ctx.lineTo(688,614);
ctx.lineTo(733,567);
ctx.lineTo(668,554);
ctx.lineTo(635,497);

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgba(32,32,32)";

ctx.fill();
ctx.stroke();
