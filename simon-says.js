let cpu = [];
let player = [];

window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })
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
    const $colors = document.querySelectorAll("#button-color");
    const cpuColor = Math.floor(Math.random() * $colors.length);
    console.log(cpuColor);
    cpu.push(cpuColor);
    console.log(cpu);
    lightingCpuColor();
};

lightingCpuColor = () => {
    for (let i = 0; i < cpu.length; i++) {
        cpu[i].style.opacity = "1"
}
};

let color = setTimeout(lightingCpuColor, 2000);

lightingPlayerColor = () => {

};


// playerTurn = () => {
//     document.querySelectorAll("#button-color").forEach(function (box) {
//         box.onclick = function (event){
//             if (event.target.getAttribute(""))
//         }
//     }


