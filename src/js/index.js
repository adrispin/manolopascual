var maxCircle = document.getElementById("maxCircle");
var mediumCircle = document.getElementById("mediumCircle");
var minCircle = document.getElementById("minCircle");
document.addEventListener("mousemove", getMouse);

var maxCirclepos = {x:0, y:0};
var mediumCirclepos = {x:0, y:0};
var minCirclepos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

function getMouse(e){
	mouse.x = e.pageX;
	mouse.y = e.pageY;

console.log('X: ' + e.pageX);
console.log('Y: ' + e.pageY);
}

function followMouse(){
	//1. find distance X , distance Y
	var distX = mouse.x - maxCirclepos.x;
	var distY = mouse.y - maxCirclepos.y;
	var distXmedium = mouse.x - mediumCirclepos.x;
	var distYmedium = mouse.y - mediumCirclepos.y;
	var distXmin = mouse.x - minCirclepos.x;
	var distYmin = mouse.y - minCirclepos.y;

//Easing motion
//Progressive reduction of distance 
	maxCirclepos.x += distX;
	maxCirclepos.y += distY;
	mediumCirclepos.x += (distXmedium + 3)/5;
	mediumCirclepos.y += (distYmedium + 3)/2;
	minCirclepos.x += (distXmin + 6)/8;
	minCirclepos.y += (distYmin + 6)/3;
	
	maxCircle.style.left = maxCirclepos.x + "px";
	maxCircle.style.top = maxCirclepos.y + "px";
	mediumCircle.style.left = mediumCirclepos.x + "px";
	mediumCircle.style.top = mediumCirclepos.y + "px";
	minCircle.style.left = minCirclepos.x + "px";
	minCircle.style.top = minCirclepos.y + "px";
	
}