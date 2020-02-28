var maxRandom = 49;
var noms = [];

function timeFunction(i) {
  return 3000/(50.1 - i);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

function randomNom(i) {
  var nom = noms[getRandomInt(0, noms.length)];
  document.getElementById("nom").textContent = nom;

  if (i == maxRandom) {
    document.body.classList.add("rifa-finished");
    return;
  }

  setTimeout(_ => {
    randomNom(i+1);
  }, timeFunction(i));
}

window.addEventListener("load", _ => {
  document.getElementById("btn").addEventListener("click", _ => {
    noms = document.getElementById("noms").value.split("\n");
    document.body.classList.add("rifa-started");
    randomNom(0);
  });

  document.getElementById("repeat").addEventListener("click", _ => {
    ["rifa-started", "rifa-finished"].forEach(className => {
      if (document.body.classList.contains(className)) document.body.classList.remove(className);
    });
  });
});
