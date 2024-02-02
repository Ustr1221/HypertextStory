let x = 0;
function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(255);
    stroke(59);
    i = 0;
    while(i <= x) {
        if(i == 0 && x >= 4) {
            fill(0,0,0)
            rect(0, 0, 170, 400);
        } 
        if(i == 0 && x >= 7) {
            //red
            noStroke();
            fill(255, 0, 0);
            triangle(400, 0, 170, 230, 400, 230);
            //red
            fill(255, 0, 0);
            rect(170, 230, 400, 400);
            stroke(59);
            line(400,0,170,230);
        }
        switch (i){
            case 1:
                fill(200,200,200);
                triangle(0, 0, 0, 150, 170, 0);
                break;
            case 2:
                //yellow
                fill(250, 240, 0);
                triangle(0, 260, 0, 400, 70, 317);
                break;
            case 3:
                //white bottom left
                fill(245, 245, 245);
                triangle(0,400,70, 317, 170, 400);
                break;
            case 5:
                //grey top right
                fill(180,180,180);
                triangle(200, 0, 400, 0, 300, 100)
                break;
            case 6:
                //grey/blue bottom
                fill(200,200,230);
                triangle(170, 230, 170, 400, 350, 400);
                break;
            default:
        }
        i++;
    }
    
    x++;
}

function mousePressed() {
    redraw();
}