const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

(function(){
  if (getCookie('darkMode')) 
      darkMode_toggle();
})();

function darkMode_toggle() {
  if (document.body.classList.contains('darkMode')) {
      document.body.classList.remove("darkMode");
      document.querySelector('.btn-toggleMode').innerHTML = '<i class="fas fa-moon"></i> Dark Mode';

      setCookie('darkMode', '', 1);

  }else{
      document.body.classList.add("darkMode");
      document.querySelector('.btn-toggleMode').innerHTML = '<i class="fas fa-sun"></i> Light Mode';
      
      setCookie('darkMode', 'yes', 1);
  }
}

document.querySelector('.btn-toggleMode').addEventListener("click", () => darkMode_toggle());

function setCookie(name, value, daysToLive) {
  // Encode value in order to escape semicolons, commas, and whitespace
  let cookie = name + "=" + encodeURIComponent(value);
  let age  = (typeof daysToLive === "number") ? (daysToLive*24*60*60) : 0;
  
  /* Sets the max-age attribute so that the cookie expires
  after the specified number of days */
  cookie += "; max-age=" + age;
      
  document.cookie = cookie;
}

function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  let cookieArr = document.cookie.split(";");
  
  // Loop through the array elements
  for(let i=0; i<cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");
      
      /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
      if(name == cookiePair[0].trim()) {
          // Decode the cookie value and return
          return decodeURIComponent(cookiePair[1]);
      }
  }
  
  // Return null if not found
  return null;
}