document.addEventListener("DOMContentLoaded", function () {
  var prijavljen = localStorage.getItem("prijavljen") === "true";
  console.log("Initial prijavljen:", prijavljen);

  var loginImage = document.getElementById("prijava");

  function updateLoginImage() {
    if (prijavljen) {
      loginImage.src = "ikone/profile-user.png";
    } else {
      loginImage.src = "ikone/login.png";
      resetRezerviranoButtons(); 
    }
  }

  function resetRezerviranoButtons() {
    var rezervirajLinks = document.querySelectorAll('.session a[href="#"]');
    rezervirajLinks.forEach(function (link) {
      link.textContent = "Rezerviraj";
      link.style.color = "#f7931e";
    });
  }

  if (loginImage) {
    updateLoginImage();
    loginImage.addEventListener("click", function () {
      prijavljen = !prijavljen;
      console.log("Prijavljen after click:", prijavljen);
      localStorage.setItem("prijavljen", prijavljen);
      updateLoginImage();
    });
  }

  var rezervirajLinks = document.querySelectorAll('.session a[href="#"]');

  function rezervirajClick(event) {
    event.preventDefault();

    if (prijavljen) {
      if (this.textContent === "Rezervirano") {
        this.textContent = "Rezerviraj";
        this.style.color = "#f7931e";
      } else {
        this.textContent = "Rezervirano";
        this.style.color = "green";
      }
    } else {
      alert("Morate se prijaviti kako biste mogli rezervirati termin.");
    }
  }

  rezervirajLinks.forEach(function (link) {
    link.addEventListener("click", rezervirajClick);
  });
});
