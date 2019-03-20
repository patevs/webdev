
var setRadius = function(newRadius){
	if (newRadius < minRad) {
		newRadius = minRad;
	} else if (newRadius > maxRad){
		newRadius = maxRad;
	}
	radius = newRadius;
	context.lineWidth = radius*2;

	radSpan.innerHTML = radius;
}

var minRad = 5,
	maxRad = 100,
	defaultRad = 20,
	interval = 5,
	radSpan = document.getElementById('radval'),
	decRad = document.getElementById('decrad'),
	incRad = document.getElementById('incrad');

decrad.addEventListener('click', function(){
	setRadius(radius-interval);
});

incrad.addEventListener('click', function(){
	setRadius(radius+interval);
});

setRadius(defaultRad);