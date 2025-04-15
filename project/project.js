const navbarBefore = document.querySelector(".navbarBefore");
const navbarTextBefore = document.querySelector(".navbarTextBefore");
const githubButton = document.querySelector(".githubPage");
const buttonDownload = document.getElementById("buttonDownload");
const buttonLink = document.getElementById("buttonLink");

const buttonPopUp = document.querySelector(".popUp");
const menuPopUp = document.querySelector(".isiDivPopUp");
const popUpMenu = document.getElementById("popUpMenu");
const homePopUp = document.querySelector(".homePopUp:nth-child(1)");
const aboutPopUp = document.querySelector(".homePopUp:nth-child(2)");
const educationPopUp = document.querySelector(".homePopUp:nth-child(3)");
const projectPopUp = document.querySelector(".homePopUp:nth-child(4)");
const resumePopUp = document.querySelector(".homePopUp:nth-child(5)");
const contactPopUp = document.querySelector(".homePopUp:nth-child(6)");
const homeNav = document.querySelector(".exceptProject:nth-child(1)");

// navbar desktop
const home = document.querySelector(".navbarTextBefore a:nth-child(1)");
const about = document.querySelector(".navbarTextBefore a:nth-child(2)");
const education = document.querySelector(".navbarTextBefore a:nth-child(3)");
const project = document.querySelector(".navbarTextBefore a:nth-child(4)");
const resume = document.querySelector(".navbarTextBefore a:nth-child(5)");
const contact = document.querySelector(".navbarTextBefore a:nth-child(6)");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbarBefore.classList.add("navbarT");
    navbarBefore.classList.remove("navbarBefore");
    navbarTextBefore.classList.add("navbarText");
    navbarTextBefore.classList.remove("navbarTextBefore");
  } else {
    navbarBefore.classList.remove("navbarT");
    navbarBefore.classList.add("navbarBefore");
    navbarTextBefore.classList.remove("navbarText");
    navbarTextBefore.classList.add("navbarTextBefore");
  }
});

githubButton.addEventListener("click", () => {
  location.href = "https://github.com/AndreanGwen";
});

buttonPopUp.addEventListener("click", () => {
  popUpMenu.classList.toggle("hidden");
});

homePopUp.addEventListener("click", () => {
  location.href = "../mainPage/main.html";
});

resumePopUp.addEventListener("click", () => {
  location.href = "../resume/resume.html";
});

aboutPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

educationPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

projectPopUp.addEventListener("click", () => {
  location.reload();
});

contactPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

homeNav.addEventListener("click", () => {
  location.href = "../mainPage/main.html";
});

resume.addEventListener("click", () => {
  location.href = "../resume/resume.html";
});

about.addEventListener("click", () => {
  alert("On progress⚠️");
});

education.addEventListener("click", () => {
  alert("On progress⚠️");
});

project.addEventListener("click", () => {
  location.reload();
});

contact.addEventListener("click", () => {
  alert("On progress⚠️");
});

// detail category
const layer = document.querySelectorAll(".layer");
const img = document.querySelectorAll(".data img");
const img_1 = img[0];
const p2_layer_1 = layer[0].querySelectorAll("p")[1];
const p2_layer_2 = layer[1].querySelectorAll("p")[1];

layer[0].addEventListener("mouseover", () => {
  p2_layer_1.style.display = "block";
});

layer[0].addEventListener("mouseleave", () => {
  p2_layer_1.style.display = "none";
});

layer[1].addEventListener("mouseover", () => {
  p2_layer_2.style.display = "block";
});

layer[1].addEventListener("mouseleave", () => {
  p2_layer_2.style.display = "none";
});

img_1.addEventListener("click", () => {
  location.href =
    "https://drive.google.com/file/d/1y2CaPIg-UkdZo9CBsSg1O0aGtwwm1BvH/view?usp=sharing";
});
