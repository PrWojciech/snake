// initGame();
//
// function initGame() {
//
//     // Your game can start here, but define separate functions, don't write everything in here :)
//
// }

document.onkeydown = keyPress

const snakeSpeed = 1
let snakeBody = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0}



]
let snakeSize = 25

const snake = document.querySelector('.snake')


function keyPress(e) {
    e.preventDefault();
    e = e || window.event;

    // Game pause on escape btn
    if (e.keyCode == 27){
        console.log('Pause')
    }

    // Game start on enter btn
    if (e.keyCode == 13){
        console.log('start')
    }
}


function increaseSize () {
    snakeSize += 25
    snake.style.height = snakeSize + 'px'
    console.log(snakeSize)
}

function draw() {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
    })
}

snake.addEventListener('click', increaseSize)