// ==========================================
// SECURE THE SMART HOME
// IoT CYBERSECURITY GAME
// ==========================================


// ==========================================
// GAME SETTINGS
// ==========================================

const GAME_TIME = 30;

const QUESTIONS_PER_GAME = 10;

const PASS_SCORE = 6;

const CORRECT_POINTS = 10;

const WRONG_POINTS = 5;


// ==========================================
// QUESTION BANK
// ==========================================

const questionBank = [

    {
        question:
            "A new smart camera still uses its factory password. What should you do?",

        answers: [
            "Change the default password",
            "Keep the factory password",
            "Share the password with friends",
            "Disable password protection"
        ],

        correct: 0,

        explanation:
            "Default passwords are commonly targeted. Replace them with a strong unique password."
    },

    {
        question:
            "Your smart speaker has an official firmware update available. What should you do?",

        answers: [
            "Install the official firmware update",
            "Ignore all updates forever",
            "Download firmware from an unknown website",
            "Disable device security"
        ],

        correct: 0,

        explanation:
            "Official firmware updates can patch known security vulnerabilities."
    },

    {
        question:
            "Where should smart IoT devices ideally be placed on your network?",

        answers: [
            "On a separate IoT network or VLAN",
            "On an open public Wi-Fi network",
            "On every available network",
            "Directly exposed to the internet"
        ],

        correct: 0,

        explanation:
            "Network segmentation can isolate IoT devices from more sensitive systems."
    },

    {
        question:
            "Your smart-home account supports multi-factor authentication. What should you do?",

        answers: [
            "Enable MFA",
            "Disable MFA",
            "Share verification codes",
            "Use only a simple password"
        ],

        correct: 0,

        explanation:
            "MFA adds another authentication step if your password is compromised."
    },

    {
        question:
            "You never use remote access on your smart camera. What is the safer option?",

        answers: [
            "Disable unnecessary remote access",
            "Leave remote access permanently open",
            "Remove authentication",
            "Make the camera publicly accessible"
        ],

        correct: 0,

        explanation:
            "Disabling unused remote access reduces unnecessary exposure."
    },

    {
        question:
            "You receive an unexpected email asking for your smart-home password. What should you do?",

        answers: [
            "Do not provide the password",
            "Reply with the password",
            "Send your MFA code",
            "Send your router password too"
        ],

        correct: 0,

        explanation:
            "Unexpected credential requests may be phishing attempts."
    },

    {
        question:
            "Your smart lock and camera currently use the same password. What is safer?",

        answers: [
            "Give each account a unique password",
            "Keep the same password everywhere",
            "Remove both passwords",
            "Share the password with visitors"
        ],

        correct: 0,

        explanation:
            "Unique passwords reduce the impact if one credential is compromised."
    },

    {
        question:
            "An unknown IoT device suddenly appears on your home network. What should you do?",

        answers: [
            "Investigate and isolate the device",
            "Automatically trust the device",
            "Give it administrator access",
            "Give it your Wi-Fi password"
        ],

        correct: 0,

        explanation:
            "Unknown devices should be investigated before being trusted."
    },

    {
        question:
            "Which Wi-Fi setup is safer for a smart home?",

        answers: [
            "Modern encryption with a strong password",
            "Open Wi-Fi with no password",
            "A password of 123456",
            "Disable Wi-Fi security"
        ],

        correct: 0,

        explanation:
            "Strong authentication and modern encryption help prevent unauthorised network access."
    },

    {
        question:
            "Your router administrator password is still 'admin'. What should you do?",

        answers: [
            "Change it to a strong unique password",
            "Keep using admin",
            "Remove authentication",
            "Tell visitors the password"
        ],

        correct: 0,

        explanation:
            "Default administrator credentials should be replaced."
    },

    {
        question:
            "A smart light requests access to files on your laptop. What is the safer response?",

        answers: [
            "Block unnecessary access",
            "Give it full laptop access",
            "Disable the laptop firewall",
            "Give it administrator privileges"
        ],

        correct: 0,

        explanation:
            "IoT devices should only have permissions needed for their intended function."
    },

    {
        question:
            "Your smart camera no longer receives manufacturer security updates. What should you consider?",

        answers: [
            "Replacing the unsupported device",
            "Removing its password",
            "Exposing it directly to the internet",
            "Ignoring security permanently"
        ],

        correct: 0,

        explanation:
            "Unsupported devices may remain vulnerable because new security patches are unavailable."
    },

    {
        question:
            "Which password is the strongest choice for an IoT administrator account?",

        answers: [
            "A long and unique password",
            "password",
            "12345678",
            "admin"
        ],

        correct: 0,

        explanation:
            "Long unique passwords are harder to guess and reduce password reuse risk."
    },

    {
        question:
            "A smart-home app requests permissions it does not need. What should you do?",

        answers: [
            "Deny unnecessary permissions",
            "Allow every permission",
            "Give it administrator access",
            "Disable phone security"
        ],

        correct: 0,

        explanation:
            "Applications should only receive permissions necessary for their intended function."
    },

    {
        question:
            "You suspect your smart camera has been compromised. What should you do first?",

        answers: [
            "Isolate it from the network",
            "Ignore the warning",
            "Give it more permissions",
            "Expose it to the internet"
        ],

        correct: 0,

        explanation:
            "Isolation can limit further communication while a suspicious device is investigated."
    },

    {
        question:
            "What is the purpose of using a separate IoT VLAN?",

        answers: [
            "Separate IoT traffic from sensitive systems",
            "Remove all passwords",
            "Make every device publicly accessible",
            "Automatically trust every device"
        ],

        correct: 0,

        explanation:
            "A separate VLAN helps restrict communication between IoT devices and other network segments."
    },

    {
        question:
            "An IoT device has services enabled that you never use. What should you do?",

        answers: [
            "Disable unnecessary services",
            "Enable even more services",
            "Remove authentication",
            "Expose every service publicly"
        ],

        correct: 0,

        explanation:
            "Unused services can increase the attack surface."
    },

    {
        question:
            "Your smart-home account reports a login you do not recognise. What should you do?",

        answers: [
            "Investigate and secure the account",
            "Automatically ignore it",
            "Disable security alerts",
            "Post your password online"
        ],

        correct: 0,

        explanation:
            "Unexpected account activity should be investigated."
    },

    {
        question:
            "Where should you download your smart-home application from?",

        answers: [
            "An official or trusted source",
            "A random download website",
            "An unknown email attachment",
            "A link sent by a stranger"
        ],

        correct: 0,

        explanation:
            "Trusted application sources reduce the risk of installing malicious software."
    },

    {
        question:
            "You are setting up a new smart door lock. Which approach is safer?",

        answers: [
            "Change defaults and install official updates",
            "Keep all factory settings",
            "Disable authentication",
            "Share administrator access"
        ],

        correct: 0,

        explanation:
            "Changing insecure defaults and applying updates are important security steps."
    },

    {
        question:
            "An IoT device suddenly starts generating unusual network traffic. What should you do?",

        answers: [
            "Investigate the device and its traffic",
            "Automatically ignore it",
            "Disable monitoring",
            "Give it more network permissions"
        ],

        correct: 0,

        explanation:
            "Unexpected network activity can indicate compromise or misconfiguration."
    },

    {
        question:
            "Why should IoT devices have limited network permissions?",

        answers: [
            "To reduce what an attacker could access",
            "To remove the need for passwords",
            "To expose more network services",
            "To give everyone administrator access"
        ],

        correct: 0,

        explanation:
            "Limited permissions can reduce the impact of a compromised device."
    },

    {
        question:
            "Your smart camera supports encrypted communication. What should you prefer?",

        answers: [
            "Encrypted communication",
            "Unencrypted communication",
            "No authentication",
            "Public access"
        ],

        correct: 0,

        explanation:
            "Encryption helps protect information while it travels across the network."
    },

    {
        question:
            "You no longer use an old IoT device. What should you do?",

        answers: [
            "Remove or securely decommission it",
            "Leave it connected forever",
            "Expose it publicly",
            "Give it administrator access"
        ],

        correct: 0,

        explanation:
            "Unused connected devices can create unnecessary security exposure."
    },

    {
        question:
            "What does a network firewall help do?",

        answers: [
            "Control network traffic using security rules",
            "Share passwords with devices",
            "Disable network security",
            "Make every internal device public"
        ],

        correct: 0,

        explanation:
            "A firewall controls permitted network communication based on configured rules."
    },

    {
        question:
            "Someone asks you for your MFA verification code. What should you do?",

        answers: [
            "Never share the verification code",
            "Send them the code",
            "Post the code publicly",
            "Disable MFA"
        ],

        correct: 0,

        explanation:
            "Authentication codes should remain private."
    },

    {
        question:
            "Your smart door lock has default administrator credentials. What should you do?",

        answers: [
            "Change the default credentials",
            "Keep the defaults forever",
            "Write the credentials publicly",
            "Disable authentication"
        ],

        correct: 0,

        explanation:
            "Default credentials are commonly known and should be replaced."
    },

    {
        question:
            "What does the principle of least privilege mean for an IoT device?",

        answers: [
            "Give it only the access it needs",
            "Give it administrator access",
            "Give it access to every network",
            "Disable all authentication"
        ],

        correct: 0,

        explanation:
            "Least privilege limits devices to only the access necessary for their function."
    },

    {
        question:
            "Your smart camera repeatedly contacts an unknown internet server. What should you do?",

        answers: [
            "Investigate and isolate the camera",
            "Disable security alerts",
            "Ignore the activity",
            "Give the camera more access"
        ],

        correct: 0,

        explanation:
            "Unexpected external communication should be investigated."
    },

    {
        question:
            "Which action can limit an attacker's movement if one IoT device becomes compromised?",

        answers: [
            "Network segmentation",
            "Password sharing",
            "Open Wi-Fi",
            "Disabling the firewall"
        ],

        correct: 0,

        explanation:
            "Network segmentation can restrict movement between different parts of a network."
    }

];


// ==========================================
// ELEMENTS
// ==========================================

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const winScreen =
    document.getElementById("winScreen");

const loseScreen =
    document.getElementById("loseScreen");


const startBtn =
    document.getElementById("startBtn");

const playAgainBtn =
    document.getElementById("playAgainBtn");

const retryBtn =
    document.getElementById("retryBtn");


const timerElement =
    document.getElementById("timer");

const scoreElement =
    document.getElementById("score");

const questionCounter =
    document.getElementById("questionCounter");

const correctCounter =
    document.getElementById("correctCounter");


const hackerPercent =
    document.getElementById("hackerPercent");

const hackerFill =
    document.getElementById("hackerFill");


const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const securityOptions =
    document.getElementById("securityOptions");


const feedback =
    document.getElementById("feedback");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");


// ==========================================
// VARIABLES
// ==========================================

let selectedQuestions = [];

let currentQuestionIndex = 0;

let correctAnswers = 0;

let score = 0;

let timeLeft = GAME_TIME;

let hackerProgress = 30;

let gameRunning = false;

let timerInterval = null;


// ==========================================
// SHUFFLE
// ==========================================

function shuffle(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] = [
            shuffled[j],
            shuffled[i]
        ];
    }

    return shuffled;
}


// ==========================================
// SCREEN
// ==========================================

function showScreen(screen) {

    startScreen.classList.remove("active");

    gameScreen.classList.remove("active");

    winScreen.classList.remove("active");

    loseScreen.classList.remove("active");


    screen.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// START
// ==========================================

function startGame() {

    clearInterval(timerInterval);


    // Randomly select 10 of the 30 questions

    selectedQuestions =
        shuffle(questionBank)
            .slice(
                0,
                QUESTIONS_PER_GAME
            );


    currentQuestionIndex = 0;

    correctAnswers = 0;

    score = 0;

    timeLeft = GAME_TIME;

    hackerProgress = 30;

    gameRunning = true;


    resetDevices();


    timerElement.style.color = "";


    feedback.className =
        "feedback";


    showScreen(gameScreen);


    updateDisplay();

    loadQuestion();


    // ======================================
    // 30 SECOND TIMER
    // ======================================

    timerInterval =
        setInterval(() => {

            if (!gameRunning) {
                return;
            }


            // Timer ONLY goes down.

            timeLeft--;


            if (timeLeft < 0) {
                timeLeft = 0;
            }


            // Hacker slowly moves forward
            // every second.

            hackerProgress += 1;


            if (hackerProgress > 100) {
                hackerProgress = 100;
            }


            updateDisplay();


            // Red timer warning

            if (timeLeft <= 10) {

                timerElement.style.color =
                    "#ff405c";

            }


            // Time expired

            if (timeLeft <= 0) {

                loseGame(
                    "Time expired! The hacker reached the smart home before you completed the challenge."
                );

                return;
            }


            // Hacker reached network

            if (hackerProgress >= 100) {

                loseGame(
                    "The hacker reached 100% progress and compromised the smart home network."
                );
            }

        }, 1000);
}


// ==========================================
// LOAD QUESTION
// ==========================================

function loadQuestion() {

    if (!gameRunning) {
        return;
    }


    if (
        currentQuestionIndex >=
        QUESTIONS_PER_GAME
    ) {

        finishGame();

        return;
    }


    const question =
        selectedQuestions[
            currentQuestionIndex
        ];


    questionNumber.textContent =
        `SECURITY QUESTION ${currentQuestionIndex + 1}`;


    questionText.textContent =
        question.question;


    securityOptions.innerHTML = "";


    feedback.className =
        "feedback";


    questionCounter.textContent =
        `${currentQuestionIndex + 1}/${QUESTIONS_PER_GAME}`;


    // ======================================
    // PREPARE ANSWERS
    // ======================================

    const answerObjects =
        question.answers.map(
            (answer, index) => {

                return {

                    text: answer,

                    correct:
                        index ===
                        question.correct
                };
            }
        );


    // Randomise answers too

    const randomAnswers =
        shuffle(answerObjects);


    const letters =
        ["A", "B", "C", "D"];


    // ======================================
    // CREATE BUTTONS
    // ======================================

    randomAnswers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "security-option";


            button.innerHTML = `

                <span class="answer-letter">
                    ${letters[index]}
                </span>

                <strong>
                    ${answer.text}
                </strong>

            `;


            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        answer.correct,
                        button,
                        question.explanation
                    );
                }
            );


            securityOptions.appendChild(
                button
            );
        }
    );
}


// ==========================================
// ANSWER
// ==========================================

function answerQuestion(
    isCorrect,
    selectedButton,
    explanation
) {

    if (!gameRunning) {
        return;
    }


    // Prevent double clicking.

    const buttons =
        securityOptions
            .querySelectorAll(
                ".security-option"
            );


    buttons.forEach(
        button => {

            button.disabled = true;
        }
    );


    // ======================================
    // CORRECT
    // ======================================

    if (isCorrect) {

        score +=
            CORRECT_POINTS;


        correctAnswers++;


        // Push hacker backwards.
        // THIS DOES NOT CHANGE TIME.

        hackerProgress -= 7;


        if (hackerProgress < 0) {
            hackerProgress = 0;
        }


        selectedButton
            .classList.add(
                "correct"
            );


        feedback.className =
            "feedback show correct";


        feedbackTitle.textContent =
            "✓ CORRECT! +10 POINTS";


        feedbackText.textContent =
            explanation;


        protectRandomDevice();
    }


    // ======================================
    // WRONG
    // ======================================

    else {

        score -=
            WRONG_POINTS;


        hackerProgress += 15;


        if (hackerProgress > 100) {
            hackerProgress = 100;
        }


        selectedButton
            .classList.add(
                "wrong"
            );


        // Show the correct answer.

        buttons.forEach(
            button => {

                const buttonText =
                    button
                        .querySelector("strong")
                        .textContent
                        .trim();


                const question =
                    selectedQuestions[
                        currentQuestionIndex
                    ];


                const correctText =
                    question.answers[
                        question.correct
                    ];


                if (
                    buttonText ===
                    correctText
                ) {

                    button.classList.add(
                        "correct"
                    );
                }
            }
        );


        feedback.className =
            "feedback show wrong";


        feedbackTitle.textContent =
            "✕ WRONG! -5 POINTS";


        feedbackText.textContent =
            explanation;


        attackRandomDevice();
    }


    currentQuestionIndex++;


    updateDisplay();


    // Hacker reached 100%.

    if (hackerProgress >= 100) {

        setTimeout(
            () => {

                loseGame(
                    "The hacker reached 100% progress and compromised the smart home network."
                );

            },
            700
        );

        return;
    }


    // Next random question.

    setTimeout(
        loadQuestion,
        850
    );
}


// ==========================================
// UPDATE DISPLAY
// ==========================================

function updateDisplay() {

    timerElement.textContent =
        timeLeft;


    scoreElement.textContent =
        score;


    correctCounter.textContent =
        correctAnswers;


    hackerProgress =
        Math.max(
            0,
            Math.min(
                100,
                hackerProgress
            )
        );


    hackerFill.style.width =
        hackerProgress + "%";


    hackerPercent.textContent =
        hackerProgress + "%";


    if (hackerProgress >= 75) {

        hackerPercent.style.color =
            "#ff405c";

    }

    else if (hackerProgress >= 45) {

        hackerPercent.style.color =
            "#ff9f32";

    }

    else {

        hackerPercent.style.color =
            "#28df78";
    }
}


// ==========================================
// PROTECT DEVICE
// ==========================================

function protectRandomDevice() {

    const devices =
        [
            ...document.querySelectorAll(
                ".device-card"
            )
        ];


    const availableDevices =
        devices.filter(
            device =>
                !device.classList
                    .contains(
                        "protected"
                    )
        );


    if (
        availableDevices.length === 0
    ) {
        return;
    }


    const device =
        availableDevices[
            Math.floor(
                Math.random() *
                availableDevices.length
            )
        ];


    device.classList.add(
        "protected"
    );


    device.style.borderColor =
        "#28df78";


    device.style.boxShadow =
        "0 0 20px rgba(40,223,120,.3)";


    const status =
        device.querySelector(
            ".device-status"
        );


    status.textContent =
        "PROTECTED";


    status.style.color =
        "#28df78";
}


// ==========================================
// ATTACK DEVICE
// ==========================================

function attackRandomDevice() {

    const devices =
        [
            ...document.querySelectorAll(
                ".device-card"
            )
        ];


    const device =
        devices[
            Math.floor(
                Math.random() *
                devices.length
            )
        ];


    const status =
        device.querySelector(
            ".device-status"
        );


    const wasProtected =
        device.classList.contains(
            "protected"
        );


    device.style.borderColor =
        "#ff405c";


    device.style.boxShadow =
        "0 0 25px rgba(255,64,92,.4)";


    status.textContent =
        "UNDER ATTACK";


    status.style.color =
        "#ff405c";


    // Return device to previous state.

    setTimeout(
        () => {

            if (!gameRunning) {
                return;
            }


            if (wasProtected) {

                device.style.borderColor =
                    "#28df78";


                device.style.boxShadow =
                    "0 0 20px rgba(40,223,120,.3)";


                status.textContent =
                    "PROTECTED";


                status.style.color =
                    "#28df78";

            } else {

                device.style.borderColor =
                    "";


                device.style.boxShadow =
                    "";


                status.textContent =
                    "ONLINE";


                status.style.color =
                    "";
            }

        },
        700
    );
}


// ==========================================
// FINISH GAME
// ==========================================

function finishGame() {

    if (!gameRunning) {
        return;
    }


    if (
        correctAnswers >=
        PASS_SCORE
    ) {

        winGame();

    } else {

        loseGame(
            `You answered ${correctAnswers} of 10 correctly. You need at least ${PASS_SCORE} correct answers to secure the smart home.`
        );
    }
}


// ==========================================
// WIN
// ==========================================

function winGame() {

    if (!gameRunning) {
        return;
    }


    gameRunning = false;


    clearInterval(
        timerInterval
    );


    // IMPORTANT:
    // No time bonus.
    // No time is added for correct answers.

    const timeUsed =
        GAME_TIME -
        timeLeft;


    document
        .getElementById(
            "finalScore"
        )
        .textContent =
            score;


    document
        .getElementById(
            "finalCorrect"
        )
        .textContent =
            `${correctAnswers}/10`;


    document
        .getElementById(
            "finalTime"
        )
        .textContent =
            `${timeUsed}s`;


    showScreen(
        winScreen
    );
}


// ==========================================
// LOSE
// ==========================================

function loseGame(reason) {

    if (!gameRunning) {
        return;
    }


    gameRunning = false;


    clearInterval(
        timerInterval
    );


    document
        .getElementById(
            "loseScore"
        )
        .textContent =
            score;


    document
        .getElementById(
            "loseCorrect"
        )
        .textContent =
            `${correctAnswers}/10`;


    document
        .getElementById(
            "loseProgress"
        )
        .textContent =
            `${hackerProgress}%`;


    document
        .getElementById(
            "loseReason"
        )
        .textContent =
            reason;


    showScreen(
        loseScreen
    );
}


// ==========================================
// RESET DEVICES
// ==========================================

function resetDevices() {

    const devices =
        document.querySelectorAll(
            ".device-card"
        );


    devices.forEach(
        device => {

            device.classList.remove(
                "protected"
            );


            device.style.borderColor =
                "";


            device.style.boxShadow =
                "";


            const status =
                device.querySelector(
                    ".device-status"
                );


            status.textContent =
                "ONLINE";


            status.style.color =
                "";
        }
    );
}


// ==========================================
// BUTTON EVENTS
// ==========================================

startBtn.addEventListener(
    "click",
    startGame
);


playAgainBtn.addEventListener(
    "click",
    startGame
);


retryBtn.addEventListener(
    "click",
    startGame
);
