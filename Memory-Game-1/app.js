const cardArray = [
  {
    name: 'cheeseburger',
    image: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    image: 'images/fries.png'
  },
  {
    name: 'hotdog',
    image: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    image: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    image: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    image: 'images/pizza.png'
  },
  {
    name: 'cheeseburger',
    image: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    image: 'images/fries.png'
  },
  {
    name: 'hotdog',
    image: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    image: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    image: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    image: 'images/pizza.png'
  },
]

cardArray.sort(() => 0.5 - Math.random());
const cardDisplay = document.querySelector('.grid')
let result = document.querySelector('#result')
let cardName = []
let cardId = []
let cardWon = 0

function board (){
  for (let i = 0; i < cardArray.length; i++) {
    const block = document.createElement('img')
    block.setAttribute('src', 'images/blank.png')
    block.setAttribute('data-id', i)
    block.addEventListener('click', flipCard)
    cardDisplay.appendChild(block)
    console.log(block)
  }
}

function checkboard() {
  const carding = document.querySelectorAll('.grid img')
  let optionOne = cardId[0];
  let optionTwo = cardId[1];
  
  if (optionOne == optionTwo){
    carding[optionOne].setAttribute('src', 'images/blank.png')
    carding[optionTwo].setAttribute('src', 'images/blank.png')
    alert('sorry Try again')
  }
  if (cardName[0] == cardName[1]) {
    carding[optionOne].setAttribute('src', 'images/white.png')
    carding[optionTwo].setAttribute('src', 'images/white.png')
    carding[optionOne].removeEventListener('click', flipCard)
    carding[optionTwo].removeEventListener('click', flipCard)
    cardWon = cardWon + 1
  } else {
    carding[optionOne].setAttribute('src', 'images/blank.png')
    carding[optionTwo].setAttribute('src', 'images/blank.png')
    alert('Try again')
  }
  result.textContent = cardWon
  cardName = []
  cardId = []

  if (cardWon === 6) {
    result.innerHTML = 'Congratulation You Found all the pairs'
  }
}

function flipCard (){
  const card = this.getAttribute('data-id')
  cardName.push(cardArray[card].name)
  cardId.push(card)
  this.setAttribute('src', cardArray[card].image)
  console.log(card, cardName)

  if (cardName.length == 2) {
    setTimeout(checkboard, 500)
  }
}

board()
console.log(cardArray)