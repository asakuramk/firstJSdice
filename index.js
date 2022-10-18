
var diceNum1 = Math.floor(Math.random() * 6) + 1;
var diceNum2 = Math.floor(Math.random() * 6) + 1;
if (diceNum1 > diceNum2) {
  document.querySelector("h1").innerText = "🚩 Play 1 Wins!";
} else if (diceNum1 < diceNum2) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerText = "引き分け！";
}

document.querySelectorAll("img")[0].setAttribute("src", "dice" + diceNum1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "dice" + diceNum2 + ".png");

