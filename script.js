const bots = [
  {
    name: "arcee",
    img: "img/robots/arcee.png",
  },
  {
    name: "bonecrusher",
    img: "img/robots/bonecrusher.png",
  },
  {
    name: "bumblebee",
    img: "img/robots/bumblebee.png",
  },
  {
    name: "cheetor",
    img: "img/robots/cheetor.png",
  },
  {
    name: "grimlock",
    img: "img/robots/grimlock.png",
  },
  {
    name: "ironhide",
    img: "img/robots/ironhide.png",
  },
  {
    name: "jazz",
    img: "img/robots/jazz.png",
  },
  {
    name: "megatron",
    img: "img/robots/megatron.png",
  },
  {
    name: "mirage",
    img: "img/robots/mirage.png",
  },
  {
    name: "nightbird",
    img: "img/robots/nightbird.png",
  },
  {
    name: "optimus-primal",
    img: "img/robots/optimus-primal.png",
  },
  {
    name: "optimus-prime",
    img: "img/robots/optimus-prime.png",
  },
  {
    name: "prowl",
    img: "img/robots/prowl.png",
  },
  {
    name: "ratchet",
    img: "img/robots/ratchet.png",
  },
  {
    name: "scorponok",
    img: "img/robots/scorponok.png",
  },
  {
    name: "scourge",
    img: "img/robots/scourge.png",
  },
  {
    name: "starscream",
    img: "img/robots/starscream.png",
  },
  {
    name: "ultra-magnus",
    img: "img/robots/ultra-magnus.png",
  },
  {
    name: "crosshairs",
    img: "img/robots/crosshairs.png",
  },
  {
    name: "drift",
    img: "img/robots/drift.png",
  },
  {
    name: "frenzy",
    img: "img/robots/frenzy.png",
  },
  {
    name: "laserbreak",
    img: "img/robots/laserbreak.png",
  },
  {
    name: "rhinox",
    img: "img/robots/rhinox.png",
  },
  {
    name: "sentinel-prime",
    img: "img/robots/sentinel-prime.png",
  },
  {
    name: "soundwave",
    img: "img/robots/soundwave.png",
  },
  {
    name: "wheeljack",
    img: "img/robots/wheeljack.png",
  },
  {
    name: "airazor",
    img: "img/robots/airazor.png",
  },
  {
    name: "jetfire",
    img: "img/robots/jetfire.png",
  },
  {
    name: "sideswipe",
    img: "img/robots/sideswipe.png",
  },
  {
    name: "the-fallen",
    img: "img/robots/the-fallen.png",
  },
  {
    name: "unicron",
    img: "img/robots/unicron.png",
  },
  {
    name: "wheelie",
    img: "img/robots/wheelie.png",
  },
];

const createBot = (bot) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");

  li.classList = "bots__bot";
  h2.classList = "bot__name";
  h2.textContent = bot.name;
  img.setAttribute("src", bot.img);
  img.classList = "bot__img";

  li.appendChild(h2);
  li.appendChild(img);

  return li;
};

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".bots");

  bots.forEach((bot) => {
    container.appendChild(createBot(bot));
  });
});
