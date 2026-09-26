const button = document.getElementById("acceptButton");
const message = document.getElementById("secretMessage");

if (button) {
  button.addEventListener("click", () => {
    message.classList.add("show");
    button.textContent = "Fechado então ❤️";
    button.classList.add("accepted");

    for (let i = 0; i < 16; i++) {
      createHeart();
    }
  });
}

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 2 + "s";
  heart.style.fontSize = 14 + Math.random() * 18 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4200);
}

// Slider
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

if (slides.length) {
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    restartAutoSlide();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.index));
      restartAutoSlide();
    });
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4200);
  }

  function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  startAutoSlide();
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const triggers = document.querySelectorAll(".lightbox-trigger");

triggers.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add("open");
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove("open");
}
