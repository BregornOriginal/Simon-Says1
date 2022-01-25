let cpu = [];
let player = [];


const colors = ["blue", "red", "yellow", "green"];

document.querySelector("#start-button").onclick = () => {
    startGame();
};

startGame = () => {
    reset();
    handlerGame();
}

reset = () => {
    cpu = [];
    player = [];
}


handlerGame = () => {
    document.querySelector("#cpu-turn").style.display = "flex";
    const cpuColor = Math.floor(Math.random() * colors.length);
    cpu.push(cpuColor);
    // lightingCpuColor();
    turnPlayer();
};

// lightingCpuColor = () => {
//     for (let i = 0; i < cpu.length; i++) {
//         cpu[i].style.opacity = "1"
// }
// };

function turnPlayer() {
    document.querySelectorAll("#button-color").forEach(function (color) {
        color.onclick = function (event) {
            if (event.target.getAttribute("name") === "blue") {
                player.push(0);
            } else if (event.target.getAttribute("name") === "red") {
                player.push(1);
            } else if (event.target.getAttribute("name") === "yellow") {
                player.push(2);
            } else if (event.target.getAttribute("name") === "green") {
                player.push(3);
            }
    }
});
};


// playerTurn = () => {
//     document.querySelectorAll("#button-color").forEach(function (box) {
//         box.onclick = function (event){
//             if (event.target.getAttribute(""))
//         }
//     }


