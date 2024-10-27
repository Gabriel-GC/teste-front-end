// Hero
var radio = document.querySelector(".manual__btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  cont++;

  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}

// Galeria de produtos

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__right");
    button.onclick = function () {
      document.getElementById("roww").scrollLeft += 300;
    };
    var button = document.getElementById("slide__left");
    button.onclick = function () {
      document.getElementById("roww").scrollLeft -= 300;
    };
  },
  false
);
