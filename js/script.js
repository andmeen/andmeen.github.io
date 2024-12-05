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

document.addEventListener("DOMContentLoaded", () => {
  const enableNotificationsButton = document.getElementById(
    "enable-notifications"
  );
  const reminderForm = document.querySelector(".reminder-form");

  let reminders = [];

  enableNotificationsButton.addEventListener("click", () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        alert("تم تفعيل الإشعارات!");
      } else {
        alert("لم يتم تفعيل الإشعارات.");
      }
    });
  });

  reminderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reminderTime = document.getElementById("reminder-time").value;
    const selectedDays = Array.from(
      document.querySelectorAll(".day-btn input:checked")
    ).map((input) => input.value);

    if (reminderTime && selectedDays.length > 0) {
      reminders.push({ time: reminderTime, days: selectedDays });
      alert(
        `تم حفظ التذكير في الساعة ${reminderTime} للأيام: ${selectedDays.join(
          ", "
        )}`
      );
    } else {
      alert("يرجى تحديد وقت وأيام التذكير.");
    }
  });

  setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);
    const currentDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
      now.getDay()
    ];

    reminders.forEach((reminder) => {
      if (reminder.time === currentTime && reminder.days.includes(currentDay)) {
        new Notification("تذكير", {
          body: "حان وقت متابعة الدرس!",
          icon: "img/New-HOST.png",
        });
      }
    });
  }, 60000); // تحقق كل دقيقة
});