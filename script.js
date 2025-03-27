function createTable() {
  const table = document.getElementById("board");

  for (let i = 1; i <= 90; i++) {
    const td = document.createElement("div");
    td.classList.add("cell");
    td.innerText = i;
    td.dataset.numero = i;

    table.appendChild(td);
  }
}

function getNumber() {
  const randomNum = Math.floor(Math.random() * 90) + 1;
  const cells = document.querySelectorAll(".cell");
  return randomNum;
}
const bottone = document.getElementById("extract-button");
bottone.addEventListener("click", getNumber);

createTable();
