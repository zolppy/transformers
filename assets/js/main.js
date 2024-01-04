const LEVEL_LIMIT = 99;
const STATUS_LIMIT = 199;

function generateRobotImage() {
  const imagesPath = [
    "assets/img/robots/arcee.png",
    "assets/img/robots/bonecrusher.png",
    "assets/img/robots/bumblebee.png",
    "assets/img/robots/cheetor.png",
    "assets/img/robots/grimlock.png",
    "assets/img/robots/ironhide.png",
    "assets/img/robots/jazz.png",
    "assets/img/robots/megatron.png",
    "assets/img/robots/mirage.png",
    "assets/img/robots/nightbird.png",
    "assets/img/robots/optimus-primal.png",
    "assets/img/robots/optimus-prime.png",
    "assets/img/robots/prowl.png",
    "assets/img/robots/ratchet.png",
    "assets/img/robots/scorponok.png",
    "assets/img/robots/scourge.png",
    "assets/img/robots/starscream.png",
    "assets/img/robots/ultra-magnus.png"
  ];

  const robotImgElement = document.querySelector("#robot-img");
  let ROBOT_IMAGE_PATH =  imagesPath[Math.floor(Math.random() * imagesPath.length)];

  robotImgElement.src = ROBOT_IMAGE_PATH;

  return ROBOT_IMAGE_PATH;
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

function generateRobotName(ROBOT_IMAGE_PATH) {
  const robotNameElement = document.querySelector("#robot-name");
  const ROBOT_NAMES = [
    "arcee",
    "bonecrusher",
    "bumblebee",
    "cheetor",
    "grimlock",
    "ironhide",
    "jazz",
    "megatron",
    "mirage",
    "nightbird",
    "optimus-primal",
    "optimus-prime",
    "prowl",
    "ratchet",
    "scorponok",
    "scourge",
    "starscream",
    "ultra-magnu"
  ];

  for (let robotName of ROBOT_NAMES) {
    if (ROBOT_IMAGE_PATH.includes(robotName)) {
      if (robotName.includes("-")) {
        robotNameElement.textContent = robotName.replace("-", " ");
      } else {
        robotNameElement.textContent = robotName;
      }

      break;
    }
  }
}

function buildRobot() {
  const ROBOT_IMAGE_PATH = generateRobotImage();
  generateRobotName(ROBOT_IMAGE_PATH);
  generateRobotStatus();
}

buildRobot();
checksMax();

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