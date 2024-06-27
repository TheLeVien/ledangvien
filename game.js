function quaylai() {
  event.preventDefault();
  window.location = "main.html";
}

function back() {
  window.location.href = "main.html";
}

function pics0() {
  event.preventDefault();
  let pic1 = document.getElementById("pics0").src;
  let picbig = document.getElementById("picsbig").src;
  if (pic1 == picbig) return;
  document.getElementById("pics0").src = picbig;
  document.getElementById("picsbig").src = pic1;
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

const urlgame =
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=";

async function getgame() {
  let id = localStorage.getItem("id");
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "74fb14a44fmsh73d1f679c292b73p12f2aejsn28969c2b5652",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(urlgame + id, options);
    const result = await response.json();
    console.log(result);
    getinfor(result);
    getpics(result);
    getsystem(result);
  } catch (error) {
    console.error(error);
  }
}

function getinfor(result) {
  document.getElementById("name").innerHTML = result.title;
  document.getElementById("tit").innerHTML = result.title;
  document.getElementById("des").innerHTML = result.description;
  document.getElementById("date").innerHTML = result.release_date;
  document.getElementById("genre").innerHTML = result.genre;
}

function getpics(result) {
  document.getElementById("picsbig").src = result.thumbnail;
  for (let i in result.screenshots) {
    document.getElementById("pics" + i).src = result.screenshots[i].image;
    console.log(document.getElementById("pics" + i).src);
  }
  for (let i = 0; i < 4; i++) {
    if (document.getElementById("pics" + i).src == "") {
      let element = document.getElementById("pics" + i);
      element.remove();
    }
  }
}

/// Thêm game

function addgame() {
  var email = localStorage.getItem("useremail");
  var user = JSON.parse(localStorage.getItem("user"));
  for (var i in user) {
    if (email === user[i].useremail) {
      var pass = user[i].password;
      var name = user[i].username;
      var ghim = user[i].ghim;
      var play = user[i].play;
      ///console.log(user[i]);
      user.splice(i, 1);
      console.log(user);
    }
  }
}

function getsystem(result) {
  document.getElementById("graphics").innerHTML =
    result.minimum_system_requirements.graphics;
  document.getElementById("memory").innerHTML =
    result.minimum_system_requirements.memory;
  document.getElementById("os").innerHTML =
    result.minimum_system_requirements.os;
  document.getElementById("processor").innerHTML =
    result.minimum_system_requirements.processor;
  document.getElementById("storage").innerHTML =
    result.minimum_system_requirements.storage;
}

getgame();
