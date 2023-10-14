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

// var first = document.getElementById("light1");
// var button = document.getElementById("light");
// var background1 = document.querySelector("body");
// var line1 = document.querySelector(".home h1");
// var line2 = document.querySelector(".home p");
// var lines = document.getElementById("down_part");
// var features = document.getElementById("features");

// function light() {
//     document.body.style.backgroundColor = "#fff";
//     document.querySelector(".home h1").style.color = "#000";
//     document.querySelector(".home p").style.color = "#000";
//     document.getElementById("down_part").style.color = "#000";
//     document.getElementById("features").style.background = "#f8f7fc";
//     document.getElementById("light1").innerHTML = "الوضع الداكن";
// }

// addEventListener('click' , light);

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})


console.log("%c hhhh  ", "font-size: 35px")