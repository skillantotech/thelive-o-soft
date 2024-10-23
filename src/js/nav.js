function initializeMobileMenu() {
  const navbarToggle = document.querySelector("#navbar-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");
  const closeMenu = document.querySelector("#close-menu");

  if (navbarToggle && mobileMenu) {
    navbarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener("click", (event) => {
      event.preventDefault();
      mobileMenu.classList.add("hidden");
    });
  }
}

function initializeDropdown() {
  const dropdownBtn = document.querySelector("#dropdownBtn");
  const dropdownContent = document.querySelector("#dropdownContent");

  if (dropdownBtn && dropdownContent) {
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
}

function initializeAccordion() {
  const menuBtn = document.querySelector("#menu-btn");
  const content = document.querySelector("#accordion-content-mobilemenu");
  const icon = document.querySelector("#icon");

  if (menuBtn && content && icon) {
    function toggleAccordion() {
      content.classList.toggle("hidden");

      if (content.classList.contains("hidden")) {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-right");
      } else {
        icon.classList.remove("fa-angle-right");
        icon.classList.add("fa-angle-down");
      }
    }

    menuBtn.addEventListener("click", toggleAccordion);
  } //else {
  //   console.error("Accordion elements for Resource not found");
  // }
}

function initializeAccordionPlatform() {
  const menuBtnPlatform = document.querySelector("#menu-btn-platform");
  const contentPlatform = document.querySelector(
    "#accordion-content-mobilemenu-platform"
  );
  const iconPlatform = document.querySelector("#icon_platform");

  if (menuBtnPlatform && contentPlatform && iconPlatform) {
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
  } //else {
  //   console.error("Accordion elements for Platform not found");
  // }
}

// Initialize all components
function initializeHeader() {
  initializeMobileMenu();
  initializeDropdown();
  initializeAccordion();
  initializeAccordionPlatform();
}

document.addEventListener("DOMContentLoaded", () => {
  initializeHeader();
});
