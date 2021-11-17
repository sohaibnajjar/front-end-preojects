const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const digitalEl = document.querySelector(".digital");

const asd = setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90; // 0-59
  const minDeg = (date.getMinutes() / 60) * 360 - 90; // 0-59
  let hourDeg = (date.getHours() / 12) * 360 - 90; // 0-23

  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;

  // digital
  digitalEl.innerHTML = `the hour is ${date.getHours()} hours`;
  digitalEl.innerHTML += ` ${date.getMinutes()} mins `;
  digitalEl.innerHTML += `and ${date.getSeconds()}seconds`;
}, 1000);
