//Goal: Create a two player Tic-Tac-Toe game. The users should be able to 
//click to place their X or O and 
//if they win the program should mention their win in the DOM. 
//Please make the game as OOP as possible.  QUESTIONS ON AS OOP AS POSSIBLE
//Player 1 will be X
//anysquare player1 clicks will display X
//Player 2 will be O
//anysquare player2 clicks will display O


document.getElementById('0').addEventListener('click', function (e) {
    showXorO(e, 0);
}); 
document.getElementById('1').addEventListener('click', function (e) {
    showXorO(e, 1);
});
document.getElementById('2').addEventListener('click', function (e) {
    showXorO(e, 2);
});
document.getElementById('3').addEventListener('click', function (e) {
    showXorO(e, 3);
});
document.getElementById('4').addEventListener('click', function (e) {
    showXorO(e, 4);
});
document.getElementById('5').addEventListener('click', function (e) {
    showXorO(e, 5);
});
document.getElementById('6').addEventListener('click', function (e) {
    showXorO(e, 6);
});
document.getElementById('7').addEventListener('click', function (e) {
    showXorO(e, 7);
});
document.getElementById('8').addEventListener('click', function (e) {
    showXorO(e, 8);
});

 

let player1Score = 0
let player2Score = 0
let playerCounter = 0

let player1Arr = []
let player2Arr = []

function showXorO(xOro, id){
	if(playerCounter % 2 ===0){
      if(xOro.target.innerText === ""){
        xOro.target.innerText = 'X';
        player1Arr.push(id) 
        checkWhoWon()
        playerCounter++
      }
    } else if(xOro.target.innerText === ""){
        xOro.target.innerText = 'O';
        player2Arr.push(id) 
        checkWhoWon()
      playerCounter++
    }
	
}

let winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
// if any numbers in player arrays match any winningCombination arrays
let checkWhoWon = function () {
    for(let i = 0; i < winningCombinations.length; i++) {
        if(winningCombinations[i].every(r => player1Arr.includes(r))){  
          // location.reload() //check in VS Code
            document.getElementById('whoWon').innerText = "X Wins, Congratulations Player 1!";     
        } else if(winningCombinations[i].every(r => player2Arr.includes(r))){
            document.getElementById('whoWon').innerText = "O Wins, Congratulations Player 2!";   
        }else if(playerCounter === 8){
          document.getElementById('whoWon').innerText = "PLEASE TRY AGAIN"
        }
    }
}

document.querySelector('#restart').addEventListener('click', restartSlot)

function restartSlot(){
    window.location.reload()
}