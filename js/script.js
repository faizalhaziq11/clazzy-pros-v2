// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

window.onscroll = () => {
  myFunction();
}

let sticky = headerEl.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    headerEl.classList.add("sticky")
  } else {
    headerEl.classList.remove("sticky");
  }
}