import fs from "fs";
import {criarParcerJuridico, encontrarParecerJuridicos} from "./ParecerJuridicoController.js";

export let pareceresJuricios = [];
export let autores = [];

function lerDados() {
    const data = fs.readFileSync('../../mock.json', {encoding: "utf-8", flag: "r"});
    const jsonData = JSON.parse(data);

    jsonData['autores'].forEach((autor) => {
        autores.push(autor);
    });

    jsonData['pareceres'].forEach((parecer) => {
        const dbParecer = criarParcerJuridico(parecer.assunto, parecer.ementa, parecer.justificacao, parecer.conclusao, parecer.criadoEm, autores[0]);
        pareceresJuricios.push(dbParecer);
    });

}

lerDados();
