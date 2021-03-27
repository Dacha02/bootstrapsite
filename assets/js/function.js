//Kada skrolujemo do odrejene visine header dobije drugu boju
function scroll() {
  var el = document.getElementById("sh");
  var cl = document.getElementsByClassName("hlink");
  if (window.pageYOffset >= 50) {
    el.style.backgroundColor = "#fff";
    el.style.borderBottom = "1px solid #c2c2c2";
    for (let i = 0; i < cl.length; i++) {
      cl[i].style.color = "#000";
    }
  }
  if (window.pageYOffset < 50) {
    el.style.backgroundColor = "transparent";
    el.style.borderBottom = "0px";
    for (let i = 0; i < cl.length; i++) {
      cl[i].style.color = "#000";
    }
  }
}

function over() {
  var el = document.getElementById("sh");
  var cl = document.getElementsByClassName("hlink");
  if (window.pageYOffset >= 50) {
    scroll();
  }
  if (window.pageYOffset < 50) {
    el.style.backgroundColor = "white";
    for (let i = 0; i < cl.length; i++) {
      cl[i].style.color = "#000";
    }
  }
}

function out() {
  var el = document.getElementById("sh");
  var cl = document.getElementsByClassName("hlink");
  if (window.pageYOffset >= 50) {
    scroll();
  }
  if (window.pageYOffset < 50) {
    el.style.backgroundColor = "transparent";
    for (let i = 0; i < cl.length; i++) {
      cl[i].style.color = "#000";
    }
  }
}
