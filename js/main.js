document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector('[data-toggle="collapsible"]');
  const collapsibleContent = document.querySelector(".collapsible_content");

  toggleButton.addEventListener("click", () => {
    collapsibleContent.classList.toggle("active");
  });
});

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

