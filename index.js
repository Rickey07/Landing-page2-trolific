
// For adding the class active on every component 
// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Close navbar after clicking an link 

let navToggler = document.querySelector('.navbar-toggler');