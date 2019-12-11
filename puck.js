class Puck {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = 12;

        this.reset();
    }

    checkPaddleLeft(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x - this.r < p.x + p.w/2) {

            if (this.x > p.x) {
              ding.play();
              rightscore++;
              this.reset();
            }

        }
    }
    checkPaddleRight(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x + this.r > p.x - p.w/2) {

            if (this.x < p.x) {
              ding.play();
              leftscore++;
              this.reset();

            }
        }
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    reset() {
        this.x = width/2;
        this.y = height/2;
        let angle = random(-PI/4, PI/4);
        this.xspeed = 5 * Math.cos(angle);
        this.yspeed = 5 * Math.sin(angle);

        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
    }

    edges() {
        if (this.y < 0 || this.y > height) {
            this.yspeed *= -1;

        }

        if (this.x < 0 || this.x > width) {

            this.xspeed *= -1;
          }


    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.r*2);
    }
}
