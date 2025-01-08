let currentStyle = 0;
let isDarkMode = false;

function toggleStyle() {
  const cvContainer = document.querySelector(".cv-container");
  const headerContainer = document.querySelector(".header-container");
  const body = document.body;

  cvContainer.classList.remove("style1", "style2", "style3", "style4");
  headerContainer.classList.remove("left-align", "center-align");
  body.classList.remove("animated-background");

  currentStyle = (currentStyle + 1) % 4;

  if (currentStyle === 0) {
    cvContainer.classList.add("style1");
    headerContainer.classList.add("left-align");
  } else if (currentStyle === 1) {
    cvContainer.classList.add("style2");
    headerContainer.classList.add("left-align");
  } else if (currentStyle === 2) {
    cvContainer.classList.add("style3");
    headerContainer.classList.add("center-align");
  } else if (currentStyle === 3) {
    cvContainer.classList.add("style4");
    headerContainer.classList.add("center-align");
    body.classList.add("animated-background");
  }

  toggleTheme();
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode", isDarkMode);
  body.classList.toggle("light-mode", !isDarkMode);
  isDarkMode = !isDarkMode;
}
