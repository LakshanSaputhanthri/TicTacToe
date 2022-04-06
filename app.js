let count = 0;
let countt = 0;
class UI {
  static loadPage() {
    countt = 0;

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
                      <label>Player 1 </label><input type="text" id="player1" placeholder="Name Here" ></input>
                      <label>Player 2 </label><input type="text" id="player2" placeholder="Name Here" ></input>
                      <br>
                      <button type="SUBMIT" class="btn btn-success" id="tossbutton">Who is First</button>`;

    container.appendChild(div);

    const toss = document.getElementById("tossbutton");
    toss.addEventListener("click", tossf);
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
    human.addEventListener("click", (e) => UI.board(e, "human"));
    aiplayer.addEventListener("click", (e) => UI.board(e, "ai"));
  }
  static loadWinning(msg, clz) {
    const container = document.querySelector(".container");
    const div1 = document.createElement("div");
    container.innerHTML = "";
    let message = msg;
    let clas = clz;
    div1.innerHTML = message;
    div1.className = clz;
    container.appendChild(div);
    const div2 = document.createElement("div");
    container.appendChild(div2);
  }
  //reload page
  static reload() {
    window.location.reload(true);
  }
  static board(e, player) {
    console.log(player);
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
    const buttondiv = document.createElement("div");
    buttondiv.innerHTML = `<button type="button" class="btn btn-success btn-block align-center" id="playagain">Play Again</button>
    <br>
    <button type="button" class="btn btn-success btn-block align-center" id="home">HOME</button>`;
    con2.appendChild(buttondiv);
    const playagain = document.getElementById("playagain");
    playagain.addEventListener("click", (e) => UI.board(e, "custom"));
    const home = document.getElementById("home");
    home.addEventListener("click", UI.reload);
    if (player === "custom") {
      cellEventListner();
    }
    //celleventListner

    UI.scoreTable();
  }
  static scoreTable() {
    if (countt === 0) {
      const body = document.querySelector(".body");
      const container3 = document.createElement("div");
      container3.className = "container3";
      body.appendChild(container3);
      const table = document.createElement("table");
      table.className = "scoretable";
      table.id = "tableid";
      table.innerHTML = `<tbody id="mytbody"> <tr>
                        <th>${"player X"}</th>
                        <th>${"player O"}</th>
                      </tr></tbody>`;
      container3.appendChild(table);
      countt = countt + 1;
    }
  }
  static writeLetter(e) {
    checkWinner();
    if (count % 2 === 0) {
      const targetId = e.target.id;
      const cellID = document.getElementById(targetId);
      cellID.innerHTML = "O";
      count = count + 1;
      console.log(count);
      checkWinner();
    } else {
      const targetId = e.target.id;
      const cellID = document.getElementById(targetId);
      cellID.innerHTML = "X";
      checkWinner();
      count = count + 1;
    }
  }
  static writeLetterai(e) {
    checkWinner();
    console.log(e.target.id);
    const cellidd = e.target.id;
    document.getElementById(cellidd).innerHTML = "O";
    //console.log("jsgad");
    //cellidd = bestmove();
    document.getElementById(bestmove()).innerHTML = "X";
    checkWinner();
    count = count + 1;
  }
}

//function
function Custom() {}

//toss function
function tossf() {
  if (player1.value === "" || player2.value === "") {
    const winner = document.getElementById("tossbutton");
    winner.innerHTML = "Enter a Names";
  } else {
    let tos = [player1.value, player2.value];
    let tosswinner = Math.floor(Math.random() * 2);
    const winner = document.getElementById("tossbutton");
    winner.innerHTML = `${tos[tosswinner]}${"  Start Game"}`;
    console.log(tos[tosswinner]);
    UI.board("", "custom");
  }
}
//add each cell to eventlistner

function cellEventListner() {
  const cellElement = document.querySelectorAll("[datacell]");
  cellElement.forEach((squre) => {
    squre.addEventListener("click", (e) => UI.writeLetter(e, count), {
      once: true,
    });
  });
  count = count + 1;
}
//Event listner
document.addEventListener("DOMLoadEvent", UI.loadPage());
