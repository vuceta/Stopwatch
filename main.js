let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

playBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 1000;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(3, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  showBtn("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showBtn("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:000");
  elapsedTime = 0;
  showBtn("PLAY");
}

function showBtn(btnKey) {
  const btnToShow = btnKey === "PLAY" ? playBtn : pauseBtn;
  const btnToHide = btnKey === "PLAY" ? pauseBtn : playBtn;
  btnToShow.style.display = "block";
  btnToHide.style.display = "none";
}
