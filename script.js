let currentStyle = 0;
let isDarkMode = false;

document.addEventListener("DOMContentLoaded", () => {
  loadSVG("images/globe-icon.svg", "location-icon");
  loadSVG("images/phone-icon.svg", "phone-icon");
  loadSVG("images/email-icon.svg", "email-icon");
  loadSVG("images/linkedin-icon.svg", "linkedin-icon");
  loadSVG("images/github-icon.svg", "github-icon");
  loadSVG("images/qr-code.svg", "qr-code-icon");

  // Add event listener to the image to toggle grayscale on click
  const faceImage = document.querySelector("header img");
  if (faceImage) {
    faceImage.addEventListener("click", () => {
      faceImage.classList.toggle("grayscale");
    });
  }
});

function loadSVG(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      updateIconColors();
    });
}

function toggleStyle() {
  const cvContainer = document.querySelector(".cv-container");
  const header = document.querySelector("header");
  const body = document.body;

  cvContainer.classList.remove("style1", "style2", "style3", "style4");
  header.classList.remove("left-align", "center-align");
  body.classList.remove("animated-background");

  currentStyle = (currentStyle + 1) % 4;

  if (currentStyle === 0) {
    cvContainer.classList.add("style1");
    header.classList.add("left-align");
  } else if (currentStyle === 1) {
    cvContainer.classList.add("style2");
    header.classList.add("left-align");
  } else if (currentStyle === 2) {
    cvContainer.classList.add("style3");
    header.classList.add("center-align");
  } else if (currentStyle === 3) {
    cvContainer.classList.add("style4");
    header.classList.add("center-align");
    body.classList.add("animated-background");
  }

  toggleTheme();
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode", isDarkMode);
  body.classList.toggle("light-mode", !isDarkMode);
  isDarkMode = !isDarkMode;

  updateIconColors();
}

function updateIconColors() {
  const icons = document.querySelectorAll(
    "svg path:not(#qr-code-icon svg path)"
  );

  if (document.body.classList.contains("animated-background")) {
    icons.forEach((icon) => {
      icon.style.fill = "#00ff00"; // Neon green
    });
  } else if (document.body.classList.contains("dark-mode")) {
    icons.forEach((icon) => {
      icon.style.fill = "#ffffff"; // White
    });
  } else {
    icons.forEach((icon) => {
      icon.style.fill = "#000000"; // Black
    });
  }
}

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiCodePosition = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
      window.location.href = "https://dn.ht/picklecat/";
    }
  } else {
    konamiCodePosition = 0;
  }
});

// New code for showing the face image
const faceCode = ["Numpad7", "Numpad6", "Numpad6", "Numpad7"];
let faceCodePosition = 0;

document.addEventListener("keydown", (event) => {
  if (event.code === faceCode[faceCodePosition]) {
    faceCodePosition++;
    if (faceCodePosition === faceCode.length) {
      document.querySelector("header img").style.display = "block";
    }
  } else {
    faceCodePosition = 0;
  }
});
