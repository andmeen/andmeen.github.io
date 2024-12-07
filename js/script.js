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


//   // Auto-update year copyright
//   document.getElementById('currentYear').textContent = new Date().getFullYear();

// تفعيل القائمة المنسدلة
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // تحريك أشرطة القائمة
    menuBtn.classList.toggle('active');
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// إغلاق القائمة عند التمرير
window.addEventListener('scroll', () => {
    if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// تحريك الروابط
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.animation = "pulse 0.5s infinite";
  });
  link.addEventListener("mouseout", () => {
    link.style.animation = "";
  });
});

// Toast Notification
function showInstagramToast() {
    const toast = document.getElementById('instagram-toast');
    const followBtn = toast.querySelector('.toast-follow-btn');
    const closeBtn = toast.querySelector('.toast-close-btn');
    
    // Show toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('show');
    }, 3000);

    // Handle Follow button click
    followBtn.addEventListener('click', () => {
        window.open('https://instagram.com/andmeen121', '_blank');
    });

    // Handle Close button click
    closeBtn.addEventListener('click', () => {
        toast.classList.remove('show');
    });

    // Auto hide after 9 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 90000);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showInstagramToast();
});


// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(".fade-in");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//       }
//     });
//   });

//   elements.forEach((element) => {
//     observer.observe(element);
//   });
// });