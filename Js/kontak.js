document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama && email && pesan) {
      alert(`Terima kasih ${nama}, pesan Anda telah terkirim!`);
      form.reset();
    } else {
      alert("Harap lengkapi semua data sebelum mengirim!");
    }
  });
});
