/*
 * =========================================================
 * ARQUIVO PRINCIPAL
 * =========================================================
 *
 * Responsável por iniciar os módulos da aplicação.
 */

import { iniciarNavegacao } from "./modules/navigation.js";
import { iniciarFormulario } from "./modules/form.js";


document.addEventListener("DOMContentLoaded", () => {

  // Inicia a navegação da SPA
  iniciarNavegacao();

  // Inicia os eventos do formulário
  iniciarFormulario();

});