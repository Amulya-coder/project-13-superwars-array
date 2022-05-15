const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

const initPlayers = (players) => {
  let detailedPlayers = [];
  for (var i = 0; i < players.length; i++) {
    detailedPlayers[i] = {
      name: players[i],
      image: "images/super-" + (i + 1) + ".png",
      strength: getRandomStrength(),
      type: i % 2 == 0 ? "hero" : "villain",
    };
  }
  return detailedPlayers;
};

const getRandomStrength = () => {
  var strength = Math.floor(Math.random() * 100);
  return strength;
};

const buildPlayers = (players, type) => {
  let fragment = "";

  // Type your code here
  for (var i = 0; i < players.length; i++) {
    fragment += `<div class="player">
        <img src="${players[i].image}" alt = " ">
        <div class="name">${players[i].name}</div>
        <div class="strength">${players[i].strength}</div>
    </div>`;
  }

  return fragment;
};

const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
