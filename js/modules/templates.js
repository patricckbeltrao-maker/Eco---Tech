/*
 * =========================================================
 * TEMPLATES DA APLICAÇÃO
 * =========================================================
 *
 * Responsável por gerar o conteúdo HTML das páginas.
 */

const projetos = [
  {
    categoria: "Educação",
    classe: "badge-info",
    titulo: "Inclusão Digital",
    descricao: "Capacitação e letramento digital para jovens e adultos da comunidade local."
  },
  {
    categoria: "Saúde",
    classe: "badge-success",
    titulo: "Atendimento Comunitário",
    descricao: "Ações de apoio nutricional e cuidados preventivos de saúde básica."
  },
  {
    categoria: "Meio Ambiente",
    classe: "badge-warning",
    titulo: "Horta Comunitária",
    descricao: "Cultivo sustentável e oficinas de agroecologia urbana."
  }
];


/* =========================================================
   PÁGINA INICIAL
========================================================= */

export function templateInicio() {

  return `

    <!-- Feedback / Badges / Alertas -->

    <section class="grid-col-12 section-block">

      <h2>Categorizações e Alertas</h2>

      <div class="badges-container">

        <span class="badge badge-success">
          Ativo
        </span>

        <span class="badge badge-warning">
          Em Breve
        </span>

        <span class="badge badge-danger">
          Encerrado
        </span>

        <span class="badge badge-info">
          Voluntariado
        </span>

      </div>


      <div class="alert alert-success">

        <i class="fa-solid fa-circle-check"></i>

        <span>
          Sua doação foi processada com sucesso!
        </span>

      </div>


      <div class="alert alert-danger">

        <i class="fa-solid fa-triangle-exclamation"></i>

        <span>
          Por favor, verifique os campos destacados em vermelho.
        </span>

      </div>

    </section>


    <!-- Introdução -->

    <section class="grid-col-12 section-block">

      <div class="page-intro">

        <h2>
          Plataforma Social
        </h2>

        <p>
          Organização e divulgação de projetos do terceiro setor,
          facilitando o acesso da comunidade às iniciativas sociais.
        </p>

      </div>

    </section>

  `;
}


/* =========================================================
   PÁGINA DE PROJETOS
========================================================= */

export function templateProjetos() {

  const cardsProjetos = projetos.map((projeto) => {

    return `
      <article class="project-card">

        <div class="card-body">

          <span class="badge ${projeto.classe}">
            ${projeto.categoria}
          </span>

          <h3>
            ${projeto.titulo}
          </h3>

          <p>
            ${projeto.descricao}
          </p>

        </div>

        <div class="card-footer">

          <button
            class="btn btn-primary"
            type="button"
            data-project="${projeto.titulo}">

            Saiba Mais

          </button>

        </div>

      </article>
    `;

  }).join("");


  return `

    <section class="grid-col-12 section-block">

      <h2>
        Nossos Projetos Ativos
      </h2>

      <div class="projects-grid">

        ${cardsProjetos}

      </div>

    </section>

  `;
}


/* =========================================================
   PÁGINA SOBRE
========================================================= */

export function templateSobre() {

  return `

    <section class="grid-col-12 section-block">

      <h2>
        Sobre a Plataforma
      </h2>

      <p>
        A plataforma foi criada para organizar informações
        de iniciativas do terceiro setor em uma interface
        simples, responsiva e acessível.
      </p>


      <div class="alert alert-success">

        <i class="fa-solid fa-circle-check"></i>

        <span>
          Interface preparada para diferentes tamanhos de tela.
        </span>

      </div>

    </section>

  `;
}


/* =========================================================
   PÁGINA DE CONTATO
========================================================= */

export function templateContato() {

  return `

    <section class="grid-col-12 section-block">

      <h2>
        Área de Contato e Cadastro
      </h2>


      <!-- Feedback do formulário -->

      <div
        id="formFeedback"
        aria-live="polite">
      </div>


      <form
        class="contact-form"
        id="contactForm"
        novalidate>


        <!-- NOME -->

        <div class="form-group">

          <label for="nome">
            Nome Completo
          </label>

          <input
            type="text"
            id="nome"
            class="form-control"
            placeholder="Seu nome completo"
            autocomplete="name"
            required>

          <span
            id="nomeMessage"
            class="field-message">
          </span>

        </div>


        <!-- EMAIL -->

        <div class="form-group">

          <label for="email">
            E-mail
          </label>

          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="seu@email.com"
            autocomplete="email"
            required>

          <span
            id="emailMessage"
            class="field-message">
          </span>

        </div>


        <!-- BOTÕES -->

        <div class="form-buttons">

          <button
            type="submit"
            class="btn btn-primary">

            Enviar

          </button>


          <button
            type="button"
            class="btn btn-primary"
            id="openModalBtn">

            Abrir Modal

          </button>


          <button
            type="button"
            class="btn btn-primary"
            disabled>

            Desabilitado

          </button>

        </div>

      </form>


      <!-- LOCAL STORAGE -->

      <div
        class="saved-contacts"
        id="savedContacts">

      </div>

    </section>

  `;
}


/* =========================================================
   PÁGINA APOIE JÁ
========================================================= */

export function templateDoar() {

  return `

    <section class="grid-col-12 section-block">

      <h2>
        Apoie Já
      </h2>

      <p>
        Sua contribuição ajuda a manter projetos sociais
        e iniciativas comunitárias.
      </p>


      <div class="alert alert-success">

        <i class="fa-solid fa-circle-check"></i>

        <span>
          Entre em contato para conhecer as formas de apoio.
        </span>

      </div>

    </section>

  `;
}


/* =========================================================
   PÁGINA NÃO ENCONTRADA
========================================================= */

export function templateNaoEncontrado() {

  return `

    <section class="grid-col-12 section-block">

      <h2>
        Página não encontrada
      </h2>

      <p>
        O endereço informado não corresponde a uma página
        da plataforma.
      </p>

      <a
        href="#inicio"
        class="btn btn-primary">

        Voltar ao início

      </a>

    </section>

  `;
}