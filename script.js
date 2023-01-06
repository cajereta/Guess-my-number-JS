'use strict';


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = message => {
   document.querySelector(".message").textContent = message;
};
const displayScore = score => {
   document.querySelector(".score").textContent = score;
}

document.querySelector(".again").addEventListener("click", function () {
   score = 20;
   displayScore(score);
   const newSecretNumber = Math.floor(Math.random() * 20) + 1;
   secretNumber = newSecretNumber;
   document.querySelector("body").style.backgroundColor = "";
   document.querySelector(".number").textContent = "?";
   document.querySelector(".number").style.width = "15rem";
   displayMessage("Start guessing...");
});

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);

   if (!guess) {
      displayMessage("No number! 🚫");

   } else if (guess === secretNumber) {
      displayMessage("Correct number! 🥳");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      if (score > highScore) {
         highScore = score
         document.querySelector(".highscore").textContent = highScore;

      }

   } else if (guess !== secretNumber) {
      if (score > 1) {
         displayMessage(guess > secretNumber ? "Too high! 💵" : "Too low! 😔");
         score--;
         displayScore(score);
      } else {
         displayMessage("You lost the game! 👎");
         displayScore(0);
      }
   }
});


