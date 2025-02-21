const squares = document.querySelectorAll('.grid div');
const resultDisplay = document.querySelector('#result');
const timeLeft = document.querySelector('#timeLeft')
const startPauseButton = document.querySelector('.startPauseButton')
const logLeft = document.querySelectorAll('.log-Left')
const logRight = document.querySelectorAll('.log-right')
const carLeft = document.querySelectorAll('.car-Left')
const carRight = document.querySelectorAll('.car-right')

let currentIndex = 76;
const width = 9;
let timerId
let currentTime = 20
let outCome

function moveFrog (e){
  squares[currentIndex].classList.remove('frog')

  switch(e.key){
    case 'ArrowLeft' :
      if (currentIndex % width !== 0) currentIndex -= 1
      break
    case 'ArrowRight' :
      if (currentIndex % width < width -1) currentIndex += 1
      break
    case 'ArrowUp' :
      if (currentIndex - width >= 0) currentIndex -= width
      break
    case 'ArrowDown' :
      if (currentIndex + width <= width * width) currentIndex += width
      break
  }

  squares[currentIndex].classList.add('frog')
}

function autoMoveLog () {
  timeLeft.textContent = currentTime
  currentTime--
  timeLeft.textContent = currentTime
  logLeft.forEach(logLeft => moveLogLeft(logLeft))
  logRight.forEach(logright => moveLogRight(logright))
  carLeft.forEach(carleft => carMoveLeft(carleft))
  carRight.forEach(carright => carMoveRight(carright))
}

function checkOutCome() {
  lose()
  win()
}

function moveLogLeft (logLeft) {
  switch(true){
    case logLeft.classList.contains('l1'):
      logLeft.classList.remove('l1')
      logLeft.classList.add('l2')
      break
    case logLeft.classList.contains('l2'):
      logLeft.classList.remove('l2')
      logLeft.classList.add('l3')
      break
    case logLeft.classList.contains('l3'):
      logLeft.classList.remove('l3')
      logLeft.classList.add('l4')
      break
    case logLeft.classList.contains('l4'):
      logLeft.classList.remove('l4')
      logLeft.classList.add('l5')
      break
    case logLeft.classList.contains('l5'):
      logLeft.classList.remove('l5')
      logLeft.classList.add('l1')
      break
  }
}

function moveLogRight(logright) {
  switch(true){
    case logright.classList.contains('l5'):
      logright.classList.remove('l5')
      logright.classList.add('l4')
      break
    case logright.classList.contains('l4'):
      logright.classList.remove('l4')
      logright.classList.add('l3')
      break
    case logright.classList.contains('l3'):
      logright.classList.remove('l3')
      logright.classList.add('l2')
      break
    case logright.classList.contains('l2'):
      logright.classList.remove('l2')
      logright.classList.add('l1')
      break
    case logright.classList.contains('l1'):
      logright.classList.remove('l1')
      logright.classList.add('l5')
      break
  }
}
function carMoveLeft(carleft) {
  switch(true){
    case carleft.classList.contains('c1'):
      carleft.classList.remove('c1')
      carleft.classList.add('c2')
      break
    case carleft.classList.contains('c2'):
      carleft.classList.remove('c2')
      carleft.classList.add('c3')
      break
    case carleft.classList.contains('c3'):
      carleft.classList.remove('c3')
      carleft.classList.add('c1')
      break
  }
}

function carMoveRight(carright) {
  switch(true){
    case carright.classList.contains('c3'):
      carright.classList.remove('c3')
      carright.classList.add('c2')
      break
    case carright.classList.contains('c2'):
      carright.classList.remove('c2')
      carright.classList.add('c1')
      break
    case carright.classList.contains('c1'):
      carright.classList.remove('c1')
      carright.classList.add('c3')
      break
  }
}

function lose () {
  if (squares[currentIndex].classList.contains('c1') ||
     squares[currentIndex].classList.contains('l4') ||
     squares[currentIndex].classList.contains('l5') ||
     currentTime <= 0
    ){
    resultDisplay.textContent = 'You lose'
    clearInterval(timerId)
    clearInterval(outCome)
    squares[currentIndex].classList.remove('frog')
    document.removeEventListener('keyup', moveFrog)
  }
}

function win() {
  if(squares[currentIndex].classList.contains('ending-block')){
    resultDisplay.textContent = 'you win'
    clearInterval(timerId)
    clearInterval(outCome)
    squares[currentIndex].classList.remove('frog')
    document.removeEventListener('keyup', moveFrog)
  }
}

startPauseButton.addEventListener('click',() => {
  if (timerId){
    clearInterval(timerId)
    clearInterval(outCome)
    timerId = null
    outCome = null
    document.removeEventListener('keyup', moveFrog)
  } else {
    timerId = setInterval(autoMoveLog, 1000)
    outCome = setInterval(checkOutCome, 50)
    document.addEventListener('keyup', moveFrog)
  }
})
