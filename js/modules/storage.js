/*
 * =========================================================
 * LOCAL STORAGE
 * =========================================================
 */


/*
 * Nome usado para guardar os dados.
 */

const CHAVE_STORAGE =
  "plataformaSocial_contatos";


/*
 * Obtém os contatos salvos.
 */

export function obterContatos() {

  try {

    const dados =
      localStorage.getItem(CHAVE_STORAGE);


    if (!dados) {

      return [];

    }


    return JSON.parse(dados);

  } catch (erro) {

    console.error(
      "Erro ao ler o LocalStorage:",
      erro
    );

    return [];

  }

}


/*
 * Salva um novo contato.
 */

export function salvarContato(contato) {

  const contatos =
    obterContatos();


  contatos.push({

    id: Date.now(),

    nome: contato.nome,

    email: contato.email

  });


  localStorage.setItem(

    CHAVE_STORAGE,

    JSON.stringify(contatos)

  );

}


/*
 * Limpa todos os contatos.
 */

export function limparContatos() {

  localStorage.removeItem(
    CHAVE_STORAGE
  );

}