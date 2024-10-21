function open() {
  let button = document.querySelector(".container button");
  let links = document.querySelector(".container .links");
  let close = document.querySelector(".container .links .close");

  document.querySelector(".container .links");
  button.addEventListener("click", function () {
    links.style.width = " 25%";
    button.style.marginLeft = "220px";
  });
  close.addEventListener("click", function () {
    links.style.width = "0";
    button.style.marginLeft = "0";
  });
}
window.onload = open();
