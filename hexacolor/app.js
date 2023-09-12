const body = document.querySelector("body");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("copybtn");
const hexvalue = document.getElementById("hex");
body.style.background = "black";
hexvalue.innerHTML = "#000000";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
// btn.addEventListener("click", () => {
//   let key = "#";
//   for (let i = 0; i < 6; i++) {
//     const index = Math.floor(Math.random() * hex.length);
//     key = key + hex[index];
//   }
//   //span hex
//   hexvalue.innerHTML = key;
//   document.getElementById("myhex").value = key;
//   body.style.background = key;
// });

btn.addEventListener("click", () => {
  let key = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    key = key + hex[index];
  }
  hexvalue.innerHTML = key;
  document.getElementById("myhex").value = key;
  body.style.background = key;
});
