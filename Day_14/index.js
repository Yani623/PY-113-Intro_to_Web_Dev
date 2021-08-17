// Generate random numbers between 1 and 7:

function rollDice(x) {
    var die1Roll =  Math.floor(Math.random() * 6) + 1;
    var die2Roll =  Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll(".dieValue")[0].innerText = die1Roll;
    document.querySelectorAll(".dieValue")[1].innerText =  die2Roll;
    document.querySelector("#total").innerText= (die2Roll + die1Roll);
}

// document.querySelector("#die1").addEventListener("click", rollDice());