// localStorage.setItem("name", "Nadir");

// let name = localStorage.getItem("name");
// console.log(name);

const input = document.getElementById("input");

input.addEventListener("keydown", (e) => {
  console.log(e.target.value);
});
