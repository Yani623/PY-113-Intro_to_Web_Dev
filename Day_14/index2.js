// Generate random numbers between 1 and 7:

let score1 = 0;
let score2 = 0; 

var turn = 0;
var lastTurn = 4;

function diceBattle(){
    if (turn < lastTurn){
        var player1 =  Math.floor(Math.random() * 6) + 1;
        var player2 =  Math.floor(Math.random() * 6) + 1;
        document.querySelectorAll(".dieValue")[0].innerText = player1;
        score1 += player1;
        document.querySelectorAll(".dieValue")[1].innerText =  player2;
        score2 += player2;
        document.querySelector(".score1").innerText = `Score = ${score1}`;
        document.querySelector(".score2").innerText = `Score = ${score2}`;
        turn++
        console.log(turn);
        return turn;
    }
    if (turn == lastTurn){
        if (score1 > score2){
            document.querySelector("#winner").innerText = "Player 1 is the Winner!"
            document.querySelector("#player1").innerText = "";
            document.querySelector("#player2").innerText = "";
            document.querySelector(".clickRoll").innerText = "Play Again!";
            turn++
            console.log(turn);
            return turn;
        }
        else if (score1  ==  score2) {
            document.querySelector("#winner").innerText = "It's a Tie!"
            document.querySelector("#player1").innerText = "";
            document.querySelector("#player2").innerText = "";
            document.querySelector(".clickRoll").innerText = "Play Again!";
            turn++
            console.log(turn);
            return turn;
        }
        else {
            document.querySelector("#winner").innerText = "Player 2 is the Winner!"
            document.querySelector("#player1").innerText = "";
            document.querySelector("#player2").innerText = "";
            document.querySelector(".clickRoll").innerText = "Play Again!";
            turn++
            console.log(turn);
            return turn;
        }
    }
    if (turn == (lastTurn + 1)) {
        document.querySelector("#winner").innerText = ""
        document.querySelector("#player1").innerText = "Player 1";
        document.querySelector("#player2").innerText = "Player 2";
        document.querySelector(".clickRoll").innerText = "Roll Dice!";
        document.querySelector("#die1").innerText = "";
        document.querySelector("#die2").innerText = "";
        score1 = 0;
        score2 = 0;
        document.querySelector(".score1").innerText = `Score = ${score1}`;
        document.querySelector(".score2").innerText = `Score = ${score2}`;
        turn++
    }
    if (turn == (lastTurn + 2)) {
        turn = 0;
    }

        
}




