//HASSAN ELHABOUZ did the driving while Ahsan did the typing

function setup() {
  createCanvas(400, 400); // creates the canvas 
}

//function will draw shape of a rocket 
function draw() {
  background(0, 0, 255); // sets background color
  fill(180);
  ellipse(200,200,100,200); //ellispe that makes the nose of the rocket
  fill(255, 204, 0)
  rect(150,200,100,180); // Makes the fuselage of the rocket
  triangle(120, 380,150,380,150,325); // makes the left fin of the rocket
  triangle(250, 380, 280, 380, 250, 325 ); // makes the right fin
  
  stroke('black');
  strokeWeight(4);
  line(200, 325, 200, 380);
  
  
  
} 