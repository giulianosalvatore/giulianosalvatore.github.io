var canvas;
let spheres = [];
let moving = true; // variable para almacenar el estado de movimiento de las esferas


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }


function setup() {
    
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  for (let i = 0; i < 1000; i++) {
    // iniciamos cada esfera en el centro de la pantalla
    let sphere = {
      x: width / 2,
      y: height / 2,
      prevX: width / 2,
      prevY: height / 2
    };
    spheres.push(sphere);
  }
  //background(255,10,10);
  noStroke();
  //stroke(100,10,10);
  //strokeWeight(1);
  setInterval (addSphere, 200);
}

function draw() {
  //background(255,180); // limpiamos la pantalla en cada fotograma
   background(8,0,35);
  if (moving) {
    // si las esferas están en movimiento, las movemos siguiendo una trayectoria en zigza
    for (let i = 0; i < spheres.length; i++) {
      let sphere = spheres[i];
      sphere.x = sphere.x + cos(frameCount/10 + i)* random(-15,0);
      sphere.y = sphere.y + sin(frameCount/10 + i) * random(-9,9);
    }
  }
  
  // dibujamos cada esfera y una línea desde su posición anterior hasta su posición actual
  for (let i = 0; i < spheres.length; i++) {
    let sphere = spheres[i];
    //fill(0)
    fill(random(197,300),random(131,150),random(100,299));
    ellipse(sphere.x, sphere.y, 3,3);
    //line(sphere.x, sphere.y, sphere.prevX, sphere.prevY);

    sphere.prevX = sphere.x;
    sphere.prevY = sphere.y;
  }
}
function addSphere() {
  let sphere = {
    x: width / 2,
    y: height / 2,
    prevX: width / 2,
    prevY: height / 2,
    };
    spheres.push(sphere);
  }

function mousePressed() {
  // cambiamos el estado de movimiento de las esferas
  moving = !moving;
}
