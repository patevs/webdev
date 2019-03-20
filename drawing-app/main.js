var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// setting canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 10;
var dragging = false;

// setting line width
context.lineWidth = radius*2;

// function used to draw a point to the canvas
var putPoint = function(e){
	if(dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		// arc(x, y, radius, startAngle, endAngle, [anti-clockwise])
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

// called when mouse button pressed
var engage = function(e){
	dragging = true;
	putPoint(e);
}

// called when mouse button released
var disengage = function(){
	dragging = false;
	context.beginPath();
}

// creating event listeners
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);