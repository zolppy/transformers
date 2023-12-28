const drawNumber = (LIMIT) => Math.floor(Math.random() * LIMIT);

function generateRobbotImage() {
  const imagesPath = [
    [
      "assets/img/robbots/bumblee/bumblee-1.png",
      "assets/img/robbots/bumblee/bumblee-2.png",
      "assets/img/robbots/bumblee/bumblee-3.png"
    ],
    [
      "assets/img/robbots/optimus-prime/optimus-prime-1.png",
      "assets/img/robbots/optimus-prime/optimus-prime-2.png",
      "assets/img/robbots/optimus-prime/optimus-prime-3.png"
    ],
    [
      "assets/img/robbots/mirage/mirage-1.png",
      "assets/img/robbots/mirage/mirage-2.png"
    ]
  ];
  
  const I = 3;
  const J = 3;
  const robbotImgElement = document.querySelector("#robbot-img");
  
  let i = drawNumber(I);
  let j = drawNumber(J);

  if (i === 2 && j === 2) {
    j--;
  }

  robbotImgElement.src = imagesPath[i][j];

  return imagesPath[i][j];
}

function generateRobbotStatus() {
  const LIMIT = 122;
  const LEVEL_LIMIT = 199;
  const levelPointsElement = document.querySelector("#level-points");
  const hpPointsElement = document.querySelector("#hp-points");
  const atkPointsElement = document.querySelector("#atk-points");
  const defPointsElement = document.querySelector("#def-points");
  const spdPointsElement = document.querySelector("#spd-points");
  const pointsPointsElement = document.querySelector("#points-points");

  let level = drawNumber(LEVEL_LIMIT);

  hpPointsElement.textContent = drawNumber(LIMIT);
  atkPointsElement.textContent = drawNumber(LIMIT);
  defPointsElement.textContent = drawNumber(LIMIT);
  spdPointsElement.textContent = drawNumber(LIMIT);
  levelPointsElement.textContent = level;
  pointsPointsElement.textContent = level * 12;
}

function generateRobbotName(ROBBOT_IMAGE) {
  const robbotNameElement = document.querySelector("#robbot-name");

  if (ROBBOT_IMAGE.includes("bumblee")) {
    robbotNameElement.textContent = "bumblee";
  } else if (ROBBOT_IMAGE.includes("optimus-prime")) {
    robbotNameElement.textContent = "Optimus Prime";
  } else {
    robbotNameElement.textContent = "Mirage";
  }
}

function buildRobbot() {
  const ROBBOT_IMAGE = generateRobbotImage();
  generateRobbotName(ROBBOT_IMAGE);
  generateRobbotStatus();
}

buildRobbot();

// Mudando status
const increaseHPButton = document.querySelector("#increase-hp-button");
const increaseATKButton = document.querySelector("#increase-atk-button");
const increaseDEFButton = document.querySelector("#increase-def-button");
const increaseSPDButton = document.querySelector("#increase-spd-button");

let pressed = false;
let intervalId; // Para armazenar o ID do intervalo

function increaseHP() {
  const hpPointsElement = document.querySelector("#hp-points");
  const pointsPointsElement = document.querySelector("#points-points");
  let currentHPPoints = Number(hpPointsElement.textContent);
  let currentAvailablePoints = Number(pointsPointsElement.textContent);

  currentHPPoints++;
  currentAvailablePoints--;

  if (currentAvailablePoints >= 0 && currentHPPoints <= 200) {
    hpPointsElement.textContent = currentHPPoints;
    pointsPointsElement.textContent = currentAvailablePoints;
  } else {
    clearInterval(intervalId);
  }
}

function increaseATK() {
  const atkPointsElement = document.querySelector("#atk-points");
  const pointsPointsElement = document.querySelector("#points-points");
  let currentATKPoints = Number(atkPointsElement.textContent);
  let currentAvailablePoints = Number(pointsPointsElement.textContent);

  currentATKPoints++;
  currentAvailablePoints--;

  if (currentAvailablePoints >= 0 && currentATKPoints <= 200) {
    atkPointsElement.textContent = currentATKPoints;
    pointsPointsElement.textContent = currentAvailablePoints;
  } else {
    clearInterval(intervalId);
  }
}

function increaseDEF() {
  const defPointsElement = document.querySelector("#def-points");
  const pointsPointsElement = document.querySelector("#points-points");
  let currentDEFPoints = Number(defPointsElement.textContent);
  let currentAvailablePoints = Number(pointsPointsElement.textContent);

  currentDEFPoints++;
  currentAvailablePoints--;

  if (currentAvailablePoints >= 0 && currentDEFPoints <= 200) {
    defPointsElement.textContent = currentDEFPoints;
    pointsPointsElement.textContent = currentAvailablePoints;
  } else {
    clearInterval(intervalId);
  }
}

function increaseSPD() {
  const spdPointsElement = document.querySelector("#spd-points");
  const pointsPointsElement = document.querySelector("#points-points");
  let currentSPDPoints = Number(spdPointsElement.textContent);
  let currentAvailablePoints = Number(pointsPointsElement.textContent);

  currentSPDPoints++;
  currentAvailablePoints--;

  if (currentAvailablePoints >= 0 && currentSPDPoints <= 200) {
    spdPointsElement.textContent = currentSPDPoints;
    pointsPointsElement.textContent = currentAvailablePoints;
  } else {
    clearInterval(intervalId);
  }
}

increaseHPButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    pressed = true;
    increaseHP();
  }, 100);
});

increaseHPButton.addEventListener("mouseup", () => {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
});

increaseATKButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    pressed = true;
    increaseATK();
  }, 100);
});

increaseATKButton.addEventListener("mouseup", () => {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
});

increaseDEFButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    pressed = true;
    increaseDEF();
  }, 100);
});

increaseDEFButton.addEventListener("mouseup", () => {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
});

increaseSPDButton.addEventListener("mousedown", () => {
  intervalId = setInterval(() => {
    pressed = true;
    increaseSPD();
  }, 100);
});

increaseSPDButton.addEventListener("mouseup", () => {
  setTimeout(() => {
    pressed = false;
  }, 1000);

  clearInterval(intervalId);
});