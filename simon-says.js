let cpu = [];
let player = [];

const colors = ["blue", "red", "yellow", "green"];

document.querySelector("#start-button").onclick = () => {
  startGame();
};

const startGame = () => {
  handlerGame();
};

const resetGame = () => {
  cpu = [];
  player = [];
};

const turnCpu = () => {
  cpuColor = colors[Math.floor(Math.random() * colors.length)];
  cpu.push(cpuColor);
};

const handlerGame = () => {
  validateSecuenceOfPlayer(player, cpu);
  document.querySelector("#cpu-turn").style.display = "flex";
  turnCpu();
  turnPlayer();
};

function turnPlayer() {
  document.querySelectorAll("#button-color").forEach(function (color) {
    color.onclick = function (event) {
      if (event.target.getAttribute("name") === "blue") {
        player.push("blue");
      } else if (event.target.getAttribute("name") === "red") {
        player.push("red");
      } else if (event.target.getAttribute("name") === "yellow") {
        player.push("yellow");
      } else if (event.target.getAttribute("name") === "green") {
        player.push("green");
      }
    }
  });
};

function validateSecuenceOfPlayer(player, cpu) {
  for (let i = 0; i < player.length; i++) {
    const element = player[i];
    if (element !== cpu[i]) {
      return console.log("lost");
    }
  }
};
