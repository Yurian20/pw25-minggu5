function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua kolom harus diisi!");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Masukkan email yang valid.");
    return false;
  }

  alert("Form berhasil dikirim!");
  return true;
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
