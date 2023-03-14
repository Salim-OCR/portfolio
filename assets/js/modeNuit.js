const darkMode = document.getElementById("dark-mode");
const darkModeResponsive = document.getElementById("dark-mode-responsive");
// console.log(darkModeResponsive);

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// //En mode responsive
darkModeResponsive.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
