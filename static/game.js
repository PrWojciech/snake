// initGame();
//
// function initGame() {
//
//     // Your game can start here, but define separate functions, don't write everything in here :)
//
// }


let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

let snakeBody = [[0, 0]];
let snakeSize = 25
const snake = document.querySelector('.snake')


function increaseSize () {
    snakeSize += 25
    snake.style.height = snakeSize + 'px'
    console.log(snakeSize)
}

function updateSnakeSize() {
    let tailArray = snakeBody.shift()
    let tail = parseInt(tailArray[0] + '' + tailArray[1])
    let headArray = snakeBody[snakeBody.length - 1]
    let head = parseInt(headArray[0] + '' + headArray[1])
}



snake.addEventListener('click', increaseSize)


