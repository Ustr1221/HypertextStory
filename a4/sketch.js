function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(230);
    stroke(90);

    //black
    fill(0,0,0)
    rect(0, 0, 170, 400);
    //grey top left
    fill(200,200,200);
    triangle(0, 0, 0, 150, 170, 0);
    //yellow
    fill(250, 240, 0);
    triangle(0, 260, 0, 400, 70, 317);
    //white bottom left
    fill(255, 255, 255);
    triangle(0,400,70, 317, 170, 400);

    //white top 
    fill(255, 255, 255);
    rect(170, 0, 400, 230);

    //red
    noStroke();
    fill(255, 0, 0);
    triangle(400, 0, 170, 230, 400, 230);
    //red
    fill(255, 0, 0);
    rect(170, 230, 400, 400);

    stroke(90);
    line(400,0,170,230); 
    //grey/blue bottom
    fill(200,200,230);
    triangle(170, 230, 170, 400, 350, 400);

    //grey top right
    fill(180,180,180);
    triangle(200, 0, 400, 0, 300, 100)
}