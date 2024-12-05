
var audio1 = new Audio('1.mp3');
var audio2 = new Audio('2.mp3');
var vict = new Audio('victory.mp3');

const boxes = document.querySelectorAll(".box")
const message = document.querySelector(".msg")
const reset = document.querySelector(".rst")
const newG = document.querySelector(".newGame")


message.innerHTML = "Player X Chance"
playerX = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener('click' ,()=> {
        if (playerX!=false) {
            message.innerHTML = "Player O Chance"
            audio1.play();
            box.innerHTML = "X";
            playerX = false;

        } else {
            message.innerHTML = "Player X Chance"
            audio2.play();
            box.innerHTML = "O";
            playerX = true;
        }
        box.disabled = true;
        box.style.color = "white";
        checkwinner();

    });
});
function resetGame(){
    playerX = true;
    enableButtons();
    
}

function disableButtons (){
    boxes.forEach(box => {
        box.disabled = true;
    });
}
function enableButtons (){
    boxes.forEach(box => {
        box.disabled = false;
        box.innerHTML= "";
        box.style.backgroundColor = "";
        message.innerHTML = "Player X Chance";
    });
}


function checkwinner(){
    for (let patterns of winningConditions) {
        let value0 = boxes[patterns[0]].innerHTML;
        let value1 = boxes[patterns[1]].innerHTML;
        let value2 = boxes[patterns[2]].innerHTML;

        if(value0!="" && value1!="" && value2!="" ){
            if(value0 == value1 && value1 == value2){
                boxes[patterns[0]].style.backgroundColor = "green";
                boxes[patterns[1]].style.backgroundColor = "green";
                boxes[patterns[2]].style.backgroundColor = "green";
                vict.play();
                 message.innerHTML = `Player ${value0} Wins`
                 disableButtons();

            }
        }
    }
}

reset.addEventListener('click' ,()=>{
    resetGame();
})
newG.addEventListener('click' ,()=>{
    resetGame();
})