export default function initmenu() {
  const menu = document.querySelector("[data-menu]");
  const modal = document.getElementById("modal");
  const body = document.body;
  menu.addEventListener("click", ativarMenu);

  function ativarMenu(event) {
    menu.classList.toggle("ativo");
    modal.classList.toggle("ativo");
    menuAberto();
  }

  modal.addEventListener("click", clicarModal);
  function clicarModal(event) {
    if (event.target === this) {
      ativarMenu(event);
    }
  }

  function menuAberto() {
    if (menu.classList.contains("ativo") && modal.classList.contains("ativo")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }
  }
  menuAberto();

  window.addEventListener("resize", remover);
  function remover() {
    const larguraTela = window.innerWidth;
    if (larguraTela > 960) {
      modal.classList.remove("ativo");
      menu.classList.remove("ativo");
    }
  }

  remover();
}
