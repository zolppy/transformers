const LEVEL_LIMIT = 99;
const STATUS_LIMIT = 199;

const robots = [
  { id: 1,  name: "arcee",          imagePath: "assets/img/robots/arcee.png" },
  { id: 2,  name: "bonecrusher",    imagePath: "assets/img/robots/bonecrusher.png" },
  { id: 3,  name: "bumblebee",      imagePath: "assets/img/robots/bumblebee.png" },
  { id: 4,  name: "cheetor",        imagePath: "assets/img/robots/cheetor.png" },
  { id: 5,  name: "grimlock",       imagePath: "assets/img/robots/grimlock.png" },
  { id: 6,  name: "ironhide",       imagePath: "assets/img/robots/ironhide.png" },
  { id: 7,  name: "jazz",           imagePath: "assets/img/robots/jazz.png" },
  { id: 8,  name: "megatron",       imagePath: "assets/img/robots/megatron.png" },
  { id: 9,  name: "mirage",         imagePath: "assets/img/robots/mirage.png" },
  { id: 10, name: "nightbird",      imagePath: "assets/img/robots/nightbird.png" },
  { id: 11, name: "optimus-primal", imagePath: "assets/img/robots/optimus-primal.png" },
  { id: 12, name: "optimus-prime",  imagePath: "assets/img/robots/optimus-prime.png" },
  { id: 13, name: "prowl",          imagePath: "assets/img/robots/prowl.png" },
  { id: 14, name: "ratchet",        imagePath: "assets/img/robots/ratchet.png" },
  { id: 15, name: "scorponok",      imagePath: "assets/img/robots/scorponok.png" },
  { id: 16, name: "scourge",        imagePath: "assets/img/robots/scourge.png" },
  { id: 17, name: "starscream",     imagePath: "assets/img/robots/starscream.png" },
  { id: 18, name: "ultra-magnus",   imagePath: "assets/img/robots/ultra-magnus.png" }
];

function buildRobot() {
  const robotImageContainer = document.querySelector("#robot-img");
  const robotNameContainer = document.querySelector("#robot-name");
  const robot = robots[Math.floor(Math.random() * robots.length)];

  robotImageContainer.src = robot.imagePath;
  robotNameContainer.textContent = robot.name;

  generateRobotStatus();
}

function generateRobotStatus() {
  const lvlPointsElement = document.querySelector("#level-points");
  const hpPointsElement = document.querySelector("#hp-points");
  const atkPointsElement = document.querySelector("#atk-points");
  const defPointsElement = document.querySelector("#def-points");
  const spdPointsElement = document.querySelector("#spd-points");
  const pointsPointsElement = document.querySelector("#points-points");

  function drawStatus(LIMIT) {
    let value = Math.floor(Math.random() * LIMIT);

    while (value > STATUS_LIMIT) {
      value = Math.floor(Math.random() * LIMIT)
    }

    return value;
  }

  let lvl = Math.floor(Math.random() * LEVEL_LIMIT);
  let pts = lvl * 5;
  let hp = drawStatus(pts);
  pts -= hp;
  let atk = drawStatus(pts);
  pts -= atk;
  let def = drawStatus(pts);
  pts -= def;
  let spd = drawStatus(pts);

  hpPointsElement.textContent = hp;
  atkPointsElement.textContent = def;
  defPointsElement.textContent = atk;
  spdPointsElement.textContent = spd;
  lvlPointsElement.textContent = lvl;
  pointsPointsElement.textContent = pts;
}

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