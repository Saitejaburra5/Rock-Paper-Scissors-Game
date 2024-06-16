let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScoreP = document.querySelector("#user-score");
let compScoreP = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const gameDraw = () => {
  msg.innerText = "Game is drawn. Play again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScoreP.innerText = userScore;
    msg.innerText = `Won! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreP.innerText = compScore;
    msg.innerText = `Lost! ${CompChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const gameplay = (userChoice) => {
  let CompChoice = genCompChoice();
  if (userChoice === CompChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    gameplay(userChoice);
  });
});

newGame.addEventListener("click", () => {
  userScore = 0;
  userScoreP.innerText = userScore;
  compScore = 0;
  compScoreP.innerText = compScore;
  msg.innerText = "Play your move";
});
