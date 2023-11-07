// PROVA DIFFICOLTA
let difficoltà = document.getElementById("difficulty");
difficoltà.addEventListener('change', function() {
    console.log('Hai selezionato: ', difficoltà.value);
  });
  let numCelle = 0;

let grid = document.getElementById("container");
const playBtn = document.getElementById("myBtn");

playBtn.addEventListener("click", function() {
    if (difficoltà.value == "Normale") {
        numCelle = 81;
        grid.innerHTML = "";
      } else if (difficoltà.value == "Difficile"){
        numCelle = 49;
        grid.innerHTML = "";
      } else {
        numCelle = 100;
        grid.innerHTML = "";
      }
    
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
            console.log("Cella selezionata", numero);
            cella.classList.toggle("highlight");
        });
        
        return cella;
        
    }
});