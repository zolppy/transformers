const LEVEL_LIMIT = 99;
const STATUS_LIMIT = 199;

async function getRobots() {
  const JSON_PATH = "assets/js/data/robots.json";
  const response = await fetch(JSON_PATH);
  const data = await response.json();

  return data;
}


async function buildRobot() {
  const robots = await getRobots();
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