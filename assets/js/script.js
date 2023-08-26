"use strict";

/*** Preload ***/
/** Loading Will End Once The Page Loads **/
const preloader = document.querySelector("[data-preload");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});
