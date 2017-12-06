/*

var x = 15;
var colour = 6;
var socket;

function setup() { 
  createCanvas(displayWidth, displayHeight);
  colorMode(HSB, 12, 100, 100)
  background(220);

socket = io.connect('http://localhost:3000');
} 

function draw() { 
  fill(colour, 100, 100);
  if (mouseIsPressed)
  	ellipse(mouseX, mouseY, x, x)
   print(colour);
}

function keyPressed () {
  if (keyCode == BACKSPACE)
    background(220);
  if (keyCode == UP_ARROW)
    x = x + 5;
  if (keyCode == DOWN_ARROW)
    if (x > 5)
  		x = x - 5;
  if (keyCode == LEFT_ARROW)
    if (colour > -2)
    	colour = colour - 1;
  		if (colour == -1)
        colour = 12;
  if (keyCode == RIGHT_ARROW)
    if (colour < 12)	
    	colour = (colour + 1) % 12;
  return false
  }
  
  */

var input, button, greeting, pixel, socket, frame, delta;

function setup() { 
  createCanvas(displayWidth, displayHeight);
  colorMode(HSB, 360, 100, 100);
  //frameRate(14);
  
  input = createInput();
  input.position(20, 65);

  
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What pixel are you?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  socket = io.connect('http://localhost:3000');
  socket.on('milli', framerate);
} 


function draw(){
    background(0);
    fill(counter(pixel)*12, 100, 100);
    rect(0, 0, width, height);
}


function greet(){
  pixel = int(input.value());  
  print(pixel);
}

function framerate(delta){
   frame = ceil((delta/55)) % 30;
   print(frame);
}

function counter(x) {
  var count = (frame + x) % 30;
  return count;
}


  