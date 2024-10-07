document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Function to hide all contents and remove active state
  function hideAllContents() {
    tabContents.forEach((content) => content.classList.add("hidden"));

    tabButtons.forEach((btn) => {
      btn.classList.remove("text-green-600", "font-semibold"); // For mobile/tablet state
      btn.classList.remove("lg:text-green-600", "font-semibold"); // For laptop state
      btn.classList.add("lg:text-black"); // Set back to black for laptop screens
    });
  }

  // Attach event listeners to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      hideAllContents(); // Reset all tabs

      // Apply mobile/tablet active state
      button.classList.add("text-green-600", "font-semibold");

      // Apply laptop-specific active state
      button.classList.remove("lg:text-black");
      button.classList.add("lg:text-green-600", "font-semibold");

      // Activate the clicked tab content
      document
        .getElementById(button.getAttribute("data-tab"))
        .classList.remove("hidden");
    });
  });

  // Trigger click on the first tab button to show its content by default
  tabButtons[0].click();
});
