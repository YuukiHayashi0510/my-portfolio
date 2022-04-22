// 要素を取得
const myName = document.getElementById("my-name");
const imageElement = document.getElementById("image");
const wakeupButton = document.getElementById("wakeup-button");
const backButton = document.getElementById("back-button");
const body = document.getElementById("body");

// 真偽値
let transName = false;
let isWakeup = false;

// setIntervalの秒数
let sec = 3;

const transitionImage = function () {
  if (isWakeup === false) {
    transName = !transName;
    transName
      ? ((imageElement.src = "./images/panda-g24e9a44c8_1920.jpeg"),
        (myName.textContent = "Rinrin_Mentor"))
      : ((imageElement.src = "./images/mia-nohara-RqKoA7A29x0-unsplash.jpeg"),
        (myName.textContent = "Yuuki Hayashi"));
  }
};

window.onload = function () {
  setInterval(transitionImage, sec * 1000);
};

wakeupButton.onclick = function () {
  imageElement.src = "./images/wakeup.png";
  isWakeup = true;
  wakeupButton.hidden = true;
  backButton.hidden = false;
  imageElement.scrollIntoView({ behavior: "smooth" });
};

backButton.onclick = function () {
  imageElement.src = "./images/mia-nohara-RqKoA7A29x0-unsplash.jpeg";
  isWakeup = false;
  wakeupButton.hidden = false;
  backButton.hidden = true;
  imageElement.scrollIntoView({ behavior: "smooth" });
};
