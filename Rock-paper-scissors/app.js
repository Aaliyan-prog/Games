const userChoiceDisplay = document.getElementById('userchoice');
const computerChoiceDisplay = document.getElementById('compchoice');
const resultDisplay = document.getElementById('Result');
const userscoreDisplay = document.getElementById('userscore');
const compscoreDisplay = document.getElementById('compscore');
const drawDisplay = document.getElementById('draw');
const possiblechoices = document.querySelectorAll('button');
let userchoice
let compchoice
let result
let userscore = 0;
let compscore = 0;
let draw = 0;

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
  userchoice = e.target.id
  userChoiceDisplay.innerHTML = userchoice
  console.log(userchoice)
  generatecompchoice()
  getresult()
  scoreboard()
}));

function generatecompchoice (){
  const randomnumber = Math.floor(Math.random() * 3) + 1

  if(randomnumber === 1) {
    compchoice = 'rock'
  } else if (randomnumber === 2) {
    compchoice = 'paper'
  } else if (randomnumber === 3){
    compchoice = 'scissor'
  }

  computerChoiceDisplay.innerHTML = compchoice
};

function getresult () {
  if (userchoice === compchoice) {
    result = "It's a draw"
  } else if (userchoice === 'rock' && compchoice === 'paper'){
    result = 'Computer win'
  } else if (userchoice === 'rock' && compchoice === 'scissor'){
    result = 'You win'
  } else if (userchoice === 'paper' && compchoice === 'rock'){
    result = 'You win'
  } else if (userchoice === 'paper' && compchoice === 'scissor'){
    result = 'Computer win'
  } else if (userchoice === 'scissor' && compchoice === 'rock'){
    result = 'Computer win'
  } else if (userchoice === 'scissor' && compchoice === 'paper'){
    result = 'You win'
  }
  resultDisplay.innerHTML = result
};

function scoreboard (){
  if (result === 'You win') {
    userscore = userscore + 1
  } else if (result === 'Computer win') {
    compscore = compscore + 1
  } else if (result === "It's a draw"){
    draw = draw + 1
  }
  userscoreDisplay.innerHTML = userscore;
  compscoreDisplay.innerHTML = compscore;
  drawDisplay.innerHTML = draw
}