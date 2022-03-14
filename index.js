// Any code you will write for your website (in the future!) should go here
document.querySelector(".header__moon").onclick = function () {
  document.querySelector("body").classList.toggle("is-black");
};

document.querySelector(".header__mob-menu").onclick = function () {
  document.querySelector(".header-menu").classList.toggle("is-active");
};
