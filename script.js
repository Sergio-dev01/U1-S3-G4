const appNums = [];
let availableNumbers = Array.from({ length: 90 }, (_, i) => i + 1);

function tableMaker() {
  const tableBlock = document.getElementById("table");

  for (let i = 1; i <= 90; i++) {
    const tD = document.createElement("div");
    tD.classList.add("cells");
    tD.textContent = i;

    tableBlock.appendChild(tD);
  }
}

function getNum() {
  if (availableNumbers.length === 0) {
    alert("Hai estratto tutti i numeri!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableNumbers.length);
  const numRandom = availableNumbers.splice(randomIndex, 1)[0];

  appNums.push(numRandom);
  getCell(numRandom);
}

function getCell(num) {
  const tDivs = document.querySelectorAll(".cells");

  for (let i = 0; i < tDivs.length; i++) {
    if (parseInt(tDivs[i].textContent) === num) {
      tDivs[i].classList.add("inEvidenza");
    }
  }
}

const pulsante = document.getElementById("extraction-button");
pulsante.addEventListener("click", getNum);

tableMaker();
