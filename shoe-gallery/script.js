const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const menShoe = document.querySelector("#men-img-shoe");
const womenShoe = document.querySelector("#women-img-shoe");
const kidsShoe = document.querySelector("#kids-img-shoe");
button1.addEventListener("click", () => {
  menShoe.style.display = "initial";
  womenShoe.style.display = "none";
  kidsShoe.style.display = "none";
});
button2.addEventListener("click", () => {
  womenShoe.style.display = "initial";
  menShoe.style.display = "none";
  kidsShoe.style.display = "none";
});
button3.addEventListener("click", () => {
  kidsShoe.style.display = "initial";
  menShoe.style.display = "none";
  womenShoe.style.display = "none";
});
