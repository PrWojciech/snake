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

const gameBoard = document.querySelector('#game_board')
let snakeBody = [
    {colX: 10, colY: 11},
    {colX: 11, colY: 11},

];

function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeDiv = document.createElement('div')
        snakeDiv.style.gridRowStart = segment.colX
        snakeDiv.style.gridColumnStart = segment.colY
        snakeDiv.classList.add('snake')
        gameBoard.appendChild(snakeDiv)
    })
}

drawSnake(gameBoard)


window.addEventListener("keyup", e=>{
    movement(e.key)
})

function movement (e){
    {

   switch (e.toLowerCase()){
       case "a":
           snake.style.left = parseInt(snake.style.left) - move + 'px';
           // console.log(parseInt(window.getComputedStyle(snake).getPropertyValue("Left")))
           break
       case "d":
           snake.style.left = parseInt(snake.style.left) + move + 'px';
           // console.log(parseInt(window.getComputedStyle(snake).getPropertyValue("Left")))
           break
       case "w":
            snake.style.top = parseInt(snake.style.top) - move + 'px';
            // console.log(parseInt(window.getComputedStyle(snake).getPropertyValue("top")))
           break
       case "s":
            snake.style.top = parseInt(snake.style.top) + move + 'px';
            // console.log(parseInt(window.getComputedStyle(snake).getPropertyValue("top")))
           break
   }

}



}