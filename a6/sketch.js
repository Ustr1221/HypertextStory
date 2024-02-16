let astronautData;
let circles = [];
let selectedCircle = null; // Variable to keep track of the selected circle

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  loadJSON("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
  astronautData = data;
  for (let i = 0; i < astronautData.number; i++) {
    let astronaut = astronautData.people[i];
    let circleX = random(width);
    let circleY = random(height);
    let circleSize = 150;
    let speedX = random(1, 3); // Random horizontal speed
    let speedY = random(1, 3); // Random vertical speed
    let color = getRandomColor(); // Generate random color

    circles.push({
      x: circleX,
      y: circleY,
      size: circleSize,
      speedX: speedX,
      speedY: speedY,
      name: astronaut.name,
      color: color
    });
  }
}

function draw() {
  background(10);
  generateStars(50);
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    // If a circle is selected, update its position based on mouse movement
    if (selectedCircle === circle) {
      circle.x = mouseX;
      circle.y = mouseY;
    }

    // Update position
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    // Check edges
    if (circle.x + circle.size / 2 > width || circle.x - circle.size / 2 < 0) {
      circle.speedX *= -1;
    }
    if (circle.y + circle.size / 2 > height || circle.y - circle.size / 2 < 0) {
      circle.speedY *= -1;
    }

    // Draw circle
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size, circle.size);

    // Draw label with astronaut's name
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(20);
    text(circle.name, circle.x, circle.y);
  }
}

function getRandomColor() {
  return color(random(255), random(255), random(255));
}

function mousePressed() {
  // Check if mouse is inside any circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.size / 2) {
      // Select the circle for dragging
      selectedCircle = circle;
      break; // Exit loop once a circle is selected
    }
  }
}

function mouseReleased() {
  // Deselect the circle when mouse is released
  selectedCircle = null;
}


function generateStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    fill(255);
    ellipse(x, y, 2, 2); // Draw small white circles as stars
  }
}
