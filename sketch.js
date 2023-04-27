let ball;
let paddle;
let bricks = [];
let w, h;
let gameStarted = false;
let gameInfo = true;
let gameOver = false;
let gameWon = false;
let score = 0;
let lives = 3;

function setup() {
  createCanvas(640, 480);

  ball = new Ball(width / 2, height - 94);
  paddle = new Paddle(width / 2, height - 80, 90, 12);
  
  createBricks(1);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    paddle.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    paddle.setDir(-1);
  }
  
  if (key == "1") {
    createBricks(1);
  } else if (key == "2") {
    createBricks(2);
  }
  
  if (keyCode === ENTER) {
    gameInfo = true;
    gameOver = false;
    gameStarted = false;
    gameWon = false;
    ball.reset();
    paddle.reset();
    createBricks(1);
    score = 0;
    lives = 3;
  }
  
  if (key === ' ') {
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false;
  }


}

function keyReleased() {
  paddle.setDir(0);
}

function draw() {
  const bkg = color("lightblue");
  background(red(bkg)/2, green(bkg)/2, blue(bkg)/2);
  
  for (let i = 0; i < lives; i++) {
    fill("white");
    stroke("black");
    strokeWeight(3);
    circle(i*45 + 30, 35, 30);
  }
  
  textSize(25);
  fill("lime");
  stroke(0);
  strokeWeight(4);
  text("Puntiación : " + score, width - 100, height / 4 - 80);
  strokeWeight(2);
  stroke("black");
  text("Puntiación : " + score, width - 100, height / 4 - 80);
  
  textSize(30);
  fill(255);
  strokeWeight(4);
  stroke("navy")
  text("Juego de los bloques", width / 2 - 10, height / 4 - 90);
  
  
  for (let brick of bricks) {
    brick.render();
  }
  ball.render();
  paddle.render();
  ball.edges();
  ball.end();
  ball.won();

  if (gameInfo && !gameStarted && !gameOver && !gameWon) {
    textAlign(CENTER, CENTER);
    textSize(20);
    fill("orange");
    strokeWeight(3);
    stroke(0);
    text("Utiliza las flechas para mover el palo", width / 2, height / 2);
    text("Usa 1 y 2 para alternar niveles", width / 2, height / 2 + 25);
    fill("Red");
    text("Teclea espacio para jugar", width / 2, height / 2 + 50);
    ball.pos.x = paddle.pos.x;
  }

  //ball.update();

  if (gameStarted && !gameInfo && !gameOver && !gameWon) {
    paddle.update();
    ball.update();  
    ball.bounce(paddle);
    
    let ABBrick = false;
    for (let i = bricks.length - 1; i >= 0; i--) {
      let brick = bricks[i];
      if (ball.colliding(brick)) {
        if (ABBrick === false) {
          ball.bounceOff(brick);
          ABBrick = true;
        }
        score += brick.points;
        bricks.splice(i, 1);
      }
    }
  }
 
  if (gameOver && !gameStarted && !gameInfo && !gameWon) {
    fill("red");
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    stroke("firebrick");
    textSize(50);
    text("NIMODO :´´/", width / 2, height / 2);
    fill("black");
    textSize(20);
    text("Teclea enter para jugar de nuevo", width / 2, height / 2 + 75);
  }
  
  if (gameWon && !gameOver && !gameStarted && !gameInfo) {
    textAlign(CENTER, CENTER);
    textSize(70);
    stroke("Chartreuse");
    strokeWeight(6);
    fill("MediumSpringGreen");
    text("ALGO BIEN", width / 2, height / 2);
    stroke(0);
    strokeWeight(3);
    text("ALGO BIEN", width / 2, height / 2);
    fill("lime");
    stroke(0);
    textSize(20);
    text("TE LA RIFASTE!!", width / 2, height / 2 - 100);
    fill("lime");
    text("press enter to play again!", width / 2, height / 2 + 50);
    
  }

}

function createBricks(level) {
  if (level === 1) {
    bricks.splice(0);
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 7; j++) {
        w = width / 14;
        h = 15;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, 7-j));
      }
    }
  } else if (level === 2) {
    bricks.splice(0);
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < j+1; i++) {
        w = width / 14;
        h = 15;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, (2*(14-i)-1) % 8));
      }
    }
  }
}
