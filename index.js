
var diceNum1 = Math.floor(Math.random() * 6) + 1;
var diceNum2 = Math.floor(Math.random() * 6) + 1;
if (diceNum1 > diceNum2) {
  document.querySelector("h1").innerText = "1!";
} else if (diceNum1 < diceNum2) {
  document.querySelector("h1").innerText = "2";
} else {
  document.querySelector("h1").innerText = "d";
}

document.querySelectorAll("img")[0].setAttribute("src", "dice" + diceNum1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "dice" + diceNum2 + ".png");

