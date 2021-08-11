let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countElement()
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  refresh();
}

function refresh() {
  count = 0;
  countElement()
}

function countElement() {
  countEl.textContent = count;
}

function refreshEntries() {
  saveEl.textContent = "Previous entries: "
}