const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')

let result = 0;
let currentTime = 60
let hitPosition
let timerId = null

function randomsquare (){
  squares.forEach(square => {
    square.classList.remove('mole')
  });

  let randomsquare = squares[Math.floor(Math.random() * 9)]
  randomsquare.classList.add('mole')

  hitPosition = randomsquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  })
})

function moveMole(){
  timerId = setInterval(randomsquare, 500)
}

moveMole()

function countdown (){
  currentTime--
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countdownTimerId)
    clearInterval(timerId)
    alert('Game over! Your final score is ' + result)
  }
}

let countdownTimerId = setInterval(countdown, 1000)