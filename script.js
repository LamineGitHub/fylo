const humburger = document.querySelector(".humburgers");
const nav = document.querySelector(".header__links");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("open"); 
  nav.classList.toggle('open');
});
