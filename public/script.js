const hamburger = document.querySelector(".fa");
const div = document.querySelector(".div");

const menuOpen = () => {
  const hamburger = document.querySelector(".fa");
  const div = document.querySelector(".div");

  if (div.classList.contains("sm:hidden")) {
    div.classList.remove("sm:hidden");
    hamburger.style.opacity = "0.5";
  } else {
    div.classList.add("sm:hidden");
    hamburger.style.opacity = "1";
  }
};
