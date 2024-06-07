function quaylai() {
  event.preventDefault();
  window.location = "main.html";
}

function back() {
  window.location.href = "main.html";
}

function pics1() {
  event.preventDefault();
  let pic1 = document.getElementById("pics1").src;
  let picbig = document.getElementById("picsbig").src;
  if (pic1 == picbig) return;
  document.getElementById("pics1").src = picbig;
  document.getElementById("picsbig").src = pic1;
}

function pics2() {
  event.preventDefault();
  let pic1 = document.getElementById("pics2").src;
  let picbig = document.getElementById("picsbig").src;
  if (pic1 == picbig) return;
  document.getElementById("pics2").src = picbig;
  document.getElementById("picsbig").src = pic1;
}

function pics3() {
  event.preventDefault();
  let pic1 = document.getElementById("pics3").src;
  let picbig = document.getElementById("picsbig").src;
  if (pic1 == picbig) return;
  document.getElementById("pics3").src = picbig;
  document.getElementById("picsbig").src = pic1;
}

function pics4() {
  event.preventDefault();
  let pic1 = document.getElementById("pics4").src;
  let picbig = document.getElementById("picsbig").src;
  if (pic1 == picbig) return;
  document.getElementById("pics4").src = picbig;
  document.getElementById("picsbig").src = pic1;
}
