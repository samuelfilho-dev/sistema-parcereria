import fs from "fs";

import {ParecerJuridico} from "../models/models.js";

let pareceresJuricios = [];
let autores = [];

function criarParcerJuridico(assunto, ementa, justificacao, conclusao) {
    return new ParecerJuridico(
        assunto,
        ementa,
        justificacao,
        conclusao,
        0,
        autor
    );
}

function lerDados() {
    const data = fs.readFileSync('../mock.json', {encoding: "utf-8", flag: "r"});
    const jsonData = JSON.parse(data);

    jsonData['pareceres'].forEach((parecer) => {
        pareceresJuricios.push(parecer);
    });

    jsonData['autores'].forEach((autor) => {
        autores.push(autor);
    });
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
    return pareceresJuricios;
}

function avaliarParecerJuridico(nota) {
}

lerDados();

