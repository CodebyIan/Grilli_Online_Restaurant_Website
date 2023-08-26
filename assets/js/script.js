"use strict";

/*** Preload ***/
/** Loading Will End Once The Page Loads **/
const preloader = document.querySelector("[data-preload");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});

/*** Navbar ***/
/** Add Event Listner On Multiple Elements **/
const addEventOnElements = function (elements, eventType, callBack) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callBack);
  }
};

/** Add Class On Various Toggled Elements **/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav__active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/** Show Or Hide Header **/
const header = document.querySelector("[data-header]");
let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
  }
});
