document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".link-btn");

  buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";
    button.style.transition = "all 0.5s ease";

    setTimeout(() => {
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
    }, index * 150);
  });
});
