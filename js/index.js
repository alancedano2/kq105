document.querySelectorAll(".list-card").forEach(card => {
  card.addEventListener("click", () => {
    document.body.classList.add("page-exit");
  });
});