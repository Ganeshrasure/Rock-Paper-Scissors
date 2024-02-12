let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreParagraph = document.querySelector("#userscore")
const compScoreParagraph = document.querySelector("#compscore")
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIDX = Math.floor(Math.random() * 3);
  return options[randIDX];
};
const drawGame = () => {
  console.log("Game was draw.");
  msg.innerText= "Game was Draw"
  msg.style.backgroundColor = "#081b31"
};
const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScoreParagraph.innerText = userScore;
    msg.innerText= `You Win! Your, ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"
  } else{
    compScore++;
    compScoreParagraph.innerText = compScore
   msg.innerText= `You Lost!  ${compChoice} beats Your ${userChoice}`;
   msg.style.backgroundColor = "red"
};
}
const playGame = (userChoice) => {
  console.log("USer Choice = ", userChoice);

  //Generate computer choice
  const compChoice = genCompChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice,compChoice);
  }
  
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
