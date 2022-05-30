// initGame();
//
// function initGame() {
//
//     // Your game can start here, but define separate functions, don't write everything in here :)
//
// }

// document.onkeydown = keyPress

let snakeSize = 25
const snake = document.querySelector('.snake')


function increaseSize () {
    snakeSize += 25
    snake.style.height = snakeSize + 'px'
    console.log(snakeSize)
}


snake.addEventListener('click', increaseSize)