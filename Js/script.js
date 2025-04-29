document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const currentUrl = window.location.href;

  navLinks.forEach((link) => {
    if (currentUrl.includes(link.getAttribute("href"))) {
      link.style.borderBottom = "2px solid #fff";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll(
        "input[type='text'], input[type='email'], textarea"
      );
      let valid = true;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          alert("Mohon isi semua kolom formulir.");
          input.focus();
          valid = false;
          e.preventDefault();
          return false;
        }
      });

      return valid;
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const wisataImages = document.querySelectorAll(".image-container img");

  wisataImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });
});
