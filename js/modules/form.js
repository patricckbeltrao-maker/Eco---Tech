/*
 * =========================================================
 * FORMULÁRIO
 * =========================================================
 */

import {
  obterContatos,
  salvarContato,
  limparContatos
} from "./storage.js";


/*
 * Quando uma página é renderizada,
 * verificamos se é a página de contato.
 */

document.addEventListener(
  "pagina:renderizada",
  (event) => {

    if (event.detail.rota === "contato") {

      iniciarFormularioPagina();

    }


    if (event.detail.rota === "projetos") {

      iniciarBotoesProjetos();

    }

  }
);


/*
 * Função exportada para o main.js.
 */

export function iniciarFormulario() {

  /*
   * O formulário será inicializado
   * quando a rota de contato for carregada.
   */

}


/*
 * =========================================================
 * FORMULÁRIO DA PÁGINA
 * =========================================================
 */

function iniciarFormularioPagina() {

  const form =
    document.getElementById(
      "contactForm"
    );


  if (!form) {

    return;

  }


  const nome =
    document.getElementById(
      "nome"
    );


  const email =
    document.getElementById(
      "email"
    );


  /*
   * Eventos do nome
   */

  nome.addEventListener(
    "blur",
    () => {

      validarNome();

    }
  );


  nome.addEventListener(
    "input",
    () => {

      if (
        nome.classList.contains(
          "invalid"
        )
      ) {

        validarNome();

      }

    }
  );


  /*
   * Eventos do email
   */

  email.addEventListener(
    "blur",
    () => {

      validarEmail();

    }
  );


  email.addEventListener(
    "input",
    () => {

      if (
        email.classList.contains(
          "invalid"
        )
      ) {

        validarEmail();

      }

    }
  );


  /*
   * Evento de envio
   */

  form.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      enviarFormulario();

    }
  );


  /*
   * Exibe os dados já salvos.
   */

  renderizarContatos();

}


/*
 * =========================================================
 * VALIDAÇÃO DO NOME
 * =========================================================
 */

function validarNome() {

  const nome =
    document.getElementById(
      "nome"
    );


  const mensagem =
    document.getElementById(
      "nomeMessage"
    );


  const valido =
    nome.value.trim() !== "" &&
    nome.checkValidity();


  if (valido) {

    nome.classList.remove(
      "invalid"
    );

    nome.classList.add(
      "valid"
    );

    mensagem.textContent =
      "Campo válido.";

    mensagem.className =
      "field-message success";

  } else {

    nome.classList.remove(
      "valid"
    );

    nome.classList.add(
      "invalid"
    );

    mensagem.textContent =
      "Digite seu nome completo.";

    mensagem.className =
      "field-message error";

  }


  return valido;

}


/*
 * =========================================================
 * VALIDAÇÃO DO EMAIL
 * =========================================================
 */

function validarEmail() {

  const email =
    document.getElementById(
      "email"
    );


  const mensagem =
    document.getElementById(
      "emailMessage"
    );


  const valido =
    email.value.trim() !== "" &&
    email.checkValidity();


  if (valido) {

    email.classList.remove(
      "invalid"
    );

    email.classList.add(
      "valid"
    );

    mensagem.textContent =
      "E-mail válido.";

    mensagem.className =
      "field-message success";

  } else {

    email.classList.remove(
      "valid"
    );

    email.classList.add(
      "invalid"
    );

    mensagem.textContent =
      "Digite um e-mail válido.";

    mensagem.className =
      "field-message error";

  }


  return valido;

}


/*
 * =========================================================
 * ENVIO DO FORMULÁRIO
 * =========================================================
 */

function enviarFormulario() {

  const nomeValido =
    validarNome();


  const emailValido =
    validarEmail();


  const feedback =
    document.getElementById(
      "formFeedback"
    );


  /*
   * Se existir erro,
   * interrompe o envio.
   */

  if (
    !nomeValido ||
    !emailValido
  ) {

    feedback.innerHTML = `

      <div class="alert alert-danger">

        <i class="fa-solid fa-triangle-exclamation"></i>

        <span>
          Por favor, verifique os campos destacados em vermelho.
        </span>

      </div>

    `;

    return;

  }


  /*
   * Cria o objeto do contato.
   */

  const contato = {

    nome:
      document
        .getElementById("nome")
        .value
        .trim(),

    email:
      document
        .getElementById("email")
        .value
        .trim()

  };


  /*
   * Salva no LocalStorage.
   */

  salvarContato(contato);


  /*
   * Mensagem de sucesso.
   */

  feedback.innerHTML = `

    <div class="alert alert-success">

      <i class="fa-solid fa-circle-check"></i>

      <span>
        Seu cadastro foi realizado com sucesso!
      </span>

    </div>

  `;


  /*
   * Limpa formulário.
   */

  document
    .getElementById("contactForm")
    .reset();


  /*
   * Remove estados visuais.
   */

  document
    .getElementById("nome")
    .classList.remove(
      "valid",
      "invalid"
    );


  document
    .getElementById("email")
    .classList.remove(
      "valid",
      "invalid"
    );


  document
    .getElementById("nomeMessage")
    .textContent = "";


  document
    .getElementById("emailMessage")
    .textContent = "";


  /*
   * Atualiza a lista de contatos.
   */

  renderizarContatos();

}


/*
 * =========================================================
 * EXIBIR DADOS SALVOS
 * =========================================================
 */

function renderizarContatos() {

  const container =
    document.getElementById(
      "savedContacts"
    );


  if (!container) {

    return;

  }


  const contatos =
    obterContatos();


  if (
    contatos.length === 0
  ) {

    container.innerHTML = `

      <div class="saved-contacts">

        <h3>
          Cadastros salvos
        </h3>

        <p>
          Nenhum cadastro salvo neste navegador.
        </p>

      </div>

    `;

    return;

  }


  let html = `

    <div class="saved-contacts">

      <h3>
        Cadastros salvos
      </h3>

  `;


  contatos.forEach(
    (contato) => {

      html += `

        <div class="saved-contact">

          <strong>
            Nome:
          </strong>

          ${contato.nome}

          <br>

          <strong>
            E-mail:
          </strong>

          ${contato.email}

        </div>

      `;

    }
  );


  html += `

      <button
        type="button"
        class="btn btn-primary"
        id="clearStorageBtn">

        Limpar cadastros

      </button>

    </div>

  `;


  container.innerHTML =
    html;


  /*
   * Evento para limpar LocalStorage.
   */

  const limparBtn =
    document.getElementById(
      "clearStorageBtn"
    );


  limparBtn.addEventListener(
    "click",
    () => {

      limparContatos();

      renderizarContatos();

    }
  );

}


/*
 * =========================================================
 * BOTÕES DOS PROJETOS
 * =========================================================
 */

function iniciarBotoesProjetos() {

  const botoes =
    document.querySelectorAll(
      "[data-project]"
    );


  botoes.forEach(
    (botao) => {

      botao.addEventListener(
        "click",
        () => {

          alert(
            `Projeto selecionado: ${botao.dataset.project}`
          );

        }
      );

    }
  );

}