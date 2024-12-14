const countSec = document.querySelector("#count-sec");
const countMin = document.querySelector("#count-min");
const countHour = document.querySelector("#count-hour");

const btnElement1 = document.querySelector(".btn-1");
const btnElement2 = document.querySelector(".btn-2");

let count = 0;
let countM = 0;
let countH = 0;

function updateTimer() {
  count++;

  // minute update
  if (count === 60) {
    count = 0;
    countM++;
    // hour update
    if (countM === 60) {
      countM = 0;
      countH++;
    }
  }
  countSec.textContent = count < 10 ? `0${count}` : count;
  countMin.textContent = countM < 10 ? `0${countM}:` : `${countM}:`;
  countHour.textContent = countH < 10 ? `0${countH}:` : `${countH}:`;
}

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

startTimer();

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
        startTimer();
        btnElement1.textContent = "Stop";
});
