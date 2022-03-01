const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

console.log("%c🦍 ايش تبغى هنا يلا ارجع" , "font-size: 35px;");

console.log("%c😑 لحظه قبل لا ترجع ضيف حسابي انستا" , "color: white; font-size: 30px;");

console.log("%candmeen121" , "color: red; font-size: 30px;");