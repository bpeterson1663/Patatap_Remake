
//data for each keystroke
var keyData = {
	q: {
		sound: new Howl({
  		urls: ['/vendors/sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		urls: ['/vendors/sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		urls: ['/vendors/sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		urls: ['/vendors/sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
	t: {
		sound: new Howl({
  		urls: ['/vendors/sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		urls: ['/vendors/sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		urls: ['/vendors/sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		urls: ['/vendors/sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			urls: ['/vendors/sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		urls: ['/vendors/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		urls: ['/vendors/sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		urls: ['/vendors/sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		urls: ['/vendors/sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		urls: ['/vendors/sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		urls: ['/vendors/sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		urls: ['/vendors/sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		urls: ['/vendors/sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		urls: ['/vendors/sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		urls: ['/vendors/sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		urls: ['/vendors/sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		urls: ['/vendors/sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		urls: ['/vendors/sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		urls: ['/vendors/sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		urls: ['/vendors/sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			urls: ['/vendors/sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		urls: ['/vendors/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
};


var circles = [];
function onKeyDown(event){

  if(keyData[event.key]){//if key is pressed. If user presses a key not defined in keyData application will do nothing
    //creates a new point using the max width and height of the screen
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint= Point.random(); //generates a number between 0 and 1
    var point = maxPoint * randomPoint;//creates a point between the max and the random

    var newCircle = new Path.Circle(point, 500); //Creates a new circle 500 pixels in diameter with the cordinates from the point variable

    newCircle.fillColor = keyData[event.key].color; //sets the color of the circle from the data above
    keyData[event.key].sound.play(); //plays the sound
    circles.push(newCircle); //stores the circle in the circles array temporary
    console.log("Point ", maxPoint);
  }
}

function onFrame(event){
	//loops through the circles array
  for(var i = 0; i < circles.length; i++){

    circles[i].fillColor.hue += 1;		//changes the color of the circle
    circles[i].scale(.9); //reduces the size of the circle each frame by 90%
		//if the area of the circle is less than 1 px remove it from the circles array
    if(circles[i].area < 1){
      circles[i].remove();
      circles.splice(i, 1);
      console.log(circles);
    }
  }
}
