// fetch("../Components/Header/header.html")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     document.getElementById("header").innerHTML = data;
//     // console.log(data);
//   });
fetch("/src/Components/Header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    console.log("initializeHeader is defined, calling it now");
    initializeHeader(); // Initialize JavaScript after content is loaded
  })
  .catch((error) => console.error("Error loading the header:", error));
// document.addEventListener("DOMContentLoaded", function () {
//   if (typeof initializeHeader === "function") {
//     console.log("initializeHeader is defined, calling it now");
//     initializeHeader();
//   } else {
//     console.error("initializeHeader is not defined");
//   }
// });
