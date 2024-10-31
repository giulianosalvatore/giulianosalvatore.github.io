var canvas;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angles = [];
let stopped = true;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setSize(windowWidth, windowHeight);
  }



function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  //background(0);
  noCursor();

  for (let i = 0; i < 50; i++) {
    angles.push(random(TWO_PI));
    
  }
  
}
 
function draw() {
  
 background(8,0,35);

  
  push();
  translate(mouseX-width/2 ,mouseY-height/2 , 0);
  //noStroke();
  ellipse(5,5,10,10);
  fill(0);
  pop();
  
 for (let i = 0; i < angles.length; i++) {
    angles[i] += 0.02;
  }
  
  for (let i = 0; i < angles.length; i++) {
    
    let x = sin(angles[i]) * random(42,-40);
    let y = sin(angles[i]) * random(40,-31);
    
    let sizee = random(5);
  
    push();
    noStroke();
    translate(x, y, 0); 
    fill(255,100, 255); 
    sphere(sizee/2); 
    pop();
  }
    
  if (!stopped) {
    angle1 += 0.007;
  }
  
  if (!stopped) {
    angle2 += 0.006;
  }
  
  if (!stopped) {
    angle3 += 0.008;
  }
  if (!stopped) {
    angle4 += 0.005;
  }
  
  

  // Draw first cube 
  push();
  rotateX(angle1);
  rotateY(angle1);
  stroke( 255); // Blue stroke
  //noStroke();
  noFill(); // No fill
  //fill(60,100,200,100)
  box(350);
  pop();
  
  // Draw third cube
  push();
  rotateX(angle2);
  rotateY(angle2);
  stroke(255); // Blue stroke
  //noStroke();
  fill(70,100,200)
  noFill(); // No fill
  box(350);
  pop();
  
  
  push();
  rotateX(angle3);
  rotateY(angle3);
  stroke(0,(100),255); // Blue  
  strokeWeight(1);
  //noStroke();
  fill(80,100,200)
  noFill(); // No fill
  box(80);
  pop();
  
   // Draw second cube
  push();
  rotateX(angle4);
  rotateY(angle4);
  stroke(255); // Blue stroke
  //noStroke();
  noFill(); // No fill
  //fill(90,100,200)
  box(350);
  pop();
 
}
  
function mousePressed() {
  if (mouseX > width/2 - 25 && mouseX < width/2 + 25 && mouseY > height/2 - 25 && mouseY < height/2 + 25){
  stopped = !stopped; // Toggle stopped flag
  }

}
