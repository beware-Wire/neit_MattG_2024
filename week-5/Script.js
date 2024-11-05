const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

/*---Rectangle---*/
ctx.beginPath();
ctx.lineWidth="2";
ctx.moveTo(0,0);
ctx.lineTo(999,0);
ctx.lineTo(999,999);
ctx.lineTo(0,999);
ctx.lineTo(0,0);
ctx.fillRect();
ctx.strokeRect="black";
ctx.strokeRect();
/*---Image Renderer---*/
var rectangleImg = new Image();
Image.src="images/NXTLVLGaming.png";