
const sideBar = document.getElementById("side-bar");
const body1 = document.querySelector(".content");
console.log(body1);

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");

});

body1.addEventListener("click", () => {
  sideBar.classList.remove("active");
  console.log('test!!');
});

