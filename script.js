function appendToDisplay(value) {
  const displayElement = document.getElementById("display");
  displayElement.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const displayElement = document.getElementById("display");
  displayElement.value = eval(displayElement.value);
}
