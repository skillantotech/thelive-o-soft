fetch("../Components/Header/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    // console.log(data);
  });


