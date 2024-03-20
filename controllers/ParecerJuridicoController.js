import { Autor, ParecerJuridico } from "../models/models.js";

const autor = new Autor(
  "Enrico",
  "Santos",
  "enrico_henrique_santos@suzano.com.br",
  "nYUmeUY3iD"
);

function criarParcerJuridico(assunto, ementa, justificacao, conclusao) {
  const novoParecerJuridico = new ParecerJuridico(
    assunto,
    ementa,
    justificacao,
    conclusao,
    0,
    autor
  );

  return novoParecerJuridico;
}

function buscarParecerJuridico() {
  // TODO: fetch a API do Thiago e Matheus
}

function atualizarParecerJuridico(id) {
  // TODO: Buscar Parecer Juridico Pelo Id
  // TODO: Atualizar Parecer encontrado pelo Id
}

function deletarParecerJuridico(id) {
  // TODO: Buscar Parecer Juridico Pelo Id
  // TODO: Deletar Parecer encontrado pelo Id
}

function encontrarParecerJuridicoPeloId(id) {
  // TODO: Buscar Parecer Juridico Pelo Id
  // TODO: Entregar Parecer encontrado pelo Id
}

function encontrarParecerJuridicoPeloNome(nome) {
  // TODO: Buscar Parecer Juridico Pelo Nome
  // TODO: Entregar Parecer encontrado pelo Nome
}

function encontrarParecerJuridicos() {
  // TODO: Entregar Todos Parecer Juridicos
}

function avaliarParecerJuridico(nota) {}
