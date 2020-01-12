"use strict";

import colors from "./colors.js";

const arrValues = {
  MIN: 0,
  MAX: colors.length - 1
};

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
};

let isActive = false;

const timer = {
  start() {
    if (isActive) {
      return;
    }

    this.timerId = setInterval(() => {
      changeBgColor();
    }, 1000);
    isActive = true;
  },
  stop() {
    clearInterval(this.timerId);
    isActive = false;
  }
};

refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeBgColor() {
  const colorindex = randomIntegerFromInterval(arrValues.MIN, arrValues.MAX);
  const selectedColor = colors[colorindex];
  refs.body.style.backgroundColor = `${selectedColor}`;
}
