let peopleWhoBought = [
  "Daniel","Igor", "João", "Maria", "Eduarda", "Paula", "Rafael", "Mikael"
]

let luck = () => {

  let peoples = peopleWhoBought.length;

  let drawnNumber = Math.floor(Math.random() * peoples);

  document.getElementById("display").innerHTML = peopleWhoBought[drawnNumber];
}