const buttonGithub = document.querySelector(".githubPage");
const spanTitle = document.querySelector(".text span");
let h1 = document.querySelector(".text h1");
const characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
const finalText = "Andrean Gwen";
let iteration = 0;
const juniorWebDev = document.querySelector(".text h3 span");
const iconReference = document.querySelector(".circleAttention");
const btnThree = document.querySelector(".btnThree");
const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");

// mobile
const buttonPopUp = document.querySelector(".popUp");
const menuPopUp = document.querySelector(".isiDivPopUp");
const popUpMenu = document.getElementById("popUpMenu");
const homePopUp = document.querySelector(".homePopUp:nth-child(1)");
const aboutPopUp = document.querySelector(".homePopUp:nth-child(2)");
const educationPopUp = document.querySelector(".homePopUp:nth-child(3)");
const projectPopUp = document.querySelector(".homePopUp:nth-child(4)");
const resumePopUp = document.querySelector(".homePopUp:nth-child(5)");
const contactPopUp = document.querySelector(".homePopUp:nth-child(6)");

// navbar desktop
const home = document.querySelector(".navbarText a:nth-child(1)");
const about = document.querySelector(".navbarText a:nth-child(2)");
const education = document.querySelector(".navbarText a:nth-child(3)");
const project = document.querySelector(".navbarText a:nth-child(4)");
const resume = document.querySelector(".navbarText a:nth-child(5)");
const contact = document.querySelector(".navbarText a:nth-child(6)");

buttonGithub.addEventListener("click", function () {
  window.location.href = "https://github.com/AndreanGwen";
});

const interval = setInterval(() => {
  let display = "";
  for (let i = 0; i < finalText.length; i++) {
    if (i < iteration) {
      display += finalText[i];
    } else {
      display += characters[Math.floor(Math.random() * characters.length)];
    }
  }

  h1.textContent = display;

  if (iteration > finalText.length) {
    clearInterval(interval);
  }

  iteration += 1;
}, 125);

juniorWebDev.style.color = "#ffc400";

iconReference.addEventListener("click", () => {
  alert(
    "This website create by AndreanGwen \nThis website inspired by radifa.my.id \nIt could be said to be a copy \nBut I modified it a little"
  );
});

btnThree.addEventListener("click", () => {
  location.href = "https://radifa.my.id";
});

btnOne.addEventListener("click", () => {
  location.href = "../resume/resume.html";
});

btnTwo.addEventListener("click", () => {
  alert("On progress⚠️");
});

buttonPopUp.addEventListener("click", () => {
  popUpMenu.classList.toggle("hidden");
});

homePopUp.addEventListener("click", () => {
  location.reload();
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
  location.href = "../project/project.html";
});

contactPopUp.addEventListener("click", () => {
  alert("On progress⚠️");
});

home.addEventListener("click", () => {
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

resume.addEventListener("click", () => {
  location.href = "../resume/resume.html";
});

contact.addEventListener("click", () => {
  alert("On progress⚠️");
});
