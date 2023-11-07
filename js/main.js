// Creo la griglia con N celle nel container

let numCelle = 100;
let grid = document.getElementById("container");

for (let i = 1; i <= numCelle.length; i++) {
    const cella = document.createElement("div");
    cella.classList.add("square");
    grid.appendChild(cella);
    
}