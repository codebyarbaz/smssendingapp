document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".hamMenuWrapper").addEventListener("click", () => {
    document
      .querySelector(".mobileNavMenuWrapper")
      .classList.toggle("HidemobileNavMenuWrapper");
    document.querySelector(".hamBarFirst").classList.toggle("hamBar1");
    document.querySelector(".hamBarSecond").classList.toggle("hamBar2");
    document.querySelector(".hamBarThird").classList.toggle("hamBar3");
  });
});
