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
const homeNav = document.querySelector(".exceptResume:nth-child(1)");

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

buttonDownload.addEventListener("click", () => {
  location.href = "../src/RESUME ATS.pdf";
});

buttonLink.addEventListener("click", () => {
  const link =
    "https://drive.google.com/file/d/1P5fwuspoNjQgrAysletqds9cQW54kcqK/view?usp=sharing";

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied");
      })
      .catch(() => {
        alert("Link error");
      });
  } else {
    alert("This feature is not supported in this browser");
  }
});

buttonPopUp.addEventListener("click", () => {
  popUpMenu.classList.toggle("hidden");
});

homePopUp.addEventListener("click", () => {
  location.href = "../index.html";
});

resumePopUp.addEventListener("click", () => {
  location.reload();
});

aboutPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

educationPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

projectPopUp.addEventListener("click", () => {
  location.href = "../project/project.html";
});

contactPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

homeNav.addEventListener("click", () => {
  location.href = "../index.html";
});

resume.addEventListener("click", () => {
  location.reload();
});

about.addEventListener("click", () => {
  alert("On progress⚠️");
});

education.addEventListener("click", () => {
  alert("On progress⚠️");
});

project.addEventListener("click", () => {
  location.href = "../project/project.html";
});

contact.addEventListener("click", () => {
  alert("On progress⚠️");
});
