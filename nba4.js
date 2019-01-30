function getDistance (event, klad ){
	var x = event.offsetX -klad.x;
	var y = event.offsetY- klad.y;
	var c2 = x*x + y*y;
	var c = Math.sqrt(c2);
	return c ;
}

function getDistanceWord (distance){
	if (distance< 200) return "THE HOTTEST HOT!!!";
	else if (distance < 300) return 'HOT!';
	else if (distance <500) return 'WARM !';
	else if (distance < 800) return 'COLD!';
	else return 'THE COLDES =(';
}
var width = 1414;
var height = 1001;
var clicks = 0;

var klad = {
	x: Math.floor(Math.random()*width),
	y: Math.floor(Math.random()*height)
};
$('#map').click(function(event){
	clicks++;
	var distance = getDistance(event,klad);
	var distanceWord = getDistanceWord(distance);
	$('#distance').text(distanceWord);
	$('#click').text(clicks);
	if (distance <100){
	alert('Good Game!');
	alert('Clicks:' + (clicks-1));
}
});
