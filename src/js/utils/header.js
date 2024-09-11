fetch("../Components/Header/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    // console.log(data);
  });

  document.getElementById('menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
