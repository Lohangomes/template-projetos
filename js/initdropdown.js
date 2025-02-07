export default function initdropdown() {
  const dropdown = document.querySelectorAll("[data-dropdown]");

  dropdown.forEach((drop) => {
    drop.addEventListener("click", ativarDropdown);
  });

  function ativarDropdown(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
  }
}
