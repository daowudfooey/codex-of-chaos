"use strict";

console.log("Codex of Chaos loaded.");

const button = document.querySelector(".summon-button");
const cover = document.querySelector(".forgot-cover");

button.addEventListener("click", () => {
    cover.style.opacity = "0";
});