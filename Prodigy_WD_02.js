let startTime;
let running = false;
let lapCount = 1;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        running = true;
        document.getElementById("startBtn").innerHTML = "Stop";
        updateDisplay();
        runStopwatch();
    } else {
        running = false;
        document.getElementById("startBtn").innerHTML = "Resume";
    }
}

function runStopwatch() {
    if (running) {
        setTimeout(function () {
            updateDisplay();
            runStopwatch();
        }, 1000);
    }
}

function updateDisplay() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours();
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();

    const display = document.getElementById("display");
    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function recordLap() {
    if (running) {
        const lapsContainer = document.getElementById("laps");
        const lapTime = document.getElementById("display").innerHTML;
        const lapItem = document.createElement("li");
        lapItem.innerHTML = `Lap ${lapCount}: ${lapTime}`;
        lapsContainer.appendChild(lapItem);
        lapCount++;
    }
}

function resetStopwatch() {
    running = false;
    startTime = 0;
    lapCount = 1;
    document.getElementById("startBtn").innerHTML = "Start";
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}
