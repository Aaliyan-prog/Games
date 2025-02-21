const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

const cardArray = [
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
]

let cardChosen = []
let cardChosenId = []
const cardWon = []

cardArray.sort(() => 0.5 - Math.random());

function board () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', cardflip)
    gridDisplay.appendChild(card)
  }
}

function checkmatch () {
  const cardimg = document.querySelectorAll('#grid img')
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];

  if (optionOneId == optionTwoId) {
    cardimg[optionOneId].setAttribute('src', 'images/blank.png')
    cardimg[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have click the same img')
  }
  if (cardChosen[0] == cardChosen[1]) {
    cardimg[optionOneId].setAttribute('src', 'images/white.png')
    cardimg[optionTwoId].setAttribute('src', 'images/white.png')
    cardimg[optionOneId].removeEventListener('click', cardflip)
    cardimg[optionTwoId].removeEventListener('click', cardflip)
  } else {
    cardimg[optionOneId].setAttribute('src', 'images/blank.png')
    cardimg[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('sorry Try again')
  }
  resultDisplay.textContent = cardWon.lenght
  cardChosen = [];
  cardChosenId = [];

  if (cardWon.length == cardArray.lenght/2){
    resultDisplay.innerHTML = 'congratulation You found them all'
  }
}

function cardflip () {
  const cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length == 2){
    setTimeout(checkmatch, 500)
  }
}

board()