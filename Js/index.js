document.addEventListener("DOMContentLoaded", function () {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Selamat Datang!";

  if (hour < 12) greeting = "Selamat Pagi!";
  else if (hour < 18) greeting = "Selamat Siang!";
  else greeting = "Selamat Malam!";

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerText = greeting;
  }
});
