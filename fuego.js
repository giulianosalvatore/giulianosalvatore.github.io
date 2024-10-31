let objs = [];
let objsNum = 360;
const noiseScale = 0.01;
let R;
let maxR;
let t = 0;
let nt = 0;
let nR = 0;
let nTheta = 1000;
const palette = ["#ACDEED55", "#00000", "#00000", "#0000"];
let allowObjects = true; // Variable to control object creation
let customCursor;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setSize(windowWidth, windowHeight);
  }

 


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-3');
  //createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  noStroke();
  stroke(255,50,7,100);
  //noCursor();
  maxR = max(width, height) * 0.45;
  
  //background(0,0,0);
  // background("#F5F4FD");
}

function draw() {
 //background(0);
  let R = map(noise(nt * 0.01, nR), 0, 1, 0, maxR);
  let t = map(noise(nt * 0.001 , nTheta), 0, 1, -360, 360);
  let x = R * cos(t) + width / 2;
  let y = R * sin(t) + height / 2;

  if (allowObjects) {
    objs.push(new Obj(x, y));
  }

  if (allowObjects) {
    //objs.push(new Obj(mouseX, mouseY));
    objs.push(new Obj(x, y));
  }

  for (let i = 0; i < objs.length; i++) {
    objs[i].move();
    objs[i].display();
  }

  for (let j = objs.length - 1; j >= 0 ; j--) {
    if (objs[j].isFinished()) {
      objs.splice(j,1);
    }
  }

  nt++;
}

function keyPressed() {
  if (key === ' ') {
    allowObjects = !allowObjects; // Toggle the value of allowObjects
    canvas.position(0,0);
  }
}

class Obj {
  constructor(ox, oy) {
    this.init(ox, oy);
  }

  init(ox, oy) {
    this.vel = createVector(0, 0);
    this.pos = createVector(ox, oy);
    this.t = random(0, noiseScale);
    this.lifeMax = random(20, 50);
    this.life = this.lifeMax;
    this.step = random(0.1, 0.5);
    this.dMax = random(10) >= 5 ? 10 : 30;
    this.d = this.dMax;
    this.c = color(random(150,1),5,80);
  }

  move() {
    let theta = map(noise(this.pos.x * noiseScale, this.pos.y * noiseScale, this.t), 0, 1, -360, 360);
    this.vel.x = cos(theta);
    this.vel.y = sin(theta);
    this.pos.add(this.vel);
  }

  isFinished() {
    this.life -= this.step;
    this.d = map(this.life, 0, this.lifeMax, 0, this.dMax);
    if (this.life < 0) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.d);
  }
}
