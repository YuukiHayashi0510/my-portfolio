// 要素を取得
const myName = document.getElementById("my-name");
const imageElement = document.getElementById("image");
const wakeupButton = document.getElementById("wakeup-button");
const backButton = document.getElementById("back-button");
const body = document.getElementById("body");
const animeImage = document.getElementById("anime-image");
const codeGeass = document.getElementById("code-geass");
const geassButton = document.getElementById("geass");
const rebornMessage = document.getElementById("reborn-message");

// 真偽値
let transName = false;
let isWakeup = false;
let isReborn = false;

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
  imageElement.alt = "エヴァンゲリオン初号期擬似シン化";
  wakeupButton.hidden = true;
  backButton.hidden = false;
  imageElement.scrollIntoView({ behavior: "smooth" });
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
  if (isReborn === false) {
    animeImage.src = "./images/eva01.png";
  }
  isWakeup = false;
  wakeupButton.hidden = false;
  backButton.hidden = true;
  imageElement.scrollIntoView({ behavior: "smooth" });
};

codeGeass.onmouseover = function () {
  if (isReborn === false) {
    animeImage.src = "./images/lelouch.jpeg";
  }
};

geassButton.onclick = function () {
  animeImage.src = "./images/lelouch2.webp";
  isReborn = true;
  geassButton.hidden = true;
  rebornMessage.hidden = false;
};
