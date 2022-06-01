initGame();

function initGame() {

    // Your game can start here, but define separate functions, don't write everything in here :)

}
const board = document.querySelector('#game_board')
let newFruit = document.createElement('div')
newFruit.classList.add('fruit')
newFruit.style.gridColumnStart = 5;
newFruit.style.gridRowStart = 5;

board.append(newFruit)
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt((totalSeconds) / 60));
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


];

function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeDiv = document.createElement('div')
        snakeDiv.style.gridRowStart = segment.colY
        snakeDiv.style.gridColumnStart = segment.colX
        snakeDiv.classList.add('snake')
        gameBoard.appendChild(snakeDiv)
    })
}

drawSnake(gameBoard)







function addFruit (){
    console.log("--------------------------------")
    if(snakeBody[0].colX == newFruit.style.gridColumnStart && snakeBody[0].colY == newFruit.style.gridRowStart) {
        let newFruit = document.createElement('div')
        newFruit.classList.add('fruit')
        setFruitPosition(newFruit)
        console.log("HEHE")
        board.append(newFruit)
    }else{
        board.append(newFruit)

    }
    console.log(snakeBody[0].colX)
    console.log(snakeBody[0].colY)
    console.log(newFruit.style.gridColumnStart)
    console.log(newFruit.style.gridRowStart)
}

function setFruitPosition (newFruit) {
    newFruit.style.gridColumnStart = Math.floor(Math.random() * 21)
    newFruit.style.gridRowStart = Math.floor(Math.random() * 21)
}

function isFruitOnSnake (fruitPos) {
    const snake = document.querySelectorAll('.snake')

    for (let snakePos of snake) {
        console.log(snakePos.style.gridRowStart)
        if (snakePos.style.gridRowStart === fruitPos.style.gridRowStart && snakePos.style.gridColumnStart === fruitPos.style.gridColumnStart) {
            console.log("du")
            return   true
        }
    }
}



let lastRenderTime = 0;
const snakeSpeed = 2;
let direction = {colX:0,colY:0}
let lastDirection = {colX:0,colY:0}

function main (currentTime){
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender< 1 /snakeSpeed) return

    lastRenderTime=currentTime
    update()
    gameBoard.innerHTML=''

    addFruit()

    drawSnake(gameBoard)

 }
window.requestAnimationFrame(main)




function update(){
    for (let i =snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
   snakeBody[0].colX +=direction.colX
   snakeBody[0].colY +=direction.colY
   lastDirection = direction

}
window.addEventListener("keydown", e=>{
  switch (e.key.toLowerCase()){
       case "a":
            if(lastDirection.colX !==0) break

           direction = {colX: -1,colY: 0}
           break
       case "d":
           if(lastDirection.colX !==0)break
           direction = {colX: 1,colY: 0}
           break
       case "w":
           if(lastDirection.colY !==0)break
           direction = {colX: 0,colY: -1}
           break
       case "s":
           if(lastDirection.colY !==0)break
            direction = {colX: 0,colY: 1}
           break
   }
})