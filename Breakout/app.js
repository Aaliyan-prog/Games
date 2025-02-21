const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 570
const boardHeight = 300

const userStart = [235, 10];
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart;

let timerId
const ballDiameter = 20;
let xDirection = -2;
let yDirection = 2;
let score = 0;

//set direction
class block {
  constructor (xAxis,yAxis){
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
  }
}

const blocks = [
  new block(10, 270),
  new block(120, 270),
  new block(230, 270),
  new block(340, 270),
  new block(450, 270),
  new block(10, 240),
  new block(120, 240),
  new block(230, 240),
  new block(340, 240),
  new block(450, 240),
  new block(10, 210),
  new block(120, 210),
  new block(230, 210),
  new block(340, 210),
  new block(450, 210),
]

// create block
function addblock () {
  for (let i = 0; i < blocks.length; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block);
  }
}

addblock()

//add user
const user = document.createElement('div');
user.classList.add('user');
drawUser()
grid.appendChild(user)

//draw user
function drawUser () {
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}
// move user
function moveUser (e) {
  switch(e.key) {
    case 'ArrowLeft':
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10
        drawUser()
      }
      break;
    case 'ArrowRight':
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10
        drawUser()
      }
      break;
  }
}

//draw the ball
function drawBall () {
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move ball
function moveBall () {
  ballCurrentPosition[0] += xDirection
  ballCurrentPosition[1] += yDirection
  drawBall()
  checkForCollisions()
}

document.addEventListener('keydown', moveUser)

// add ball
const ball = document.createElement('div')
ball.classList.add('ball');
drawBall()
grid.appendChild(ball);

timerId = setInterval(moveBall, 10);

//check for collisions
function checkForCollisions () {
  //check for block collisions
  for ( let i = 0; i < blocks.length; i++) {
    if((ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && 
    ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
  ){
    const allblocks = Array.from(document.querySelectorAll('.block'))
    allblocks[i].classList.remove('block')
    blocks.splice(i, 1)
    changeDirection()
    score++
    scoreDisplay.innerHTML = score

    //check for a win
    if (blocks.length === 0){
      scoreDisplay.innerHTML = ' You Win'
      clearInterval(timerId)
      document.removeEventListener('keydown', moveUser)
    }
    }
  } 

  //check for wall collision
  if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[1] >= (boardHeight - ballDiameter)
  || ballCurrentPosition[0] <= 0){
    changeDirection()
  }

  //check for user collisions
   if ((ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
  ){
    changeDirection()
  };

  // check for game over
  if (ballCurrentPosition[1] <= 0){
    clearInterval(timerId);
    scoreDisplay.innerHTML = 'You Lose'
    document.removeEventListener('keydown', moveUser)
  };
};

//change direction
function changeDirection () {
  if (xDirection === 2 && yDirection === 2){
    yDirection = -2
    return
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2
    return
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2
    return
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2
  }
}