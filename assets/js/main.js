const STATUS_LIMIT = 199;

function generateRobotImage() {
  const imagesPath = [
    "assets/img/robots/arcee.png",
    "assets/img/robots/bumblebee.png",
    "assets/img/robots/grimlock.png",
    "assets/img/robots/jazz.png",
    "assets/img/robots/megatron.png",
    "assets/img/robots/mirage.png",
    "assets/img/robots/optimus-prime.png",
    "assets/img/robots/ratchet.png",
    "assets/img/robots/starscream.png",
    "assets/img/robots/ultra-magnus.png"
  ];

  const robotImgElement = document.querySelector("#robot-img");
  let ROBOT_IMAGE_PATH =  imagesPath[Math.floor(Math.random() * imagesPath.length)];

  robotImgElement.src = ROBOT_IMAGE_PATH;

  return ROBOT_IMAGE_PATH;
}

function generateRobotStatus() {
  const LEVEL_LIMIT = 99;
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
    "bumblebee",
    "grimlock",
    "jazz",
    "megatron",
    "mirage",
    "optimus-prime",
    "ratchet",
    "starscream",
    "ultra-magnus"
  ];

  for (let robotName of ROBOT_NAMES) {
    if (ROBOT_IMAGE_PATH.includes(robotName)) {
      if (robotName.includes("-")) {
        robotName.replace("-", " ");
        robotNameElement.textContent = robotName;
        break;
      } else {
        robotNameElement.textContent = robotName;
      }
    }
  }
}

function buildRobot() {
  const ROBOT_IMAGE_PATH = generateRobotImage();
  generateRobotName(ROBOT_IMAGE_PATH);
  generateRobotStatus();
}

buildRobot();

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

function increaseContinuosDown(status) {
  intervalId = setInterval(() => {
    pressed = true;
    increaseStatus(status);
  }, 100);
}

function increaseContinuosUp() {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
}

increaseHPButton.addEventListener("mousedown", () => increaseContinuosDown("hp"));
increaseHPButton.addEventListener("mouseup", increaseContinuosUp);

increaseATKButton.addEventListener("mousedown", () => increaseContinuosDown("atk"));
increaseATKButton.addEventListener("mouseup", increaseContinuosUp);

increaseDEFButton.addEventListener("mousedown", () => increaseContinuosDown("def"));
increaseDEFButton.addEventListener("mouseup", increaseContinuosUp);

increaseSPDButton.addEventListener("mousedown", () => increaseContinuosDown("spd"));
increaseSPDButton.addEventListener("mouseup", increaseContinuosUp);