document.querySelector(".menu-button")?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

document.querySelector(".reveal-token")?.addEventListener("click", (event) => {
  const input = document.querySelector("#api-token");
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  event.currentTarget.textContent = show ? "Скрыть" : "Показать";
});

document.querySelector("[data-refresh]")?.addEventListener("click", () => {
  window.location.reload();
});

