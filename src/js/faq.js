// JavaScript for tab functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Function to hide all contents and remove active state
  function hideAllContents() {
    tabContents.forEach((content) => content.classList.add("hidden"));
    tabButtons.forEach((btn) =>
      btn.classList.remove("text-green-600", "font-semibold")
    );
  }

  // Attach event listeners to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hide all tab contents and remove active class from buttons
      hideAllContents();
      button.classList.add("text-green-600", "font-semibold");
      // Activate the clicked tab and show its content
      //button.classList.add('hover:bg-green-800','hover:text-white');
      document
        .getElementById(button.getAttribute("data-tab"))
        .classList.remove("hidden");
    });
  });

  // Trigger click on the first tab button to show its content by default
  tabButtons[0].click();
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with class 'accordion-button'
  const collapseButtons = document.querySelectorAll(".accordion-button");

  // Add event listeners to all collapse buttons
  collapseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Close all other collapsible contents
      collapseButtons.forEach((btn) => {
        if (btn !== this) {
          btn.nextElementSibling.classList.add("hidden"); // Hide other contents
          btn.querySelector(".icon-open").classList.add("hidden"); // Show close icon
          btn.querySelector(".icon-close").classList.remove("hidden"); // Hide open icon
          btn.classList.remove("bg-green-600", "text-white"); // Remove active background color and text color
        }
      });

      const content = this.nextElementSibling; // Selects the next sibling element which is the collapsible content
      const iconOpen = this.querySelector(".icon-open"); // Selects the icon for the open state
      const iconClose = this.querySelector(".icon-close"); // Selects the icon for the close state

      // Toggle hidden class to show/hide the collapsible content
      content.classList.toggle("hidden");

      // Toggle icon visibility
      iconOpen.classList.toggle("hidden"); // Toggle visibility of the open icon
      iconClose.classList.toggle("hidden"); // Toggle visibility of the close icon

      // Toggle active state for button background color and text color
      if (content.classList.contains("hidden")) {
        this.classList.remove("bg-green-600", "text-white"); // Remove active state background color and text color
      } else {
        this.classList.add("bg-green-600", "text-white"); // Add active state background color and text color
      }
    });
  });
});