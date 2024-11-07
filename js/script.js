// Menu
const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle?.addEventListener("click", () => {
  document.querySelector(".nav-items")?.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items")?.classList.toggle("active");
  });
});

// Dark/light Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleDarkMode() {
  let isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// On page load
window.addEventListener('load', () => {
  const overlay = document.querySelector('.overlay');
  const content = document.querySelector('.content');
  
  // بعد فترة معينة (مثلاً 3 ثواني)، نغلق الـ overlay ونظهر المحتوى
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none'; // إخفاء الـ overlay بعد التلاشي
      content.style.display = 'block'; // إظهار المحتوى
    }, 1000); // تأخير بسيط ليكتمل التلاشي
  }, 1000); // فترة العرض للانيميشن (3 ثواني)
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


