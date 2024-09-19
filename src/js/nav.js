function initializeMobileMenu() {
  const navbarToggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  navbarToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
}

function initializeDropdown() {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownContent = document.getElementById("dropdownContent");

  dropdownBtn.addEventListener("mouseover", function () {
    dropdownContent.classList.remove("hidden");
  });

  dropdownBtn.addEventListener("mouseleave", function () {
    if (!dropdownContent.matches(":hover")) {
      dropdownContent.classList.add("hidden");
    }
  });

  dropdownContent.addEventListener("mouseover", function () {
    dropdownContent.classList.remove("hidden");
  });

  dropdownContent.addEventListener("mouseleave", function () {
    dropdownContent.classList.add("hidden");
  });
}

function initializeAccordion() {
  function toggleAccordion() {
    const content = document.getElementById("accordion-content-mobilemenu");
    const icon = document.getElementById("icon");

    content.classList.toggle("hidden");

    // Change the icon from angle-down to angle-right and vice versa
    if (content.classList.contains("hidden")) {
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-right");
    } else {
      icon.classList.remove("fa-angle-right");
      icon.classList.add("fa-angle-down");
    }
  }

  // Add event listener for the menu button
  document
    .getElementById("menu-btn")
    .addEventListener("click", toggleAccordion);
}

// Function to initialize all components
function initializeHeader() {
  initializeMobileMenu();
  initializeDropdown();
  initializeAccordion();
}
document.addEventListener("DOMContentLoaded", function () {
  initializeHeader(); // Initialize JavaScript on initial page load
});
