const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle?.addEventListener("click", () => {
  document.querySelector(".nav-items")?.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items")?.classList.toggle("active");
  });
});


 window.addEventListener("load", function () {
   document.querySelector(".pre-loader").className += " hidden";
 });

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleDarkMode() {
  let isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});