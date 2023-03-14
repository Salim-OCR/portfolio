//NAVIGATION
let valeurScroll = 0;
window.addEventListener("scroll", () => {
  let responsiveScroll =
    ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;
  // console.log(responsiveScroll);

  //Nav
  if (window.scrollY > valeurScroll) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0px";
  }
  valeurScroll = window.scrollY;
  // console.log(valeurScroll);
});
