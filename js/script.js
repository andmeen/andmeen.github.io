const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle?.addEventListener("click", () => {
  document.querySelector(".nav-items")?.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items")?.classList.toggle("active");
  });
});


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 750);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}