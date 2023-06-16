const color = document.getElementById("color");
const black = document.getElementById("black");
const red = document.getElementById("red");
const input = document.getElementById("input");
let result = color.innerHTML;
result = Number(result);
black.addEventListener("click", (e) => {
  result = result + 1;
  color.innerHTML = result;
  console.log(result);
});

red.addEventListener("click", () => {
  window.location.href = "./page.html";
});
