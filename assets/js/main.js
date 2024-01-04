const LEVEL_LIMIT = 99;
const STATUS_LIMIT = 199;

const robots = [
  {
    id: 1,
    name: "arcee",
    imagePath: "assets/img/robots/arcee.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 2,
    name: "bonecrusher",
    imagePath: "assets/img/robots/bonecrusher.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 3,
    name: "bumblebee",
    imagePath: "assets/img/robots/bumblebee.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 4,
    name: "cheetor",
    imagePath: "assets/img/robots/cheetor.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 5,
    name: "grimlock",
    imagePath: "assets/img/robots/grimlock.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 6,
    name: "ironhide",
    imagePath: "assets/img/robots/ironhide.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 7,
    name: "jazz",
    imagePath: "assets/img/robots/jazz.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 8,
    name: "megatron",
    imagePath: "assets/img/robots/megatron.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 9,
    name: "mirage",
    imagePath: "assets/img/robots/mirage.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 10,
    name: "nightbird",
    imagePath: "assets/img/robots/nightbird.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 11,
    name: "optimus-primal",
    imagePath: "assets/img/robots/optimus-primal.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 12,
    name: "optimus-prime",
    imagePath: "assets/img/robots/optimus-prime.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 13,
    name: "prowl",
    imagePath: "assets/img/robots/prowl.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 14,
    name: "ratchet",
    imagePath: "assets/img/robots/ratchet.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 15,
    name: "scorponok",
    imagePath: "assets/img/robots/scorponok.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 16,
    name: "scourge",
    imagePath: "assets/img/robots/scourge.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 17,
    name: "starscream",
    imagePath: "assets/img/robots/starscream.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  },
  {
    id: 18,
    name: "ultra-magnus",
    imagePath: "assets/img/robots/ultra-magnus.png",
    stats: {
      hp: 0,
      def: 0,
      atk: 0,
      spd: 0,
      lvl: 0,
      pts: 0
    }
  }
];

function buildRobot() {
  const robotImageContainer = document.querySelector("#robot-img");
  const robotNameContainer = document.querySelector("#robot-name");
  const robot = robots[Math.floor(Math.random() * robots.length)];
  const lvlStatusContainer = document.querySelector("#level-points");
  const hpStatusContainer = document.querySelector("#hp-points");
  const atkStatusContainer = document.querySelector("#atk-points");
  const defStatusContainer = document.querySelector("#def-points");
  const spdStatusContainer = document.querySelector("#spd-points");
  const pointsStatusContainer = document.querySelector("#points-points");
  let robotName = robot.name;
  robot.stats = generateRobotStatus();

  while (robotName.includes("-")) {
    robotName = robotName.replace("-", " ");
  }

  robotImageContainer.src = robot.imagePath;
  robotNameContainer.textContent = robotName;
  lvlStatusContainer.textContent = robot.stats.lvl;
  hpStatusContainer.textContent = robot.stats.hp;
  atkStatusContainer.textContent = robot.stats.atk;
  defStatusContainer.textContent = robot.stats.def;
  spdStatusContainer.textContent = robot.stats.spd;
  pointsStatusContainer.textContent = robot.stats.pts;
}

function drawNumber(TOTAL, LIMIT) {
  let value;

  do {
    value = Math.floor((Math.random() * TOTAL) + 1);
  } while (value > LIMIT);

  return value;
}

function generateRobotStatus() {
  const stats = {};
  let lvl, pts, hp, atk, def, spd;

  lvl = drawNumber(LEVEL_LIMIT, LEVEL_LIMIT);
  pts = lvl * 5;

  hp = drawNumber(pts, STATUS_LIMIT);
  pts -= hp;
  atk = drawNumber(pts, STATUS_LIMIT);
  pts -= atk;
  def = drawNumber(pts, STATUS_LIMIT);
  pts -= def;
  spd = drawNumber(pts, STATUS_LIMIT);
  pts -= spd;

  stats.hp = hp;
  stats.atk = atk;
  stats.def = def;
  stats.spd = spd;
  stats.lvl = lvl;
  stats.pts = pts;

  return stats;
}

generateRobotStatus();

function checksMax(event) {
  const maxLVLElement = document.querySelector("#max-lvl");
  const maxHPElement = document.querySelector("#max-hp");
  const maxATKElement = document.querySelector("#max-atk");
  const maxDEFElement = document.querySelector("#max-def");
  const maxSPDElement = document.querySelector("#max-spd");
  const LVLPointsElement = document.querySelector("#level-points");
  const HPPointsElement = document.querySelector("#hp-points");
  const ATKPointsElement = document.querySelector("#atk-points");
  const DEFPointsElement = document.querySelector("#def-points");
  const SPDPointsElement = document.querySelector("#spd-points");
  const elements = [
    HPPointsElement,
    ATKPointsElement,
    DEFPointsElement,
    SPDPointsElement
  ];
  const maxElement = [
    maxHPElement,
    maxATKElement,
    maxDEFElement,
    maxSPDElement
  ];

  let boolean = false;

  if (Number(LVLPointsElement.textContent) === LEVEL_LIMIT) {
    maxLVLElement.classList.remove("hidden");
  }

  for (let i = 0; i < elements.length; i++) {
    if (Number(elements[i].textContent) === (STATUS_LIMIT - 1)) {
      maxElement[i].classList.remove("hidden");
      boolean = true;
    }
  }

  if (boolean) {
    event.remove();
  }
}

const increaseHPButton = document.querySelector("#increase-hp-button");
const increaseATKButton = document.querySelector("#increase-atk-button");
const increaseDEFButton = document.querySelector("#increase-def-button");
const increaseSPDButton = document.querySelector("#increase-spd-button");

let pressed = false;
let intervalId;

function increaseStatus(status) {
  const statusPointsElement = document.querySelector(`#${status}-points`);
  const pointsPointsElement = document.querySelector("#points-points");
  let currentStatusPoints = Number(statusPointsElement.textContent);
  let currentAvailablePoints = Number(pointsPointsElement.textContent);

  currentStatusPoints++;
  currentAvailablePoints--;

  if (currentAvailablePoints >= 0 && currentStatusPoints <= STATUS_LIMIT) {
    statusPointsElement.textContent = currentStatusPoints;
    pointsPointsElement.textContent = currentAvailablePoints;
  } else {
    clearInterval(intervalId);
  }
}

function increaseContinuosDown(status, event) {
  intervalId = setInterval(() => {
    pressed = true;
    checksMax(event.target);
    increaseStatus(status);
  }, 100);
}

function increaseContinuosUp() {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
}

increaseHPButton.addEventListener("mousedown", (event) => increaseContinuosDown("hp", event));
increaseHPButton.addEventListener("mouseup", increaseContinuosUp);

increaseATKButton.addEventListener("mousedown", (event) => increaseContinuosDown("atk", event));
increaseATKButton.addEventListener("mouseup", increaseContinuosUp);

increaseDEFButton.addEventListener("mousedown", (event) => increaseContinuosDown("def", event));
increaseDEFButton.addEventListener("mouseup", increaseContinuosUp);

increaseSPDButton.addEventListener("mousedown", (event) => increaseContinuosDown("spd", event));
increaseSPDButton.addEventListener("mouseup", increaseContinuosUp);

window.addEventListener("load", () => {
  buildRobot();
  checksMax();
});