alert("Welcome to our site")
var randomNum1 = Math.floor(Math.random() * 6 ) + 1;
var randomNum2 = Math.floor(Math.random() * 6 ) + 1;

var dice1Location = "../assets/dices/dice" + randomNum1 + ".png"
var dice2Location = "../assets/dices/dice" + randomNum2 + ".png"


var dice1 = document.getElementById("dice1")
dice1.setAttribute("src", dice1Location)

var dice2 = document.getElementById("dice2")
dice2.setAttribute("src", dice2Location)

if (randomNum1 > randomNum2) {
    document.querySelector('h1').innerHTML = "Player 1 Won"
}

else if (randomNum1 < randomNum2) {
    document.querySelector('h1').innerHTML = "Player 2 Won"
}

else {
    document.querySelector('h1').innerHTML = "Draw"
}