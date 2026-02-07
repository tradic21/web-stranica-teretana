document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".btn-custom");
  var kupljeno = false;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var prijavljen = localStorage.getItem("prijavljen") === "true";
      console.log("Prijavljen status on button click:", prijavljen);

      if (!prijavljen) {
        alert("Niste prijavljeni, ne možete kupiti bez prijave");
        return;
      } else {
        if (button.classList.contains("purchased") || kupljeno) {
          if (kupljeno) {
            alert("Članarina je već kupljena, istječe za 27 dana!");
          } else {
            alert("Već kupljeno. Pričekajte sljedeći mjesec.");
          }
        } else {
          alert("Kupljeno!");
          kupljeno = true;
          button.style.backgroundColor = "#e68900";
          button.style.borderColor = "#e68900";
          button.classList.add("purchased");
          button.blur();
        }
      }
    });
  });
});
