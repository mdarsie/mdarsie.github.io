// function to transform hamburger menu icon
var menuIcon = document.querySelector("#menu-icon");
var dropdownLink = document.querySelector("#dropdown-link");

document.addEventListener("DOMContentLoaded", function() {
  menuIcon.addEventListener("click", function() {
    this.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  menuIcon.addEventListener("click", function() {
    dropdownLink.classList.toggle("open");
    if (dropdownLink.style.display === "block") {
      dropdownLink.style.display = "none";
    } else {
      dropdownLink.style.display = "block";
    }
  });
});
