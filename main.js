
var headline = document.querySelector('strong').innerText = 'Some Dogs';


document.getElementById("change-me").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector('strong').innerHTML = document.getElementById('dog-name').value;
});

function hamburgerMenu() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}