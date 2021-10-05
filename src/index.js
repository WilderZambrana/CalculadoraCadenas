import calculadoraCadenas from "./App";

const cadena = document.querySelector("#cadena-input");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  div.innerHTML = "<p>" + calculadoraCadenas() + "</p>";
});
