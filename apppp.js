let count = 0;
let countt = 0;
class UI {
  static reload() {
    window.location.reload(true);
  }
  static loadPage() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const div = document.createElement("div");
    div.className = "mt-5 d-grid  col-12";
    div.innerHTML = `
      <button type="button" class="btn btn-primary btn-block mt-5" id="twoPlayer">TWO PLAYER</button>
      <br>
      <button type="button" class="btn btn-primary  btn-block" id="withMachine"  >WITH MACHINE</button>`;
    container.appendChild(div);
    const twoPlayer = document.getElementById("twoPlayer");
    twoPlayer.addEventListener("click", UI.loadTwoPlayer);
    const withMachine = document.getElementById("withMachine");
    withMachine.addEventListener("click", UI.loadWithMachine);
  }
  static loadTwoPlayer() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const div = document.createElement("div");
    div.className = "mt-5 d-grid  col-12";
    div.innerHTML = `
                      <label>Player 1 </label><input type="text" id="playerX" placeholder="Name Here" ></input>
                      <label>Player 2 </label><input type="text" id="playerO" placeholder="Name Here" ></input>
                      <br>
                      <button type="SUBMIT" class="btn btn-success" id="play" onclick="getval();">Play</button>`;

    container.appendChild(div);
  }
  static loadWithMachine() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const div = document.createElement("div");
    div.className = "mt-5 d-grid  col-12";
    div.innerHTML = `
      <button type="button" class="btn btn-success btn-block mt-5" id="human">YOU FIRST</button>
      <br>
      <button type="button" class="btn btn-success  btn-block" id="aiplayer"  >MACHINE FIRST</button>`;
    container.appendChild(div);
    const human = document.getElementById("human");
    const aiplayer = document.getElementById("aiplayer");
    human.addEventListener("click", (e) => humanf(e, "human"));
    aiplayer.addEventListener("click", (e) => aif(e, "ai"));
  }
  static board(e, player) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const container2 = document.createElement("div");
    container2.className = "container2";
    container.appendChild(container2);
    const con2 = document.querySelector(".container2");
    const board = document.createElement("div");
    board.className = "board";
    con2.appendChild(board);

    for (let i = 0; i < 9; i++) {
      const datacell = document.createAttribute("data-cell");
      const board = document.querySelector(".board");
      let cell = document.createElement("div");
      cell.setAttribute("datacell", "");
      cell.id = `${"cell"}${i}`;
      cell.className = "squre";
      board.appendChild(cell);
    }
  }
  static scoreTable(playerx, playero) {
    if (countt === 0) {
      const body = document.querySelector(".body");
      const container3 = document.createElement("div");
      container3.className = "container3";
      body.appendChild(container3);
      const table = document.createElement("table");
      table.className = "scoretable";
      table.id = "tableid";
      table.innerHTML = `<tbody id="mytbody"> <tr>
                        <th>${playerx}</th>
                        <th>${playero}</th>
                      </tr></tbody>`;
      container3.appendChild(table);
      countt = countt + 1;
    }
  }
  //Two player writw x or O
  static writeLetter(e) {
    checkWinner();
    if (count % 2 === 0) {
      const targetId = e.target.id;
      const cellID = document.getElementById(targetId);
      cellID.innerHTML = "O";
      count = count + 1;
      checkWinner();
    } else {
      const targetId = e.target.id;
      const cellID = document.getElementById(targetId);
      cellID.innerHTML = "X";
      checkWinner();
      count = count + 1;
    }
  }
  //Human first with machine
  static writeLetterai(e) {
    checkWinner();
    console.log("asd");
    if (count % 2 === 0) {
      const targetId = e.target.id;
      const cellIDD = document.getElementById(targetId);
      cellIDD.innerHTML = "X";
      const idi = bestmove();
      checkWinner();
      const cellID = document.getElementById(idi);
      cellID.innerHTML = "O";
      checkWinner();
      count = count + 2;
    }
  }
}

function custom(playerx, playero) {
  UI.board();
  loadButton("custom");
  UI.scoreTable(playerx, playero);
  cellEventListner();
}
function humanf(e, namef) {
  const functionName = namef;

  UI.board();
  loadButton("human");
  cellEventListnerai();
  UI.scoreTable("Player", "Machine");
}
function aif(e, namef) {
  UI.board();
  loadButton("ai");
  UI.scoreTable("Player", "Machine");
  checkWinner();
  const idi = bestmove();
  const cellID = document.getElementById(idi);
  cellID.innerHTML = "O";
  cellEventListnerai();
}
function loadButton(fname) {
  if (fname === "custom") {
    buttoncreat("playagain", "custom");
  } else if (fname === "human") {
    buttoncreat("playagain", "human");
  } else if (fname === "ai") {
    buttoncreat("playagain", "ai");
  }
}
function buttoncreat(buttonvalue, idvalue) {
  console.log(idvalue);
  const con2 = document.querySelector(".container2");
  const buttondiv = document.createElement("div");
  buttondiv.innerHTML = `<button type="button" class="btn btn-success btn-block align-center" id="playagain">${buttonvalue}</button>
  <br>
  <button type="button" class="btn btn-success btn-block align-center" id="home">HOME</button>`;
  con2.appendChild(buttondiv);
  const playagain = document.getElementById("playagain");
  if (idvalue === "custom") {
    playagain.addEventListener("click", (e) => custom(e, "custom"));
  } else if (idvalue === "human") {
    playagain.addEventListener("click", (e) => humanf(e, "human"));
  } else if (idvalue === "ai") {
    playagain.addEventListener("click", (e) => aif(e, "ai"));
  }
  const home = document.getElementById("home");
  home.addEventListener("click", UI.reload);
}

function cellEventListner() {
  const cellElement = document.querySelectorAll("[datacell]");
  cellElement.forEach((squre) => {
    squre.addEventListener("click", (e) => UI.writeLetter(e, count), {
      once: true,
    });
  });
  count = count + 1;
}
function cellEventListnerai() {
  const cellElement = document.querySelectorAll("[datacell]");
  cellElement.forEach((squre) => {
    squre.addEventListener("click", (e) => UI.writeLetterai(e, count), {
      once: true,
    });
  });
}
function getval() {
  const playerx = document.getElementById("playerX").value;
  const playero = document.getElementById("playerO").value;

  if (playerx != "" && playero != "") {
    custom(playerx, playero);
  } else {
    alert("Enter Valid Name");
  }

  //const play = document.getElementById("play");
  //play.addEventListener("click", (e) => custom(e, "custom"));
}
document.addEventListener("DOMLoadEvent", UI.loadPage());
