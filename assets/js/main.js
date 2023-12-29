const drawNumber = (LIMIT) => Math.floor(Math.random() * LIMIT);

function generateRobotImage() {
  const imagesPath = [
    "assets/img/robots/bumblee.png",
    "assets/img/robots/optimus-prime.png",
    "assets/img/robots/mirage.png"
  ];

  const robotImgElement = document.querySelector("#robot-img");
  let ROBOT_IMAGE =  imagesPath[drawNumber(imagesPath.length)];

  robotImgElement.src = ROBOT_IMAGE;

  return ROBOT_IMAGE;
}

function generateRobotStatus() {
  const LEVEL_LIMIT = 99;
  const levelPointsElement = document.querySelector("#level-points");
  const hpPointsElement = document.querySelector("#hp-points");
  const atkPointsElement = document.querySelector("#atk-points");
  const defPointsElement = document.querySelector("#def-points");
  const spdPointsElement = document.querySelector("#spd-points");
  const pointsPointsElement = document.querySelector("#points-points");

  let level = drawNumber(LEVEL_LIMIT);

  hpPointsElement.textContent = drawNumber(1.5 * level);
  atkPointsElement.textContent = drawNumber(2.2 * level);
  defPointsElement.textContent = drawNumber(3.1 * level);
  spdPointsElement.textContent = drawNumber(1.1 * level);
  levelPointsElement.textContent = level;
  pointsPointsElement.textContent = level * 5;
}

function generateRobotName(ROBOT_IMAGE) {
  const robotNameElement = document.querySelector("#robot-name");

  if (ROBOT_IMAGE.includes("bumblee")) {
    robotNameElement.textContent = "bumblee";
  } else if (ROBOT_IMAGE.includes("optimus-prime")) {
    robotNameElement.textContent = "Optimus Prime";
  } else {
    robotNameElement.textContent = "Mirage";
  }
}

function buildRobot() {
  const ROBOT_IMAGE = generateRobotImage();
  generateRobotName(ROBOT_IMAGE);
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

  if (currentAvailablePoints >= 0 && currentStatusPoints <= 199) {
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