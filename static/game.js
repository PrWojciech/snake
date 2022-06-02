let lastRenderTime = 0;
const snakeSpeed = 2;
let life = 1;
let score =0;
let direction = {colX:0,colY:0}
let lastDirection = {colX:0,colY:0}
const gameBoard = document.querySelector('#game_board')
let scoreDiv = document.querySelector('#Score')
let snakeBody = [
    {colX: 10, colY: 11},
    {colX: 11, colY: 11},
    {colX: 12, colY: 11},{colX: 13, colY: 11},{colX: 14, colY: 11},{colX: 15, colY: 11},{colX: 16, colY: 11},{colX: 17, colY: 11},
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
    window.requestAnimationFrame(main)




}

function getScore(){
    score += 10
    scoreDiv.innerText = `Score: ${score}`
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
            getScore()
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
    if(life == 0){
        openPopup()
        gameBoard.innerHTML=''
        return;
    }
    gameBoard.innerHTML=''
    addFruit()
    drawSnake(gameBoard)

 }
function openPopup(){
    let popout = document.getElementById("popout")
    let endscore = document.querySelector('#endScore')
    endscore.textContent = `Score: ${score}`
    popout.classList.add("open-popout")
}
function closePopup(){
    let popout = document.getElementById("popout")
    window.location.replace("http://localhost:63342/freestyle-javascript-game-javascript-KZwolski/main.html?_ijt=cno9d4olqapdq3b2cdfvdfo4tu")
    popout.classList.remove("open-popout")


}
 function isWallHit(){
    if((snakeBody[0].colX >20 || snakeBody[0].colX<0)||(snakeBody[0].colY >20 || snakeBody[0].colY<0)) {
        return true
    }

}
function isSnakeHit(){
    for(let i=1; i<snakeBody.length;i++){
        if(snakeBody[0].colX == snakeBody[i].colX && snakeBody[0].colY==snakeBody[i].colY)
            return true
    }
}
function colisionDetector(){
    if (isWallHit() || isSnakeHit()){
        life = 0;
    }
}

 function update(){
    for (let i =snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
   snakeBody[0].colX +=direction.colX
   snakeBody[0].colY +=direction.colY
   colisionDetector()
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