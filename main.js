const squares = document.querySelectorAll("[data-function='square']");
const score = document.querySelector("[data-function='score']");
const timer = document.querySelector("[data-function='time-left']");
const startBtn = document.querySelector("button");
const finalScore = document.querySelector(".finalScore");
const gameOver = document.querySelector(".gameOver");

let points = 0;
let secondsLeft = 30;

for (let i = 0; i < squares.length; i++) {
  squares[i].setAttribute("id", i);
}

const showDigglet = () => {
  let randomSquare = Math.floor(Math.random() * squares.length);

  for (const square of squares) {
    if (square.id == randomSquare) {
      square.addEventListener("click", countPoints);
      square.classList.add("b-mole");

      setTimeout(() => {
        square.classList.remove("b-mole");
        square.removeEventListener("click", countPoints);
      }, 500);
    }
  }
};

const showModal = () => {
  modal.style.display = "block";

  if (points >= 20) {
    gameOver.innerHTML = "More than 20 points!You rock! Good game";
  } else {
    gameOver.innerHTML = " Less than 20 points! You need to practice more!";
  }

  finalScore.innerHTML = points;
  startBtn.addEventListener("click", startGame);
};

const startGame = () => {
  points = 0;
  secondsLeft = 30;
  score.innerHTML = points;
  startBtn.removeEventListener("click", startGame);
  setNumbersOfMoves();
  setTimer();
  console.log("me han clickado")
  console.log(points)
};

const setTimer = () => {
  let y = 1;
  let timerCountDown = setInterval(() => {
    secondsLeft = secondsLeft - 1;
    timer.innerHTML = secondsLeft;

    if (y === 30) {
      clearInterval(timerCountDown);
      secondsLeft = 00;
    }
    y++;
  }, 1000);
};

const setNumbersOfMoves = () => {
let i = 0
  let id = setInterval(() => {
    showDigglet();
    if (i == 49) {
      clearInterval(id);
      showModal();
    }
    i++;
  }, 600);
};

const countPoints = () => {
  points++;
  score.innerHTML = points;
};

startBtn.addEventListener("click", startGame);

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
