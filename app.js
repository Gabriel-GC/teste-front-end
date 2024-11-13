// Banner Hero
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
      document.getElementById("row__recommends").scrollLeft += 500;
    };
    var button = document.getElementById("slide__left");
    button.onclick = function () {
      document.getElementById("row__recommends").scrollLeft -= 500;
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__right__category");
    button.onclick = function () {
      document.getElementById("row__category").scrollLeft += 500;
    };
    var button = document.getElementById("slide__left__category");
    button.onclick = function () {
      document.getElementById("row__category").scrollLeft -= 500;
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__right__sunglasses");
    button.onclick = function () {
      document.getElementById("row__sunglasses").scrollLeft += 500;
    };
    var button = document.getElementById("slide__left__sunglasses");
    button.onclick = function () {
      document.getElementById("row__sunglasses").scrollLeft -= 500;
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__right__sellers");
    button.onclick = function () {
      document.getElementById("row__sellers").scrollLeft += 500;
    };
    var button = document.getElementById("slide__left__sellers");
    button.onclick = function () {
      document.getElementById("row__sellers").scrollLeft -= 500;
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__right__perfumes");
    button.onclick = function () {
      document.getElementById("row__perfumes").scrollLeft += 500;
    };
    var button = document.getElementById("slide__left__perfumes");
    button.onclick = function () {
      document.getElementById("row__perfumes").scrollLeft -= 500;
    };
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide__left__accessories");
    button.onclick = function () {
      document.getElementById("row__accessories").scrollLeft += 500;
    };
    var button = document.getElementById("slide__right__accessories");
    button.onclick = function () {
      document.getElementById("row__accessories").scrollLeft -= 500;
    };
  },
  false
);

// Cards de Recomendações

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("button__right");
    button.onclick = function () {
      document.getElementById("carousel").scrollLeft += 500;
    };
    var button = document.getElementById("button__left");
    button.onclick = function () {
      document.getElementById("carousel").scrollLeft -= 500;
    };
  },
  false
);

// Newslatter

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var checklInput = document.getElementById("terms");
var theForm = document.getElementsByClassName("content__form");

document
  .querySelector("form.content__form")
  .addEventListener("submit", function (e) {
    e.defaultPrevented();

    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(checklInput.value);
  });

function mensageSubmit() {
  alert("Newslatter assinada");
}


// Footer mobile
var acc = document.getElementsByClassName("footer__mobile__panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}