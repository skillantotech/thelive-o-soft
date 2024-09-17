document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  // Toggle mobile menu
  navbarToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("show");
  });

  // Close mobile menu
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
  });
});

const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");
// Show the dropdown when the mouse enters the button
dropdownBtn.addEventListener("mouseover", function () {
  dropdownContent.classList.remove("hidden");
  dropdownContent.classList.add("block");
});

// Hide the dropdown when the mouse leaves the dropdown area
dropdownBtn.addEventListener("mouseleave", function () {
  //setTimeout(() => {
  if (!dropdownContent.matches(":hover")) {
    dropdownContent.classList.remove("block");
    dropdownContent.classList.add("hidden");
  }
  // }, 300);
});

// Keep the dropdown open when hovering over the dropdown content
dropdownContent.addEventListener("mouseover", function () {
  dropdownContent.classList.remove("hidden");
  dropdownContent.classList.add("block");
});

// Hide the dropdown when the mouse leaves the dropdown content
dropdownContent.addEventListener("mouseleave", function () {
  dropdownContent.classList.remove("block");
  dropdownContent.classList.add("hidden");
});

function toggleAccordion(id) {
  const submenu = document.getElementById(`submenu-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  submenu.classList.toggle("hidden"); // Toggle submenu visibility
  // Toggle between two icons: "▼" for closed and "▲" for open
  icon.textContent = submenu.classList.contains("hidden") ? "▼" : "▲";
}

// Toggle mobile menu visibility
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu1");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
