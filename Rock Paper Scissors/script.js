
let scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"));

if (scoreBoard == null) {
  scoreBoard = {
    Wins: 0,
    Loses: 0,
    Ties: 0,
  };
}
updatescore()
function playgame(playermove) {
  const computermove = pickcompmove();
  let Result = "";
  if (playermove === "Rock") {
    if (computermove === "Rock") {
      Result = "Tie";
    } else if (computermove === "Paper") {
      Result = "You Lose";
    } else {
      Result = "You Win";
    }
  } else if (playermove === "Paper") {
    if (computermove === "Rock") {
      Result = "You Win";
    } else if (computermove === "Paper") {
      Result = "Tie";
    } else {
      Result = "You Lose";
    }
  } else if (playermove === "Scissors") {
    if (computermove === "Rock") {
      Result = "You Lose";
    } else if (computermove === "Paper") {
      Result = "You Win";
    } else {
      Result = "Tie";
    }
  }
  if (Result === "You Win") {
    scoreBoard.Wins++;
  } else if (Result === "You Lose") {
    scoreBoard.Loses++;
  } else if (Result === "Tie") {
    scoreBoard.Ties++;
  }
  localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
  updatescore();
  document.querySelector('.result').innerHTML=Result;
  document.querySelector('.moves')
.innerHTML=`You picked ${playermove} and computer picked ${computermove}.`;
}

function pickcompmove() {
  const randomnum = Math.random();
  let computermove;

  if (randomnum < 1 / 3) {
    computermove = "Rock";
  } else if (randomnum < 2 / 3) {
    computermove = "Paper";
  } else {
    computermove = "Scissors";
  }
  return computermove;
}

function updatescore(){
document.querySelector('.Score').
innerHTML=`Total Wins : ${scoreBoard.Wins} Total loses : ${scoreBoard.Loses} Total Ties : ${scoreBoard.Ties}`;
} 



