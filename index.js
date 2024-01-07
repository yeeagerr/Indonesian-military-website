const dropA = () => {
  const dropdown = document.querySelector(".dropdown");
  const threeline = document.querySelector(".threeline");
  threeline.addEventListener("click", function () {
    dropdown.classList.toggle("dropA");
    threeline.classList.toggle("rotate");
  });
};
const navigat = () => {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
      navbar.classList.add("navcol");
    } else {
      navbar.classList.remove("navcol");
    }
  });
};
navigat();
dropA();
