// 要素を取得
const myName = document.getElementById("my-name");
const imageElement = document.getElementById("image");
const wakeupButton = document.getElementById("wakeup-button");
const backButton = document.getElementById("back-button");
const body = document.getElementById("body");
const eva = document.getElementById("eva");
const animeImage = document.getElementById("anime-image");
const codeGeass = document.getElementById("code-geass");
const geassButton = document.getElementById("geass");
const rebornMessage = document.getElementById("reborn-message");
const productImage = document.getElementById("product-image");
const tlButton = document.getElementById("tl-button");
const bookButton = document.getElementById("book-button");
const recButton = document.getElementById("rec-button");

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

eva.onmouseover = function () {
  if (isReborn === false && isWakeup === true) {
    animeImage.src = "./images/eva13.jpeg";
  }
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
  wakeupButton.hidden = true;
};

tlButton.onclick = function () {
  productImage.src = "./images/tlbackside.png";
};

bookButton.onclick = function () {
  productImage.src = "./images/firselbook.png";
};

recButton.onclick = function () {
  productImage.src = "./images/rec.png";
};
