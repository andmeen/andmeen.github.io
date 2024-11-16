// استيراد مكتبات Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJWNSpEnRBtLeCwjXRVeOKm54qJp6C2ys",
  authDomain: "admin0host.firebaseapp.com",
  projectId: "admin0host",
  storageBucket: "admin0host.firebasestorage.app",
  messagingSenderId: "508944643435",
  appId: "1:508944643435:web:00d068cbc865c07cbc082e",
};

// تهيئة تطبيق Firebase
const app = initializeApp(firebaseConfig);

// تهيئة خدمات Firebase بعد التأكد من تهيئة التطبيق
const auth = getAuth(app);
const db = getFirestore(app);

// تأكد من أن التهيئة تمت بشكل صحيح قبل استخدام `auth`
window.addEventListener("load", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`تم تسجيل دخولك: ${user.email}`);
    } else {
      console.log("لايوجد مستخدم حالياً");
    }
  });
});


window.addEventListener("DOMContentLoaded", () => {
  // احصل على العناصر من HTML
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const userStatus = document.getElementById("user-status");

  // تحقق من أن العناصر موجودة قبل إضافة المستمعين
  if (loginBtn && signupBtn && emailInput && passwordInput && userStatus) {
    loginBtn.addEventListener("click", async () => {
      const email = emailInput.value;
      const password = passwordInput.value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        userStatus.textContent = window.location.href = "index.html";
      } catch (error) {
        userStatus.textContent = error.message;
      }
    });

    signupBtn.addEventListener("click", async () => {
      const email = emailInput.value;
      const password = passwordInput.value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        userStatus.textContent = alert("تم انشاء الحساب بنجاح");
      } catch (error) {
        userStatus.textContent = error.message;
      }
    });
  } else {
    console.error("One or more elements are missing in the HTML.");
  }
});


const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// إعدادات SendGrid
const transporter = nodemailer.createTransport({
  service: "SendGrid", // يمكن استبداله بأي خدمة أخرى مثل Gmail
  auth: {
    user: "your_sendgrid_username", // اسم المستخدم في SendGrid
    pass: "d85fe934f790dbd89c4ab425e36bb888", // مفتاح API الخاص بـ SendGrid
  },
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const mailOptions = {
    from: "userhost@andmeen.com",
    to: user.email,
    subject: "حياك الله في هوست!",
    text: `هلا والله ${user.email}،\n\nشكراً لتسجيلك في هوست. حنا سعيدون لانضمامك لنا مستنين من منك الكثير!`,
  };

  return transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("ارسل إلى:", user.email);
    })
    .catch((error) => {
      console.error("خطأ إرسال إلى:", error);
    });
});