const lan_data = ["HTML", "CSS", "JAVASCRIPT", "FLUTTER('We Don't Have It Yet')"];


const count_ofvideos = ["HTML= 4 videos", "CSS= 26 videos", "JAVASCRIPT= 42 videos", "FLUTTER= 0 video"];

const pages = ["We Have 8 Pages"];



document.write('<h1 id="jstext">' + lan_data, count_ofvideos, pages + '</h1>');


function myFunction() {
  alert("Finish Database has been completed").then((response) => {
    window.location.href = "data.html";
  });
}

function pagereason() {
  alert("This Page Shows The Databse Of The Website So We Can See All The Information We Want Like How Many Languages Do We Have, How Many Videos Do We Have, How Many Pages In Our Website Do We Have And Even More In Future!").then((response) => {
    window.location.href = "data.html";
  });
}

 function close_page() {
   // Open a new window
   const newWindow = window.open(
     "about:blank",
     "_blank",
     "width=500,height=500"
   );

   // Set content of the new window
   newWindow.document.write(
     '<h1>Popup Window</h1><button onclick="window.close()">Close this Window</button>'
   );

   // Auto-close the popup window after 5 seconds
   setTimeout(() => {
     newWindow.close();
   }, 5000); // Close after 5 seconds
 }