function fadeAndNavigate(url) {
  const fadeContainer = document.getElementById("fade-container");
  fadeContainer.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 500);
}
