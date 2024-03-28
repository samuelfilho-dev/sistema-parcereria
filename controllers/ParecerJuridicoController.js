import fs from "fs";

import {ParecerJuridico} from "../models/models.js";

let pareceresJuricios = [];
let autores = [];

function lerDados() {
    const data = fs.readFileSync('../mock.json', {encoding: "utf-8", flag: "r"});
    const jsonData = JSON.parse(data);

    jsonData['autores'].forEach((autor) => {
        autores.push(autor);
    });

    jsonData['pareceres'].forEach((parecer) => {
        const dbParecer = new criarParcerJuridico(parecer.assunto, parecer.ementa, parecer.justificacao, parecer.conclusao, autores[0]);
        pareceresJuricios.push(dbParecer);
    });

}

function criarParcerJuridico(assunto, ementa, justificacao, conclusao, autor) {
    return new ParecerJuridico(
        assunto,
        ementa,
        justificacao,
        conclusao,
        0,
        autor
    );
}

function atualizarParecerJuridico(id, assunto, ementa, justifacao, conclusao) {
    const parecerJuridico = encontrarParecerJuridicoPeloId(id);

    parecerJuridico.assunto = assunto;
    parecerJuridico.ementa = ementa;
    parecerJuridico.justificacao = justifacao;
    parecerJuridico.conclusao = conclusao;

    return parecerJuridico;
}

function deletarParecerJuridico(id) {
    const index = pareceresJuricios.findIndex(parecer => parecer.id === id)
    pareceresJuricios.splice(index, 1);
}

function encontrarParecerJuridicoPeloId(id) {
    return pareceresJuricios.find(parecer => parecer.id = id);
}

function encontrarParecerJuridicoPeloNome(nome) {
    return pareceresJuricios.find(parecer => parecer.titulo = nome);
}

function encontrarParecerJuridicos() {
    return pareceresJuricios;
}

function avaliarParecerJuridico(id, nota) {
    const parecerJuridico = encontrarParecerJuridicoPeloId(id);
    parecerJuridico.notaDeClassificacao.push(nota);
}
