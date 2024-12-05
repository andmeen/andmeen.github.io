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

  // استرجاع التذكيرات المحفوظة من localStorage
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  // التحقق من دعم الإشعارات
  function checkNotificationSupport() {
    if (!("Notification" in window)) {
      alert("متصفحك لا يدعم الإشعارات");
      return false;
    }
    return true;
  }

  // طلب إذن الإشعارات
  enableNotificationsButton.addEventListener("click", async () => {
    if (!checkNotificationSupport()) return;

    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        alert("تم تفعيل الإشعارات بنجاح!");
        // إرسال إشعار تجريبي
        sendNotification("مرحباً!", "تم تفعيل الإشعارات بنجاح");
      } else {
        alert("لم يتم السماح بالإشعارات");
      }
    } catch (error) {
      console.error("خطأ في طلب الإذن:", error);
    }
  });

  // دالة إرسال الإشعارات
  function sendNotification(title, body) {
    try {
      if (Notification.permission === "granted") {
        const notification = new Notification(title, {
          body: body,
          icon: "img/New-HOST.png",
          badge: "img/New-HOST.png",
          dir: "rtl",
          vibrate: [200, 100, 200],
        });

        notification.onclick = () => {
          window.focus();
          notification.close();
        };
      }
    } catch (error) {
      console.error("خطأ في إرسال الإشعار:", error);
    }
  }

  // حفظ التذكير
  reminderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const reminderTime = document.getElementById("reminder-time").value;
    const selectedDays = Array.from(
      document.querySelectorAll(".day-btn input:checked")
    ).map((input) => input.value);

    if (reminderTime && selectedDays.length > 0) {
      // إضافة التذكير الجديد
      const newReminder = {
        time: reminderTime,
        days: selectedDays,
        enabled: true,
      };

      reminders.push(newReminder);

      // حفظ في localStorage
      localStorage.setItem("reminders", JSON.stringify(reminders));

      alert(
        `تم حفظ التذكير في الساعة ${reminderTime} للأيام: ${selectedDays.join(
          ", "
        )}`
      );

      // إرسال إشعار تأكيد
      sendNotification(
        "تم إضافة تذكير جديد",
        `سيتم تذكيرك في الساعة ${reminderTime}`
      );
    } else {
      alert("يرجى تحديد وقت وأيام التذكير");
    }
  });

  // التحقق من التذكيرات كل دقيقة
  function checkReminders() {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);
    const currentDay = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
      now.getDay()
    ];

    console.log(`Checking reminders at ${currentTime} on ${currentDay}`); // للتتبع

    reminders.forEach((reminder) => {
      if (
        reminder.enabled &&
        reminder.time === currentTime &&
        reminder.days.includes(currentDay)
      ) {
        console.log("Sending notification for reminder:", reminder); // للتتبع

        sendNotification(
          "وقت التعلم! ✨",
          "حان موعد متابعة دروسك البرمجية. هيا نبدأ!"
        );
      }
    });
  }

  // بدء فحص التذكيرات
  checkReminders(); // فحص فوري عند تحميل الصفحة
  setInterval(checkReminders, 60000); // فحص كل دقيقة

  // عرض حالة الإشعارات الحالية
  console.log("Notification Permission:", Notification.permission);
  console.log("Stored Reminders:", reminders);
});