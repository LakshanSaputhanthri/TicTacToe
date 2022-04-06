function message(msg, clz, winArray, chr) {
  const message = msg;
  const clzz = clz;
  const war = winArray;
  const con2 = document.querySelector(".container2");
  const div = document.createElement("div");
  div.className = clzz;
  div.innerHTML = message;
  con2.appendChild(div);
  if (chr === 1) {
    console.log(typeof chr);
    const scoretable = document.getElementById("mytbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>"Win"</td>
                <td>Loss</td>`;
    scoretable.appendChild(tr);
    for (let j = 0; j < 9; j++) {}
  } else if (chr === 0) {
    console.log(typeof chr);
    const scoretable = document.getElementById("mytbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>Loss</td>
                <td>Win</td>`;
    scoretable.appendChild(tr);
  } else if (chr === 3) {
    const scoretable = document.getElementById("mytbody");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>"draw"</td>
                <td>"draw"</td>`;
    scoretable.appendChild(tr);
  }
  for (let i = 0; i < 3; i++) {
    document.getElementById(war[i]).classList.add("win");
  }
}

function checkWinner() {
  const cellID = document.querySelectorAll("[datacell]");
  const board = document.querySelector(".board");
  const cellIdArray = [];
  const cellValueArray = [];
  const winArray = [];
  cellID.forEach((squre) => {
    cellIdArray.push(squre.id);
  });
  for (let j = 0; j < 9; j++) {
    cellValueArray.push(document.getElementById(cellIdArray[j]).innerHTML);
  }

  if (
    cellValueArray[0].toString() === "X" &&
    cellValueArray[1].toString() === "X" &&
    cellValueArray[2].toString() === "X"
  ) {
    winArray.push(cellIdArray[0]);
    winArray.push(cellIdArray[1]);
    winArray.push(cellIdArray[2]);
    message("Player'X is Winner", "winner", winArray, 1);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[0].toString() === "O" &&
    cellValueArray[1].toString() === "O" &&
    cellValueArray[2].toString() === "O"
  ) {
    winArray.push(cellIdArray[0]);
    winArray.push(cellIdArray[1]);
    winArray.push(cellIdArray[2]);
    message("Player'O is Winner", "winner", winArray, 0);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[3].toString() === "X" &&
    cellValueArray[4].toString() === "X" &&
    cellValueArray[5].toString() === "X"
  ) {
    winArray.push(cellIdArray[3]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[5]);
    message("Player'X is Winner", "winner", winArray, 1);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[3].toString() === "O" &&
    cellValueArray[4].toString() === "O" &&
    cellValueArray[5].toString() === "O"
  ) {
    winArray.push(cellIdArray[3]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[5]);
    message("Player'O is Winner", "winner", winArray, 0);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[6].toString() === "X" &&
    cellValueArray[7].toString() === "X" &&
    cellValueArray[8].toString() === "X"
  ) {
    winArray.push(cellIdArray[6]);
    winArray.push(cellIdArray[7]);
    winArray.push(cellIdArray[8]);
    message("Player'X is Winner", "winner", winArray, 1);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[6].toString() === "O" &&
    cellValueArray[7].toString() === "O" &&
    cellValueArray[8].toString() === "O"
  ) {
    winArray.push(cellIdArray[6]);
    winArray.push(cellIdArray[7]);
    winArray.push(cellIdArray[8]);
    message("Player'O is Winner", "winner", winArray, 0);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  //Vertical check
  if (
    cellValueArray[0].toString() === "X" &&
    cellValueArray[3].toString() === "X" &&
    cellValueArray[6].toString() === "X"
  ) {
    winArray.push(cellIdArray[0]);
    winArray.push(cellIdArray[3]);
    winArray.push(cellIdArray[6]);
    message("Player'X is Winner", "winner", winArray, 1);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[0].toString() === "O" &&
    cellValueArray[3].toString() === "O" &&
    cellValueArray[6].toString() === "O"
  ) {
    winArray.push(cellIdArray[0]);
    winArray.push(cellIdArray[3]);
    winArray.push(cellIdArray[6]);
    message("Player'O is Winner", "winner", winArray, 0);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[1].toString() === "X" &&
    cellValueArray[4].toString() === "X" &&
    cellValueArray[7].toString() === "X"
  ) {
    winArray.push(cellIdArray[1]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[7]);
    message("Player'X is Winner", "winner", winArray, 1);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[1].toString() === "O" &&
    cellValueArray[4].toString() === "O" &&
    cellValueArray[7].toString() === "O"
  ) {
    winArray.push(cellIdArray[1]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[7]);
    message("Player'O is Winner", "winner", winArray, 0);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[2].toString() === "X" &&
    cellValueArray[5].toString() === "X" &&
    cellValueArray[8].toString() === "X"
  ) {
    winArray.push(cellIdArray[2]);
    winArray.push(cellIdArray[5]);
    winArray.push(cellIdArray[8]);
    message("Player'X is Winner", "winner", winArray, 1);
    ////console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[2].toString() === "O" &&
    cellValueArray[5].toString() === "O" &&
    cellValueArray[8].toString() === "O"
  ) {
    winArray.push(cellIdArray[2]);
    winArray.push(cellIdArray[5]);
    winArray.push(cellIdArray[8]);
    message("Player'O is Winner", "winner", winArray, 0);
    //console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  //check diaoganal
  if (
    cellValueArray[0].toString() === "X" &&
    cellValueArray[4].toString() === "X" &&
    cellValueArray[8].toString() === "X"
  ) {
    winArray.push(cellIdArray[0]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[8]);
    message("Player'X is Winner", "winner", winArray, 1);
    //console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[0].toString() === "O" &&
    cellValueArray[4].toString() === "O" &&
    cellValueArray[8].toString() === "O"
  ) {
    winArray.push(cellIdArray[0]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[8]);
    message("Player'O is Winner", "winner", winArray, 0);
    //console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[2].toString() === "X" &&
    cellValueArray[4].toString() === "X" &&
    cellValueArray[6].toString() === "X"
  ) {
    winArray.push(cellIdArray[2]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[6]);
    message("Player'X is Winner", "winner", winArray, 1);
    //console.log("winArray", winArray);
    //setTimeout(hidden, 3000);
  }
  if (
    cellValueArray[2].toString() === "O" &&
    cellValueArray[4].toString() === "O" &&
    cellValueArray[6].toString() === "O"
  ) {
    winArray.push(cellIdArray[2]);
    winArray.push(cellIdArray[4]);
    winArray.push(cellIdArray[6]);
    message("Player'O is Winner", "winner", winArray, 0);

    //setTimeout(hidden, 3000);
  } else {
    //console.log(cellValueArray);
    for (let k = 0; k < 9; k++) {
      if (cellValueArray[k] === "") {
        return false;
      }
    }
  }
}
