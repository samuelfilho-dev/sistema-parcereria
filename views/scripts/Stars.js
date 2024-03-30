import {avaliacoes} from "./ParecerJuridicos.js";

export function criarEstrelas(notaDeClassificacao) {
    let estrelas = '';
    const maxEstrelas = 5;
    const estrelasCheias = Math.floor(notaDeClassificacao);
    const estrelaParcial = notaDeClassificacao - estrelasCheias;

    for (let i = 0; i < maxEstrelas; i++) {
        if (i < estrelasCheias) {
            estrelas += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="11" height="11"><polygon points="50,5 61,39 97,39 68,63 79,97 50,77 21,97 32,63 3,39 39,39" fill="yellow"/></svg>';
        } else if (i === estrelasCheias && estrelaParcial > 0) {
            // Calcula a largura da estrela parcial
            const width = estrelaParcial * 100;
            estrelas += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="11" height="11"><polygon points="50,5 61,39 ${50 + width / 2},39 ${50 + width / 4 * 3},63 ${50 + width},97 50,77 21,97 32,63 3,39 ${50 + width / 4},39" fill="yellow"/></svg>`;
        } else {
            estrelas += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="11" height="11"><polygon points="50,5 61,39 97,39 68,63 79,97 50,77 21,97 32,63 3,39 39,39" fill="none" stroke="yellow"/></svg>';
        }
    }

    document.querySelectorAll('.stars').forEach((element) => {
        element.innerHTML = estrelas;
    });
}

function salvarAvaliacao() {
    const stars = document.querySelectorAll('.rating input');
    let notaDeClassificacao = 0;

    stars.forEach(element => {
        element.addEventListener('click', function () {
            notaDeClassificacao = this.value;
            // avaliacoes.push(notaDeClassificacao);
            // console.log("notas de class",notaDeClassificacao);
        });
    });

    document.querySelectorAll('.btn-salvar-avalicao').forEach(element => {
        element.addEventListener('click', function () {
            alert('Avaliação salva com sucesso! Nota de classificação: ' + notaDeClassificacao);
        });
    });

}

// const estrelasContainer = document.querySelectorAll('.estrelas-container');


// for (let i = 0; i < estrelasContainer.length; i++) {
//     const element = document.querySelectorAll('.estrelas-container')[i];
//     const estrelasNotas  = document.querySelectorAll('.estrelas-notas')[i].innerText;
//    
//     const notaDeClassificacao = parseFloat(estrelasNotas);
//     console.log(notaDeClassificacao);
//     criarEstrelas(notaDeClassificacao, element);
//    
//}

salvarAvaliacao();