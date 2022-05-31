initGame();

function initGame() {
    addFruit()
    // Your game can start here, but define separate functions, don't write everything in here :)

}


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


let snakeSize = 25

let move = 25;
const snake = document.querySelector('.snake')
snake.style.left = 0;
snake.style.top = 0;

function increaseSize () {
    snakeSize += 25
    snake.style.height = snakeSize + 'px'
    console.log(snakeSize)
}


snake.addEventListener('click', increaseSize)
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

function addFruit (){
    const board = document.querySelector('#game_board')
    const newFruit = document.createElement('div')
    newFruit.classList.add('fruit')
    board.append(newFruit)

}