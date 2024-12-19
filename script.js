const countSec = document.querySelector("#count-sec");
const countMin = document.querySelector("#count-min");
const countHour = document.querySelector("#count-hour");

const btnElement1 = document.querySelector(".btn-1");
const btnElement2 = document.querySelector(".btn-2");

const myObj = {
    count: 0,
    countM: 0,
    countH: 0,
};
const storedObj = localStorage.getItem("obj");
const parsedObj = storedObj ? JSON.parse(storedObj) : myObj;

let { count, countM, countH } = parsedObj;
let intervalId;

// Set initial display
countSec.textContent = count < 10 ? `0${count}` : count;
countMin.textContent = countM < 10 ? `0${countM}:` : `${countM}:`;
countHour.textContent = countH < 10 ? `0${countH}:` : `${countH}:`;

function updateTimer() {
    count++;

    // Minute update
    if (count === 60) {
        count = 0;
        countM++;
        // Hour update
        if (countM === 60) {
            countM = 0;
            countH++;
        }
    }

    // Update display
    countSec.textContent = (count < 10 )? `0${count}` : count;
    countMin.textContent = (countM < 10 )? `0${countM}:` : `${countM}:`;
    countHour.textContent = (countH < 10 )? `0${countH}:` : `${countH}:`;

    // Save to localStorage
    localStorage.setItem("obj", JSON.stringify({ count, countM, countH }));
}

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

btnElement1.addEventListener("click", () => {
    if (btnElement1.textContent === "Stop") {
        stopTimer();
        btnElement1.textContent = "Resume";
    } else if (btnElement1.textContent === "Resume") {
        startTimer();
        btnElement1.textContent = "Stop";
    }
});

btnElement2.addEventListener("click", () => {
    stopTimer();
    count = 0;
    countM = 0;
    countH = 0;
    countSec.textContent = "00";
    countMin.textContent = "00:";
    countHour.textContent = "00:";
    localStorage.setItem("obj", JSON.stringify({ count, countM, countH }));
    startTimer();
    btnElement1.textContent = "Stop";
});

// Start the timer initially
startTimer();
