let lastRenderTime = 0;
const snakeSpeed = 4;
let direction = {colX:0,colY:0}
let lastDirection = {colX:0,colY:0}
const gameBoard = document.querySelector('#game_board')
let snakeBody = [
    {colX: 10, colY: 11},
    {colX: 11, colY: 11},
    {colX: 12, colY: 11},
];
let newFruit = document.createElement('div')
newFruit.classList.add('fruit')
newFruit.style.gridColumnStart = 5;
newFruit.style.gridRowStart = 5;
drawSnake(gameBoard)
gameBoard.append(newFruit)
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);
window.addEventListener("keydown", e=>{
    if(e.key){
        initGame()
    }
})

function initGame() {
    setTime()
    drawSnake(gameBoard)
    window.requestAnimationFrame(main)

}


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


function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeDiv = document.createElement('div')
        snakeDiv.style.gridRowStart = segment.colY
        snakeDiv.style.gridColumnStart = segment.colX
        snakeDiv.classList.add('snake')
        gameBoard.appendChild(snakeDiv)
    })
}
function addFruit (){
    if(isFruitOnSnake() ) {
        let newFruit1 = document.createElement('div')
        newFruit1.classList.add('fruit')
        setFruitPosition(newFruit1)
        newFruit.style.gridRowStart = newFruit1.style.gridRowStart
        newFruit.style.gridColumnStart = newFruit1.style.gridColumnStart
        gameBoard.append(newFruit)
    }else{
        gameBoard.append(newFruit)
    }
}

function setFruitPosition (newFruit) {
    newFruit.style.gridColumnStart = Math.floor(Math.random() * 21)
    newFruit.style.gridRowStart = Math.floor(Math.random() * 21)
}

function isFruitOnSnake () {

    for (let i =0; i<snakeBody.length; i++) {
        if (snakeBody[i].colX == newFruit.style.gridColumnStart && snakeBody[i].colY == newFruit.style.gridRowStart) {
            return   true
        }
    }
}


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
