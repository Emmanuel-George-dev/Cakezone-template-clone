const birthday = document.querySelector(".birthday");
const wedding = document.querySelector(".wedding");
const custom = document.querySelector(".custom");
const birthdayToggle = document.querySelector(".birthday-cake");
const weddingToggle = document.querySelector(".wedding-cake");
const customToggle = document.querySelector(".custom-cake");
const navToggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".mobile-links");
const dropDownToggle = document.querySelectorAll(".drop-down-toggle");
const dropDown = document.querySelectorAll(".drop-down");
const navEl = document.querySelectorAll("nav a");
const ScrollTop = document.querySelector(".back-to-top");

// ================================ CHANGE ACTIVE CAKE TYPE ==================================
birthdayToggle.addEventListener("click", add);
weddingToggle.addEventListener("click", addWed);
customToggle.addEventListener("click", addCus);

function add() {
  birthday.style.display = "grid";
  wedding.style.display = "none";
  custom.style.display = "none";
}

function addWed() {
  birthday.style.display = "none";
  wedding.style.display = "grid";
  custom.style.display = "none";
}

function addCus() {
  birthday.style.display = "none";
  wedding.style.display = "none";
  custom.style.display = "grid";
}

// ================================== CHANGE ACTIVE CAKE ===================================
const sort = document.querySelectorAll(".sort");
sort.forEach((sort) => {
  sort.addEventListener("click", () => {
    removeActiveClasses();
    sort.classList.add("active");
  });
});

function removeActiveClasses() {
  sort.forEach((sort) => {
    sort.classList.remove("active");
  });
}

// ================================== TOGGLE NAVBar functions ===================================

navToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
dropDownToggle.forEach((e) => {
  e.onclick = () => {
    dropDown.forEach((e) => {
      e.classList.toggle("active");
    });
  };
});
navEl.forEach((e) => {
  e.onclick = () => {
    removeClasses();
    e.classList.add("active");
  };
});

function removeClasses() {
  navEl.forEach((e) => {
    e.classList.remove("active");
    menu.classList.remove("active");
    dropDown.forEach((e) => {
      e.classList.remove("active");
    });
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    ScrollTop.style.display = "grid";
  } else {
    ScrollTop.style.display = "none";
  }
});