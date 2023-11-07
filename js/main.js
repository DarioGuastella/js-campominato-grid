// Creo la griglia con N celle nel container

let numCelle = 100;
let grid = document.getElementById("container");
const playBtn = document.getElementById("myBtn");

playBtn.addEventListener("click", function() {
    
    
    for (let i = 1; i <= numCelle; i++) {
        let cella = creaCella(i);
        grid.appendChild(cella);
        cella.innerHTML = i;
    }
    
    function creaCella(numero) {
        const cella = document.createElement("div");
        cella.classList.add("square");
        // Evento per ogni cella
        cella.addEventListener("click", function() {
            console.log("Cella selezionata", i);
            cella.classList.toggle("highlight");
        });
        
        return cella;
        
    }
});