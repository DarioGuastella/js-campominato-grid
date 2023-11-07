// Creo la griglia con N celle nel container

let numCelle = 100;
let grid = document.getElementById("container");

for (let i = 1; i <= numCelle; i++) {
    const cella = document.createElement("div");
    cella.innerHTML = i;
    cella.classList.add("square");
    grid.appendChild(cella);
}