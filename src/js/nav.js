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
  const menuBtn = document.getElementById("menu-btn");
  const content = document.getElementById("accordion-content-mobilemenu");
  const icon = document.getElementById("icon");

  function toggleAccordion() {
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

  menuBtn.addEventListener("click", toggleAccordion);
}

function initializeAccordionPlatfrom() {
  const menuBtnPlatfrom = document.getElementById("menu-btn-platfrom");
  const contentPlatfrom = document.getElementById(
    "accordion-content-mobilemenu-platfrom"
  );
  const iconPlatfrom = document.getElementById("icon_platfrom");

  function toggleAccordionPlatfrom() {
    contentPlatfrom.classList.toggle("hidden");

    if (contentPlatfrom.classList.contains("hidden")) {
      iconPlatfrom.classList.remove("fa-angle-down");
      iconPlatfrom.classList.add("fa-angle-right");
    } else {
      iconPlatfrom.classList.remove("fa-angle-right");
      iconPlatfrom.classList.add("fa-angle-down");
    }
  }

  menuBtnPlatfrom.addEventListener("click", toggleAccordionPlatfrom);
}

// Function to initialize all components
function initializeHeader() {
  initializeMobileMenu();
  initializeDropdown();
  initializeAccordion();
  initializeAccordionPlatfrom();
}

document.addEventListener("DOMContentLoaded", function () {
  initializeHeader(); // Initialize JavaScript on initial page load
});
