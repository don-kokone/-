function toggleBurgerMenu() {
    var element = document.getElementById("navigation");
    element.classList.toggle("active");
  }

  console.log(element)

// In progress
  var links = document.getElementsByClassName("link");
  var element = document.getElementById("navigation");


  links.forEach(link => {
    link.addEventListener("click", () => {
      var element = document.getElementById("navigation")
      element.classList.remove("active")
      });
  });
  
 