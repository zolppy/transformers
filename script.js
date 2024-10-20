const LEVEL_LIMIT = 100;
const STATS_LIMIT = 200;

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

const buildBot = () => {
  const TOTAL_STATS = 4;
  const factor = (STATS_LIMIT * TOTAL_STATS) / LEVEL_LIMIT;
  const totalBots = bots.length;
  const bot = bots[Math.floor(Math.random() * totalBots)];

  const name = bot.name;
  const img = bot.img;
  const lvl = Math.floor(Math.random() * LEVEL_LIMIT + 1);
  let pts = lvl * factor;
  const hp = Math.floor(
    Math.random() * (pts >= STATS_LIMIT ? STATS_LIMIT + 1 : pts)
  );
  pts -= hp;
  const atk = Math.floor(
    Math.random() * (pts >= STATS_LIMIT ? STATS_LIMIT + 1 : pts)
  );
  pts -= atk;
  const def = Math.floor(
    Math.random() * (pts >= STATS_LIMIT ? STATS_LIMIT + 1 : pts)
  );
  pts -= def;
  const spd = Math.floor(
    Math.random() * (pts >= STATS_LIMIT ? STATS_LIMIT + 1 : pts)
  );
  pts -= spd;

  return {
    name: name,
    img: img,
    lvl: lvl,
    hp: hp,
    atk: atk,
    def: def,
    spd: spd,
    pts: pts,
  };
};

const showBot = ({ name, img, lvl, hp, atk, def, spd, pts }) => {
  const botNameEl = document.querySelector(".bot__name");
  const botImgEl = document.querySelector(".bot__img");
  const botLvlEl = document.querySelector(".stats__lvl");
  const botHpEl = document.querySelector(".stats__hp");
  const botAtkEl = document.querySelector(".stats__atk");
  const botDefEl = document.querySelector(".stats__def");
  const botSpdEl = document.querySelector(".stats__spd");
  const botPtsEl = document.querySelector(".stats__pts");

  botNameEl.textContent = name;
  botImgEl.setAttribute("src", img);
  botLvlEl.textContent = lvl;
  botHpEl.textContent = hp;
  botAtkEl.textContent = atk;
  botDefEl.textContent = def;
  botSpdEl.textContent = spd;
  botPtsEl.textContent = pts;
};

const increaseHpButton = document.querySelector(".stats__increase-hp-button");
const increaseAtkButton = document.querySelector(".stats__increase-atk-button");
const increaseDefButton = document.querySelector(".stats__increase-def-button");
const increaseSpdButton = document.querySelector(".stats__increase-spd-button");

const checkMaxLvl = () => {
  const lvlStatEl = document.querySelector(".stats__lvl");
  const maxLvlEl = document.querySelector(".stats__max-lvl");

  if (Number(lvlStatEl.textContent) === LEVEL_LIMIT) {
    maxLvlEl.style.display = "initial";
  }
};

const checkMaxHp = () => {
  const hpStatEl = document.querySelector(".stats__hp");
  const maxHpEl = document.querySelector(".stats__max-hp");

  if (Number(hpStatEl.textContent) === STATS_LIMIT) {
    maxHpEl.style.display = "initial";
    increaseHpButton.remove();
  }
};

const checkMaxAtk = () => {
  const atkStatEl = document.querySelector(".stats__atk");
  const maxAtkEl = document.querySelector(".stats__max-atk");

  if (Number(atkStatEl.textContent) === STATS_LIMIT) {
    maxAtkEl.style.display = "initial";
    increaseAtkButton.remove();
  }
};

const checkMaxDef = () => {
  const defStatEl = document.querySelector(".stats__def");
  const maxDefEl = document.querySelector(".stats__max-def");

  if (Number(defStatEl.textContent) === STATS_LIMIT) {
    maxDefEl.style.display = "initial";
    increaseDefButton.remove();
  }
};

const checkMaxSpd = () => {
  const spdStatEl = document.querySelector(".stats__spd");
  const maxSpdEl = document.querySelector(".stats__max-spd");

  if (Number(spdStatEl.textContent) === STATS_LIMIT) {
    maxSpdEl.style.display = "initial";
    increaseSpdButton.remove();
  }
};

let pressed;
let intervalId;

const increaseHp = () => {
  const el = document.querySelector(".stats__hp");
  const availablePointsEl = document.querySelector(".stats__pts");
  let pts = Number(el.textContent);
  let availablePts = Number(availablePointsEl.textContent);

  pts++;
  availablePts--;

  if (availablePts >= 0 && pts <= STATS_LIMIT) {
    el.textContent = pts;
    availablePointsEl.textContent = availablePts;
  } else {
    clearInterval(intervalId);
  }

  checkMaxHp();
};

const increaseAtk = () => {
  const el = document.querySelector(".stats__atk");
  const availablePointsEl = document.querySelector(".stats__pts");
  let pts = Number(el.textContent);
  let availablePts = Number(availablePointsEl.textContent);

  pts++;
  availablePts--;

  if (availablePts >= 0 && pts <= STATS_LIMIT) {
    el.textContent = pts;
    availablePointsEl.textContent = availablePts;
  } else {
    clearInterval(intervalId);
  }

  checkMaxAtk();
};

const increaseDef = () => {
  const el = document.querySelector(".stats__def");
  const availablePointsEl = document.querySelector(".stats__pts");
  let pts = Number(el.textContent);
  let availablePts = Number(availablePointsEl.textContent);

  pts++;
  availablePts--;

  if (availablePts >= 0 && pts <= STATS_LIMIT) {
    el.textContent = pts;
    availablePointsEl.textContent = availablePts;
  } else {
    clearInterval(intervalId);
  }

  checkMaxDef();
};

const increaseSpd = () => {
  const el = document.querySelector(".stats__spd");
  const availablePointsEl = document.querySelector(".stats__pts");
  let pts = Number(el.textContent);
  let availablePts = Number(availablePointsEl.textContent);

  pts++;
  availablePts--;

  if (availablePts >= 0 && pts <= STATS_LIMIT) {
    el.textContent = pts;
    availablePointsEl.textContent = availablePts;
  } else {
    clearInterval(intervalId);
  }

  checkMaxSpd();
};

function increaseHpseContinuosDown() {
  intervalId = setInterval(() => {
    pressed = true;
    increaseHp();
  }, 100);
}

function increaseAtkseContinuosDown() {
  intervalId = setInterval(() => {
    pressed = true;
    increaseAtk();
  }, 100);
}

function increaseDefseContinuosDown() {
  intervalId = setInterval(() => {
    pressed = true;
    increaseDef();
  }, 100);
}

function increaseSpdseContinuosDown() {
  intervalId = setInterval(() => {
    pressed = true;
    increaseSpd();
  }, 100);
}

function increaseContinuosUp() {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
}

increaseHpButton.addEventListener("mousedown", () =>
  increaseHpseContinuosDown()
);
increaseHpButton.addEventListener("mouseup", increaseContinuosUp);

increaseAtkButton.addEventListener("mousedown", () =>
  increaseAtkseContinuosDown()
);
increaseAtkButton.addEventListener("mouseup", increaseContinuosUp);

increaseDefButton.addEventListener("mousedown", () =>
  increaseDefseContinuosDown()
);
increaseDefButton.addEventListener("mouseup", increaseContinuosUp);

increaseSpdButton.addEventListener("mousedown", () =>
  increaseSpdseContinuosDown()
);
increaseSpdButton.addEventListener("mouseup", increaseContinuosUp);

window.addEventListener("DOMContentLoaded", () => {
  const bot = buildBot();

  showBot(bot);

  checkMaxLvl();
  checkMaxHp();
  checkMaxAtk();
  checkMaxDef();
  checkMaxSpd();
});
