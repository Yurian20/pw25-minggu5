document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");
  const today = new Date();
  const hour = today.getHours();

  let message = "";

  if (hour < 12) {
    message = "Selamat pagi, Petualang!";
  } else if (hour < 18) {
    message = "Selamat sore, Petualang!";
  } else {
    message = "Selamat malam, Petualang!";
  }

  greeting.textContent = message;
});
