// Generate random numbers between 1 and 7:

// function rollDice(x) {
//     var die1Roll =  Math.floor(Math.random() * 6) + 1;
//     var die2Roll =  Math.floor(Math.random() * 6) + 1;
//     document.querySelectorAll(".dieValue")[0].innerText = die1Roll;
//     document.querySelectorAll(".dieValue")[1].innerText =  die2Roll;
//     document.querySelector("#total").innerText= (die2Roll + die1Roll);
// }

// document.querySelector("#die1").addEventListener("click", rollDice());

// var die1Roll =  Math.floor(Math.random() * 6) + 1;
// var die2Roll =  Math.floor(Math.random() * 6) + 1;

$("#rollDice").click(() => {
    var die1Roll =  Math.floor(Math.random() * 6) + 1;
    var die2Roll =  Math.floor(Math.random() * 6) + 1;
    $("#die1").text(die1Roll);
    $("#die2").text(die2Roll);
    $("#total").text(die1Roll+die2Roll);
    $("#rollDice").text("Try Again");
});

// $("rollDice").on("click", ()=> {
//     $("#die1").text(die1Roll);
//     $("#die2").text(die2Roll);
//     $("#total").text(die1Roll+die2Roll);
//     $("rollDice").text("Roll Dice");
// });