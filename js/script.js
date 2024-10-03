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


// Function to display the images
function currentImage(n) {
    var i;
    // Get all elements with the class name "imageClass"
    var images = document.getElementsByClassName("imageClass");
    // Get all elements with the class name "dot" (navigation dots)
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    // Remove the "active" class from all navigation dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Display the image corresponding to the current index
    images[n - 1].style.display = "block";
    // Add the "active" class to the corresponding navigation dot
    dots[n - 1].className += " active";
}

// Display the initial image
currentImage(1);