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

// Galeria de produtos/categorias

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__right");
    button.onclick = function () {
      document.getElementById("row__recommends").scrollLeft += 300;
    };
    var button = document.getElementById("slide__left");
    button.onclick = function () {
      document.getElementById("row__recommends").scrollLeft -= 300;
    };
  },
  false
);

document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("slide__right__category");
      button.onclick = function () {
        document.getElementById("row__category").scrollLeft += 300;
      };
      var button = document.getElementById("slide__left__category");
      button.onclick = function () {
        document.getElementById("row__category").scrollLeft -= 300;
      };
    },
    false
  );

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("slide__right__sunglasses");
      button.onclick = function () {
        document.getElementById("row__sunglasses").scrollLeft += 300;
      };
      var button = document.getElementById("slide__left__sunglasses");
      button.onclick = function () {
        document.getElementById("row__sunglasses").scrollLeft -= 300;
      };
    },
    false
  );

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("slide__right__sellers");
      button.onclick = function () {
        document.getElementById("row__sellers").scrollLeft += 300;
      };
      var button = document.getElementById("slide__left__sellers");
      button.onclick = function () {
        document.getElementById("row__sellers").scrollLeft -= 300;
      };
    },
    false
  );

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("slide__right__perfumes");
      button.onclick = function () {
        document.getElementById("row__perfumes").scrollLeft += 300;
      };
      var button = document.getElementById("slide__left__perfumes");
      button.onclick = function () {
        document.getElementById("row__perfumes").scrollLeft -= 300;
      };
    },
    false
  );
  
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("slide__left__accessories");
      button.onclick = function () {
        document.getElementById("row__accessories").scrollLeft += 300;
      };
      var button = document.getElementById("slide__right__accessories");
      button.onclick = function () {
        document.getElementById("row__accessories").scrollLeft -= 300;
      };
    },
    false
  );
