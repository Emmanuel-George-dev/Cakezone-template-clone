const birthday = document.querySelector(".birthday");
const wedding = document.querySelector(".wedding");
const custom = document.querySelector(".custom");
const birthdayToggle = document.querySelector(".birthday-cake");
const weddingToggle = document.querySelector(".wedding-cake");
const customToggle = document.querySelector(".custom-cake");

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
