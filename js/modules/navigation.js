/*
 * =========================================================
 * NAVEGAÇÃO SPA
 * =========================================================
 */

import {
  templateInicio,
  templateProjetos,
  templateSobre,
  templateContato,
  templateDoar,
  templateNaoEncontrado
} from "./templates.js";


/*
 * =========================================================
 * ROTAS DA SPA
 * =========================================================
 */

const rotas = {

  inicio: templateInicio,

  projetos: templateProjetos,

  sobre: templateSobre,

  contato: templateContato,

  doar: templateDoar

};


/*
 * =========================================================
 * INICIA A NAVEGAÇÃO
 * =========================================================
 */

export function iniciarNavegacao() {

  /*
   * Observa mudanças no endereço da página.
   */

  window.addEventListener(
    "hashchange",
    renderizarRota
  );


  /*
   * Verifica se existe uma rota.
   */

  if (!window.location.hash) {

    window.location.hash = "#inicio";

  } else {

    renderizarRota();

  }


  /*
   * Inicia o menu hambúrguer.
   */

  iniciarMenuHamburguer();

}


/*
 * =========================================================
 * MENU HAMBÚRGUER
 * =========================================================
 */

function iniciarMenuHamburguer() {

  const hamburgerBtn =
    document.getElementById(
      "hamburgerBtn"
    );


  const navMenu =
    document.getElementById(
      "navMenu"
    );


  /*
   * Verifica se os elementos existem.
   */

  if (
    !hamburgerBtn ||
    !navMenu
  ) {

    return;

  }


  /*
   * Evento de clique no botão.
   */

  hamburgerBtn.addEventListener(
    "click",
    () => {

      /*
       * Adiciona ou remove a classe active.
       */

      navMenu.classList.toggle(
        "active"
      );


      /*
       * Atualiza o aria-expanded
       * para acessibilidade.
       */

      const menuAberto =
        navMenu.classList.contains(
          "active"
        );


      hamburgerBtn.setAttribute(
        "aria-expanded",
        menuAberto
      );


      /*
       * Troca o ícone do botão.
       */

      const icone =
        hamburgerBtn.querySelector(
          "i"
        );


      if (icone) {

        if (menuAberto) {

          icone.classList.remove(
            "fa-bars"
          );

          icone.classList.add(
            "fa-xmark"
          );

        } else {

          icone.classList.remove(
            "fa-xmark"
          );

          icone.classList.add(
            "fa-bars"
          );

        }

      }

    }
  );


  /*
   * Fecha o menu quando algum link
   * de navegação é clicado.
   */

  const links =
    navMenu.querySelectorAll(
      "a"
    );


  links.forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          navMenu.classList.remove(
            "active"
          );


          hamburgerBtn.setAttribute(
            "aria-expanded",
            "false"
          );


          const icone =
            hamburgerBtn.querySelector(
              "i"
            );


          if (icone) {

            icone.classList.remove(
              "fa-xmark"
            );

            icone.classList.add(
              "fa-bars"
            );

          }

        }
      );

    }
  );

}


/*
 * =========================================================
 * RENDERIZA A ROTA
 * =========================================================
 */

function renderizarRota() {

  const app =
    document.getElementById(
      "app"
    );


  if (!app) {

    return;

  }


  /*
   * Pega o nome da rota.
   *
   * Exemplo:
   * #projetos
   *
   * vira:
   * projetos
   */

  const rota =
    window.location.hash
      .replace("#", "")
      .split("/")[0];


  /*
   * Procura o template correspondente.
   */

  const template =
    rotas[rota];


  /*
   * Renderiza o template.
   */

  if (template) {

    app.innerHTML =
      template();

  } else {

    app.innerHTML =
      templateNaoEncontrado();

  }


  /*
   * Foco no conteúdo principal.
   */

  app.focus();


  /*
   * Avisa aos outros módulos
   * que uma página foi carregada.
   */

  document.dispatchEvent(
    new CustomEvent(
      "pagina:renderizada",
      {
        detail: {
          rota: rota
        }
      }
    )
  );

}


/*
 * =========================================================
 * MODAL
 * =========================================================
 */

document.addEventListener(
  "click",
  (event) => {

    /*
     * Abrir modal
     */

    const abrir =
      event.target.closest(
        "#openModalBtn"
      );


    if (abrir) {

      abrirModal();

    }


    /*
     * Fechar pelo X
     */

    const fechar =
      event.target.closest(
        "#closeModalBtn"
      );


    if (fechar) {

      fecharModal();

    }


    /*
     * Fechar pelo botão inferior
     */

    const fecharFooter =
      event.target.closest(
        "#closeModalFooterBtn"
      );


    if (fecharFooter) {

      fecharModal();

    }


    /*
     * Fechar clicando fora do modal
     */

    if (
      event.target.id ===
      "modalOverlay"
    ) {

      fecharModal();

    }

  }
);


/*
 * =========================================================
 * ABRIR MODAL
 * =========================================================
 */

function abrirModal() {

  const modal =
    document.getElementById(
      "modalOverlay"
    );


  if (!modal) {

    return;

  }


  modal.classList.add(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


/*
 * =========================================================
 * FECHAR MODAL
 * =========================================================
 */

function fecharModal() {

  const modal =
    document.getElementById(
      "modalOverlay"
    );


  if (!modal) {

    return;

  }


  modal.classList.remove(
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/*
 * =========================================================
 * TECLA ESC FECHA O MODAL
 * =========================================================
 */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      fecharModal();

    }

  }
);