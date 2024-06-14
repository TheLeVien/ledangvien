const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const urlgame =
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=";

getlist();
localStorage.removeItem("id");
let gameslot = document.getElementById("gameslot");

async function getlist() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "74fb14a44fmsh73d1f679c292b73p12f2aejsn28969c2b5652",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    ///console.log(result);
    for (let i = 0; i <= 40; i++) {
      ///console.log(result[i].id);

      /// gameslot
      const game = document.createElement("div");
      game.classList.add("game");
      gameslot.appendChild(game);

      /// pics
      const pics = document.createElement("img");
      pics.classList.add("pics");
      pics.setAttribute("src", result[i].thumbnail);
      game.appendChild(pics);

      /// name
      const name = document.createElement("div");
      name.classList.add("name");
      name.innerHTML = result[i].title;
      name.id = result[i].id;
      pics.id = result[i].id;
      name.onclick = getgame;
      pics.onclick = getgame;
      game.appendChild(name);
    }
  } catch (error) {
    console.error(error);
  }
}

function getgame() {
  localStorage.setItem("id", event.target.id);
  window.location = "game.html";
}

function loadGOW() {
  ///event.preventDefault();
  window.location = "game.html";
}
