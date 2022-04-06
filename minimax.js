let scores = {
  X: -1,
  O: 1,
  tie: 0,
};
let boardMap = ["", "", "", "", "", "", "", "", ""];
function bestmove() {
  let maxscore = -1;
  let maxscorecell = -1;
  console.log("GGG");
  ////console.log("kk");
  let k = 0;
  for (let i = 0; i < 9; i++) {
    {
      boardMap[i] = document.getElementById(`${"cell"}${i}`).innerHTML;
    }
    console.log(boardMap, "before");
  }
  for (let i = 0; i < 9; i++) {
    {
      if (boardMap[i] === "") {
        boardMap[i] = "O";
        let score = minimax(boardMap, 0, false);
        if (score >= maxscore) {
          maxscore = score;
          maxscorecell = i;
        }
        //console.log(score, i);
        boardMap[i] = "";
      }
    }
  }
  console.log(maxscorecell, "a", maxscore);

  return `${"cell"}${maxscorecell}`;
}
function minimax(boardMap, depth, isMaximizing) {
  if (isAllFill(boardMap)) {
    return 0;
  }
  let result = checkWinneR();

  if (result) {
    //console.log(scores[result], boardMap);
    return scores[result];
  }
  if (isMaximizing) {
    let bestScore = -1;
    for (let i = 0; i < 9; i++) {
      {
        // Is the spot available?
        if (boardMap[i] === "") {
          boardMap[i] = "O";
          ////console.log(boardMap, "MAX");
          let score = minimax(boardMap, depth + 1, false);
          boardMap[i] = "";
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = 1;
    for (let i = 0; i < 9; i++) {
      {
        // Is the spot available?
        if (boardMap[i] === "") {
          boardMap[i] = "X";
          ////console.log(boardMap, "MIN");
          let score = minimax(boardMap, depth + 1, true);
          boardMap[i] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    ////console.log(i);
    return bestScore;
  }
}
function checkWinneR() {
  if (checkIf("X")) {
    return "X";
  }
  if (checkIf("O")) {
    return "O";
  }
}
function checkIf(x) {
  return (
    (boardMap[0] === x && boardMap[1] === x && boardMap[2] === x) ||
    (boardMap[3] === x && boardMap[4] === x && boardMap[5] === x) ||
    (boardMap[6] === x && boardMap[7] === x && boardMap[8] === x) ||
    (boardMap[0] === x && boardMap[3] === x && boardMap[6] === x) ||
    (boardMap[1] === x && boardMap[4] === x && boardMap[7] === x) ||
    (boardMap[2] === x && boardMap[5] === x && boardMap[8] === x) ||
    (boardMap[0] === x && boardMap[4] === x && boardMap[8] === x) ||
    (boardMap[2] === x && boardMap[4] === x && boardMap[6] === x)
  );
}
function isAllFill(boardMap) {
  for (let i = 0; i < 9; i++) {
    if (boardMap[i] === "") {
      return false;
    }
  }
  return true;
}
