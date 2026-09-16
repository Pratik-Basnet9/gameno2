// ==========================================
// SECURE THE SMART HOME
// IoT Cybersecurity Challenge
// ==========================================

// ------------------------------------------
// GAME CONFIGURATION
// ------------------------------------------

const GAME_TIME = 60;

const correctActions = ["password", "firmware", "vlan"];

const explanations = {
  password:
    "Correct! Default passwords are commonly targeted by attackers. A strong unique password improves device security.",

  firmware:
    "Correct! Firmware updates can patch known security vulnerabilities.",

  vlan: "Correct! Separating IoT devices onto their own network limits access to other devices.",

  share:
    "Wrong! Sharing network passwords increases the risk of unauthorised access.",

  remote: "Wrong! Unnecessary remote access increases the attack surface.",

  samepassword:
    "Wrong! Reusing the same password means one compromised password could expose multiple devices.",
};

// ------------------------------------------
// HTML ELEMENTS
// ------------------------------------------

const startScreen = document.getElementById("startScreen");

const gameScreen = document.getElementById("gameScreen");

const winScreen = document.getElementById("winScreen");

const loseScreen = document.getElementById("loseScreen");

const startBtn = document.getElementById("startBtn");

const playAgainBtn = document.getElementById("playAgainBtn");

const retryBtn = document.getElementById("retryBtn");

const timerElement = document.getElementById("timer");

const scoreElement = document.getElementById("score");

const securedCountElement = document.getElementById("securedCount");

const hackerPercentElement = document.getElementById("hackerPercent");

const hackerFill = document.getElementById("hackerFill");

const feedback = document.getElementById("feedback");

const feedbackTitle = document.getElementById("feedbackTitle");

const feedbackText = document.getElementById("feedbackText");

const securityButtons = document.querySelectorAll(".security-option");

// ------------------------------------------
// GAME VARIABLES
// ------------------------------------------

let timeLeft = GAME_TIME;

let score = 0;

let securedActions = 0;

let hackerProgress = 50;

let gameRunning = false;

let timerInterval = null;

// ------------------------------------------
// SCREEN CONTROL
// ------------------------------------------

function showScreen(screen) {
  startScreen.classList.remove("active");
  gameScreen.classList.remove("active");
  winScreen.classList.remove("active");
  loseScreen.classList.remove("active");

  screen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ------------------------------------------
// START GAME
// ------------------------------------------

function startGame() {
  clearInterval(timerInterval);

  timeLeft = GAME_TIME;

  score = 0;

  securedActions = 0;

  hackerProgress = 50;

  gameRunning = true;

  // Reset buttons

  securityButtons.forEach((button) => {
    button.disabled = false;

    button.classList.remove("correct", "wrong");
  });

  // Reset feedback

  feedback.className = "feedback";

  feedbackTitle.textContent = "";

  feedbackText.textContent = "";

  // Reset statistics

  updateDisplay();

  // Open game

  showScreen(gameScreen);

  // Start countdown

  timerInterval = setInterval(() => {
    if (!gameRunning) {
      return;
    }

    timeLeft--;

    timerElement.textContent = timeLeft;

    // Hacker slowly gets closer

    if (timeLeft % 5 === 0) {
      hackerProgress += 3;

      updateHackerMeter();
    }

    // Timer warning

    if (timeLeft <= 10) {
      timerElement.style.color = "#ff405c";
    } else {
      timerElement.style.color = "";
    }

    // Time expired

    if (timeLeft <= 0) {
      loseGame();
    }
  }, 1000);
}

// ------------------------------------------
// SECURITY ACTION
// ------------------------------------------

function selectAction(button) {
  if (!gameRunning) {
    return;
  }

  const action = button.dataset.action;

  // Stop player selecting same option twice

  if (button.disabled) {
    return;
  }

  button.disabled = true;

  // --------------------------------------
  // CORRECT ACTION
  // --------------------------------------

  if (correctActions.includes(action)) {
    button.classList.add("correct");

    securedActions++;

    score += 10;

    // Push hacker backwards

    hackerProgress -= 15;

    hackerProgress = Math.max(0, hackerProgress);

    feedback.className = "feedback show correct";

    feedbackTitle.textContent = "✓ SECURITY IMPROVED! +10 POINTS";

    feedbackText.textContent = explanations[action];

    // Small visual effect on devices

    secureRandomDevice();

    updateDisplay();

    // Player found all three protections

    if (securedActions === 3) {
      setTimeout(() => {
        winGame();
      }, 700);
    }
  }

  // --------------------------------------
  // WRONG ACTION
  // --------------------------------------
  else {
    button.classList.add("wrong");

    score -= 5;

    if (score < 0) {
      score = 0;
    }

    // Hacker gets closer

    hackerProgress += 20;

    hackerProgress = Math.min(100, hackerProgress);

    feedback.className = "feedback show wrong";

    feedbackTitle.textContent = "✕ SECURITY RISK! -5 POINTS";

    feedbackText.textContent = explanations[action];

    attackRandomDevice();

    updateDisplay();

    // Hacker reached the network

    if (hackerProgress >= 100) {
      setTimeout(() => {
        loseGame();
      }, 700);
    }
  }
}

// ------------------------------------------
// UPDATE DISPLAY
// ------------------------------------------

function updateDisplay() {
  timerElement.textContent = timeLeft;

  scoreElement.textContent = score;

  securedCountElement.textContent = securedActions;

  updateHackerMeter();
}

// ------------------------------------------
// HACKER METER
// ------------------------------------------

function updateHackerMeter() {
  hackerProgress = Math.max(0, Math.min(100, hackerProgress));

  hackerFill.style.width = hackerProgress + "%";

  hackerPercentElement.textContent = hackerProgress + "%";

  // Change percentage colour

  if (hackerProgress >= 80) {
    hackerPercentElement.style.color = "#ff405c";
  } else if (hackerProgress >= 50) {
    hackerPercentElement.style.color = "#ff9f32";
  } else {
    hackerPercentElement.style.color = "#28df78";
  }
}

// ------------------------------------------
// DEVICE VISUAL EFFECT
// ------------------------------------------

function secureRandomDevice() {
  const devices = document.querySelectorAll(".device-card");

  const available = [...devices].filter(
    (device) => !device.classList.contains("secured"),
  );

  if (available.length === 0) {
    return;
  }

  const device = available[Math.floor(Math.random() * available.length)];

  device.classList.add("secured");

  device.style.borderColor = "#28df78";

  device.style.boxShadow = "0 0 20px rgba(40,223,120,0.25)";

  const status = device.querySelector(".device-status");

  status.textContent = "PROTECTED";

  status.style.color = "#28df78";
}

// ------------------------------------------
// ATTACK DEVICE EFFECT
// ------------------------------------------

function attackRandomDevice() {
  const devices = document.querySelectorAll(".device-card");

  const device = devices[Math.floor(Math.random() * devices.length)];

  device.style.borderColor = "#ff405c";

  device.style.boxShadow = "0 0 25px rgba(255,64,92,0.35)";

  const status = device.querySelector(".device-status");

  const oldText = status.textContent;

  status.textContent = "ATTACKED";

  status.style.color = "#ff405c";

  setTimeout(() => {
    if (!device.classList.contains("secured")) {
      device.style.borderColor = "";

      device.style.boxShadow = "";

      status.textContent = oldText;

      status.style.color = "";
    }
  }, 900);
}

// ------------------------------------------
// WIN GAME
// ------------------------------------------

function winGame() {
  if (!gameRunning) {
    return;
  }

  gameRunning = false;

  clearInterval(timerInterval);

  // Time bonus

  let timeBonus = 0;

  if (timeLeft > 0) {
    timeBonus = 20;

    score += timeBonus;
  }

  const timeUsed = GAME_TIME - timeLeft;

  document.getElementById("finalScore").textContent = score;

  document.getElementById("finalTime").textContent = timeUsed + "s";

  showScreen(winScreen);
}

// ------------------------------------------
// LOSE GAME
// ------------------------------------------

function loseGame() {
  if (!gameRunning) {
    return;
  }

  gameRunning = false;

  clearInterval(timerInterval);

  document.getElementById("loseScore").textContent = score;

  showScreen(loseScreen);
}

// ------------------------------------------
// RESET DEVICE DISPLAY
// ------------------------------------------

function resetDevices() {
  const devices = document.querySelectorAll(".device-card");

  devices.forEach((device) => {
    device.classList.remove("secured");

    device.style.borderColor = "";

    device.style.boxShadow = "";

    const status = device.querySelector(".device-status");

    status.textContent = "ONLINE";

    status.style.color = "";
  });
}

// ------------------------------------------
// BUTTON LISTENERS
// ------------------------------------------

startBtn.addEventListener("click", () => {
  resetDevices();

  startGame();
});

playAgainBtn.addEventListener("click", () => {
  resetDevices();

  startGame();
});

retryBtn.addEventListener("click", () => {
  resetDevices();

  startGame();
});

securityButtons.forEach((button) => {
  button.addEventListener("click", () => selectAction(button));
});
