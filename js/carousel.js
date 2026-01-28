const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const slideCount = slides.length;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  currentIndex = index;
}

// Auto slide
setInterval(() => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= slideCount) nextIndex = 0;
  updateCarousel(nextIndex);
}, 5000);

// Clique nos dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateCarousel(index);
  });
});
