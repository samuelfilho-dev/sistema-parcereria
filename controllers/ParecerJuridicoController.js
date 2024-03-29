import {ParecerJuridico} from "../models/models.js";
import {pareceresJuricios} from "./LerParecerJuridico.js";


export function criarParcerJuridico(assunto, ementa, justificacao, conclusao, criadoEm, autor) {
    return new ParecerJuridico(
        assunto,
        ementa,
        justificacao,
        conclusao,
        [0],
        criadoEm,
        autor
    );
}

export function atualizarParecerJuridico(id, assunto, ementa, justifacao, conclusao) {
    const parecerJuridico = encontrarParecerJuridicoPeloId(id);

    parecerJuridico.assunto = assunto;
    parecerJuridico.ementa = ementa;
    parecerJuridico.justificacao = justifacao;
    parecerJuridico.conclusao = conclusao;

    return parecerJuridico;
}

export function deletarParecerJuridico(id) {
    const index = pareceresJuricios.findIndex(parecer => parecer.id === id)
    pareceresJuricios.splice(index, 1);
}

export function encontrarParecerJuridicoPeloId(id) {
    return pareceresJuricios.find(parecer => parecer.id = id);
}

export function encontrarParecerJuridicoPeloNome(nome) {
    return pareceresJuricios.find(parecer => parecer.titulo = nome);
}

export function encontrarParecerJuridicos() {
    return JSON.stringify(pareceresJuricios);
}

export function avaliarParecerJuridico(id, nota) {
    const parecerJuridico = encontrarParecerJuridicoPeloId(id);
    parecerJuridico.notaDeClassificacao.push(nota);
}
