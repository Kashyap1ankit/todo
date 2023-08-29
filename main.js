"use strict";

//Selecting all elements of html

const nav = document.querySelector(".top-navigation");
const spinner = document.querySelector(".load");
const navLogin = document.getElementById("login");
const navSignup = document.getElementById("signup");
const intro = document.querySelector(".intro-heading");
const startScrollBtn = document.querySelector(".start-scroll-btn");
const partnerSection = document.querySelector(".partners");
const partnerSectionImage = document.querySelector(".images");
const description1 = document.querySelector(".descp-1");
const description2 = document.querySelector(".descp-2");
const exploreSection = document.querySelector(".explore");
const exploreH = document.querySelector(".explore-intro");
const cardsconatianer = document.querySelector(".cards-conatiner");
const ratingSection = document.querySelector(".rating");
const footerSection = document.querySelector(".footer");

//Function to load the spinner activity

const blurIn = function () {
  nav.style.filter = "blur(10px)";
  intro.style.filter = "blur(10px)";
  startScrollBtn.style.filter = "blur(10px)";
  partnerSection.style.filter = "blur(10px)";
  description1.style.filter = "blur(10px)";
  description2.style.filter = "blur(10px)";
  exploreSection.style.filter = "blur(10px)";
  ratingSection.style.filter = "blur(10px)";
  footerSection.style.filter = "blur(10px)";
};

const blurOut = function () {
  nav.style.filter = "blur(0px)";
  intro.style.filter = "blur(0px)";
  startScrollBtn.style.filter = "blur(0px)";
  partnerSection.style.filter = "blur(0px)";
  description1.style.filter = "blur(0px)";
  description2.style.filter = "blur(0px)";
  exploreSection.style.filter = "blur(0px)";
  ratingSection.style.filter = "blur(0px)";
  footerSection.style.filter = "blur(0px)";
};

const loadSpinner = function () {
  spinner.classList.remove("hidden");
  blurIn();

  setTimeout(function () {
    spinner.classList.add("hidden");
    blurOut();
  }, 3000);
};

//When page loads then a load spinner works

window.addEventListener("load", loadSpinner);

//Revealing the partners logo when nav is not interescting the window

const callfn = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    partnerSectionImage.classList.remove("revealfromX");
  }
};

const options = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver(callfn, options);

observer.observe(nav);

//Revealing the desc1 when nav is not interescting the window

const callfn2 = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) description1.classList.remove("reveal");
};

const options2 = {
  root: null,
  threshold: 0,
};

const observer2 = new IntersectionObserver(callfn2, options2);

observer2.observe(startScrollBtn);

//Revealing the desc2 when nav is not interescting the window

const callfn3 = function (entries) {
  const [entry] = entries;

  //   console.log(entry);

  if (entry.isIntersecting) {
    description2.classList.remove("reveal");
  }
};

const options3 = {
  root: null,
  threshold: 0.85,
};

const observer3 = new IntersectionObserver(callfn3, options3);

observer3.observe(description1);

//Revealing the explore section when nav is not interescting the window

const callfn4 = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    exploreH.classList.remove("reveal");
  }
};

const options4 = {
  root: null,
  threshold: 0.99,
};

const observer4 = new IntersectionObserver(callfn4, options4);

observer4.observe(description2);

//Revealing the explore section when nav is not interescting the window

const callfn5 = function (entries) {
  const [entry] = entries;
  //   console.log(entry);

  if (entry.isIntersecting) {
    cardsconatianer.classList.remove("revealfromX");
  }
};

const options5 = {
  root: null,
  threshold: 0.1,
};

const observer5 = new IntersectionObserver(callfn5, options5);

observer5.observe(exploreH);

//Applying the sticky naviagtion

const callnav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  if (entry.isIntersecting) nav.classList.remove("sticky");
};

const optionav = {
  root: null,
  threshold: 0,
};

const observernav = new IntersectionObserver(callnav, optionav);

observernav.observe(startScrollBtn);
