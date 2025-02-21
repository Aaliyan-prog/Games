const gridDisplay = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

class block {
  constructor(xaxis, yaxis){
    this.bottomLeft = [xaxis, yaxis]
    this.botomRight = [xaxis + blockWidth, yaxis]
    //this.topLeft = [xaxis, yaxis + blockHeight]
    //this.topRight = [xaxis + blockWidth, yaxis + blockHeight]
  }
}

const Blocks = [
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

function addBlock () {
  for(let i = 0; i < Blocks.length; i++){
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = Blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = Blocks[i].botomRight[1] + 'px'
    gridDisplay.appendChild(block)
  }
}
addBlock()