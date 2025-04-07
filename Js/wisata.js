let slideIndex = 0;

function showSlide() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide();
});

setInterval(showSlide, 10000);

function filterWisata() {
  const input = document.getElementById("cari").value.toLowerCase();
  const list = document.querySelectorAll(".wisata-item");
  list.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(input)
      ? ""
      : "none";
  });
}
