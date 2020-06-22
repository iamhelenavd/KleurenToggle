// using JS sliding open close effect

let toggleNavStatus = false;

const toggleNav = function () {
  const getSidebar = document.querySelector(".nav-sidebar");
  const getSidebarUl = document.querySelector(".nav-sidebar ul");
  const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";

    const arrayLength = getSidebarLinks.length;
    for (const i = 0; i < arrayLength; i++) toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";

    const arrayLength = getSidebarLinks.length;
    for (const i = 0; i < arrayLength.length; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

// using JS for color change

const btnHome = document.querySelector("#btn-home");
const btnGrey = document.querySelector("#btn-grey");
const btnRed = document.querySelector("#btn-red");
const btnOrange = document.querySelector("#btn-orange");
const btnPurple = document.querySelector("#btn-purple");
const btnGreen = document.querySelector("#btn-green");

btnHome.addEventListener("click", () => {
  document.body.style.background = "#f1f1f1";
});

btnGrey.addEventListener("click", () => {
  document.body.style.background = "#f1f1f1";
});

btnRed.addEventListener("click", () => {
  document.body.style.background = "red";
});

btnOrange.addEventListener("click", () => {
  document.body.style.background = "orange";
});

btnPurple.addEventListener("click", () => {
  document.body.style.background = "purple";
});

btnGreen.addEventListener("click", () => {
  document.body.style.background = "green";
});

/*ik kreeg de img niet invisible, dus hamburger kan niet mee kleuren met de achtergrond, ik denk dat het komt omdat ik het in CSS heb geplaats. 
Ik kan dit nu allen niet meer controleren. Hoor graag wat ik wel had moeten doen 
optie 5 lukte niet. menu klapt alleen terug via de hamburger, kijk uit naar de feedback zodat ik ervan kan leren */
