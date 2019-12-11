// port of Daniel Shiffman's Pong coding challenge
// by madacoo

let leftscore = 0;
let rightscore = 0;
let state = 'title';

function setup() {
    createCanvas(600, 400);
    //ding = loadSound("data/ding.mp3");
    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);


}

function draw() {

  if (state === 'title') {
    background(150);
    textSize(80);
    stroke(255);
    fill(255);
    text('GAME', 100, 100);
  }

  else if (state === 'level') {
    level();
  }

    background(0);


    puck.checkPaddleRight(right);
    puck.checkPaddleLeft(left);

    left.show();
    right.show();
    left.update();
    right.update();

    puck.update();
    puck.edges();
    puck.show();

    fill(255);
    textSize(32);
    text(leftscore, 32, 40);
    text(rightscore, width-64, 40);

}

function keyReleased() {
    left.move(0);
    right.move(0);
}

function keyPressed() {
    console.log(key);
    if (key == 'a') {
        left.move(-10);
    } else if (key == 'z') {
        left.move(10);
    }

    if (key == 'j') {
        right.move(-10);
    } else if (key == 'm') {
        right.move(10);
    }
}
