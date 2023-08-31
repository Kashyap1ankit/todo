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
const modal = document.querySelectorAll(".modal");
const crossArray = document.querySelectorAll(".cross");

//Signup all buttons

const signupModal = document.querySelector(".signup-modal");
const signupUsername = document.getElementById("username");
const signupEmail = document.getElementById("email");
const signupPassword = document.getElementById("password");
const signupButton = document.querySelector(".signup-btn");
const signIn = document.querySelector(".sign-in");
const forgetPassowrd = document.querySelectorAll(".forget-password");

//Login all buttons

const loginModal = document.querySelector(".login-modal");
// const loginCross = document.querySelector(".login-cross");
const loginUsername = document.getElementById("login-username");
const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.querySelector(".login-btn");
const createAccount = document.querySelector(".create-account");
const wrongDetails = document.querySelector(".wrong-details");

//Forget password modal

const forgetModal = document.querySelector(".forget-password-modal");
const forgetUsername = document.getElementById("forget-username");
const forgetPassword = document.getElementById("new-login-password");
const forgetButton = document.querySelector(".set-password");
const forgetWrong = document.querySelector(".forget-password-wrong");

//Mobile Navigation selection

const mobNav = document.querySelector(".mobile-nav");
const threeLiner = document.querySelector(".three-liner");
const mobCross = document.querySelector(".mob-cross");
const mobLoginSignup = document.querySelector(".mob-login-signup");
const mobLogin = document.querySelector(".mob-login");
const mobSignup = document.querySelector(".mob-signup");

//1.Function to load the spinner activity

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
  mobNav.style.filter = "blur(10px)";
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
  mobNav.style.filter = "blur(0px)";
};

const loadSpinner = function () {
  spinner.classList.remove("hidden");
  blurIn();

  setTimeout(function () {
    spinner.classList.add("hidden");
    blurOut();
    // blurIn();
  }, 3000);
};

let checkUsername,
  checkPassword,
  checkEmail,
  storeUsername,
  storeEmail,
  storePassword,
  userData = [];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.When page loads then a load spinner works

window.addEventListener("load", function () {
  loadSpinner();
  getData();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.All revealing feature

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.Signup-Login button features

//get the signup modal feature

const signupButtonsArray = [
  navSignup,
  startScrollBtn,
  createAccount,
  mobSignup,
];

signupButtonsArray.forEach(function (e) {
  e.addEventListener("click", function (eve) {
    loginModal.classList.add("hidden");
    forgetModal.classList.add("hidden");
    signupModal.classList.remove("hidden");
    mobLoginSignup.classList.add("hidden");
    blurIn();
  });
});

//Login modal open feature

const loginModalArray = [navLogin, signIn, mobLogin];

loginModalArray.forEach(function (e) {
  e.addEventListener("click", function (eve) {
    signupModal.classList.add("hidden");
    loginModal.classList.remove("hidden");
    mobLoginSignup.classList.add("hidden");
    blurIn();
  });
});

//Cross button feature

crossArray.forEach(function (e) {
  e.addEventListener("click", function (eve) {
    eve.target.closest(".modal").classList.add("hidden");
    blurOut();
  });
});

//Forget Modal feature

forgetPassowrd.forEach(function (e) {
  e.addEventListener("click", function (eve) {
    forgetModal.classList.remove("hidden");
    wrongDetails.classList.add("hidden");
    loginModal.classList.add("hidden");
    signupModal.classList.add("hidden");
  });
});

//Storing the data when users gets signup

const storeData = function () {
  storeUsername = signupUsername.value;
  storeEmail = signupEmail.value;
  storePassword = signupPassword.value;

  setData();
};

signupButton.addEventListener("click", storeData);

//Checking details when user login

const crossCheckData = function () {
  getData();

  if (
    loginUsername.value === checkUsername &&
    loginPassword.value === checkPassword
  )
    window.location = "http://192.168.16.129:5500/weather/index.html";
  else wrongDetails.classList.remove("hidden");

  loginUsername.value = "";
  loginEmail.value = "";
  loginPassword.value = "";
};

loginButton.addEventListener("click", crossCheckData);

//Forget Password

const forgetPassowrdChecker = function () {
  if (forgetUsername.value === checkUsername) {
    storeUsername = checkUsername;
    storeEmail = checkEmail;
    storePassword = forgetPassword.value;
    setData();
  } else {
    forgetUsername.value = "";
    forgetPassword.value = "";
    forgetWrong.classList.remove("hidden");
  }
};

forgetButton.addEventListener("click", forgetPassowrdChecker);

const setData = function () {
  userData = [storeUsername, storeEmail, storePassword];

  localStorage.clear("Userdetails");

  localStorage.setItem("Userdetails", JSON.stringify(userData));

  signupModal.classList.add("hidden");
  loginModal.classList.remove("hidden");
  forgetModal.classList.add("hidden");

  signupUsername.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
};

const getData = function () {
  const loginDetail = JSON.parse(localStorage.getItem("Userdetails"));

  checkUsername = loginDetail[0];
  checkEmail = loginDetail[1];
  checkPassword = loginDetail[2];
};

//Mobile features

threeLiner.addEventListener("click", function () {
  mobLoginSignup.classList.remove("hidden");
});

mobCross.addEventListener("click", function () {
  mobLoginSignup.classList.add("hidden");
});
