function initializeMobileMenu() {
  const navbarToggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  navbarToggle.addEventListener("click", (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", (event) => {
    event.preventDefault();
    mobileMenu.classList.add("hidden");
  });
}
function initializeMobileMenu() {
  const navbarToggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  navbarToggle.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior
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

function initializeAccordionPlatform() {
  const menuBtnPlatform = document.getElementById("menu-btn-platform");
  const contentPlatform = document.getElementById(
    "accordion-content-mobilemenu-platform"
  );
  const iconPlatform = document.getElementById("icon_platform");

  function toggleAccordionPlatform() {
    contentPlatform.classList.toggle("hidden");

    if (contentPlatform.classList.contains("hidden")) {
      iconPlatform.classList.remove("fa-angle-down");
      iconPlatform.classList.add("fa-angle-right");
    } else {
      iconPlatform.classList.remove("fa-angle-right");
      iconPlatform.classList.add("fa-angle-down");
    }
  }

  menuBtnPlatform.addEventListener("click", toggleAccordionPlatform);
}

// Function to initialize all components
function initializeHeader() {
  initializeMobileMenu();
  initializeDropdown();
  initializeAccordion();
  initializeAccordionPlatform();
}

document.addEventListener("DOMContentLoaded", () => {
  initializeHeader(); // Initialize JavaScript on initial page load
});
