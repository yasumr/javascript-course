let calculation = localStorage.getItem("calculation") || "";
console.log(calculation);

displayCal();
function displayCal() {
  document.querySelector(".displayCalculation").innerHTML = calculation;
}

function updateCalculation(number) {
  calculation += number;
  localStorage.setItem("calculation", calculation);
  console.log(calculation);
  document.querySelector(".displayCalculation").innerHTML = calculation;
}