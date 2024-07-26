function changeTitle() {
  document.querySelector("h1").innerHTML = "SG Shop";
}

function changeBackground() {
  document.querySelector("body").style.backgroundColor = "green";
}

function changeFooter() {
  document.querySelector("p").innerHTML =
    "Simon's Shop | Via Nonoloso 999, Milano - Italia";
}

function linkCss() {
  let stile = document.querySelectorAll("a");
  for (let i = 0; i < stile.length; i++) {
    stile[i].style.textDecoration = "none";
    stile[i].style.color = "red";
  }
}

function hiddenImg() {
  let img = document.querySelectorAll("img");
  for (let i = 0; i < img.length; i++) {
    img[i].style.visibility = "hidden";
  }
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return "rgb(" + red + "," + green + "," + blue + ")";
}

function prezzoRandom() {
  let prezzo = document.getElementsByClassName("prezzo");
  for (let i = 0; i < prezzo.length; i++) {
    prezzo[i].style.color = randomColor();
  }
}
