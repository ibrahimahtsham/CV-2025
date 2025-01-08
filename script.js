let currentStyle = 0;
let isDarkMode = false;

function toggleStyle() {
  const cvContainer = document.querySelector(".cv-container");
  cvContainer.classList.remove("style1", "style2", "style3");

  currentStyle = (currentStyle + 1) % 3;

  if (currentStyle === 0) {
    cvContainer.classList.add("style1");
  } else if (currentStyle === 1) {
    cvContainer.classList.add("style2");
  } else if (currentStyle === 2) {
    cvContainer.classList.add("style3");
  }

  toggleTheme();
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode", isDarkMode);
  body.classList.toggle("light-mode", !isDarkMode);
  isDarkMode = !isDarkMode;
}
