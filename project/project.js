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
  location.href = "../index.html";
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
  location.href = "../index.html";
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

$.ajax({
  url: "../data/project.json",
  success: (p) => {
    let dataProject = p;

    const btnTotalAll = document.querySelector(".category button:nth-child(1)");
    const btnMikrotik = document.querySelector(".category button:nth-child(3)");
    const btnIOT = document.querySelector(".category button:nth-child(4)");
    const dataCategory = document.querySelector(".dataCategory");
    const btnWeb = document.querySelector(".category button:nth-child(2)");

    // Fungsi render ulang card
    const renderCard = (data) => {
      let projectCard = "";
      data.forEach((element) => {
        projectCard += `
        <div class="data">
          <a href="${element.link}"><img src="${element.img}" alt="" /></a>
          <div class="layer">
            <p>${element.title}</p>
            <p>${element.desc}</p>
          </div>
        </div>`;
      });
      dataCategory.innerHTML = projectCard;
    };

    // Tampilkan semua data di awal
    renderCard(dataProject);

    // Total jumlah proyek
    btnTotalAll.textContent = "All(" + dataProject.length + ")";

    // Event tombol "All"
    btnTotalAll.addEventListener("click", () => {
      renderCard(dataProject);
    });

    // Event tombol "IOT"
    btnIOT.addEventListener("click", () => {
      const IOTFiltered = dataProject.filter((e) => e.id === "iot");
      renderCard(IOTFiltered);
    });

    // event tombol Mikrotik
    btnMikrotik.addEventListener("click", () => {
      const mikrotikFIltered = dataProject.filter((e) => e.id === "mikrotik");
      renderCard(mikrotikFIltered);
    });

    btnWeb.addEventListener("click", () => {
      const btnFiltered = dataProject.filter((e) => e.id === "web");
      renderCard(btnFiltered);
    });
  },

  error: (m) => console.log(m.responseText),
});
