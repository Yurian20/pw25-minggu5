document.addEventListener("DOMContentLoaded", function () {
  const wisataGreeting = document.getElementById("wisata-greeting");
  const today = new Date();
  const day = today.getDay();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  wisataGreeting.textContent = `Selamat datang! Hari ini ${days[day]} yang cerah untuk berpetualang!`;
});
