export function Autor(nome, sobrenome, email, senha) {

    this.id = Math.floor(Math.random() * 1_000) + 1;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.senha = senha;
}

export function ParecerJuridico(assunto, ementa, justificacao, conclusao, notaDeClassificacao, criadoEm, autor) {
    const id = Math.floor(Math.random() * 1_000) + 1;

    this.titulo = `PARECER JURIDICO Nº ${id}/2024`;
    this.assunto = assunto;
    this.ementa = ementa;
    this.justificacao = justificacao;
    this.conclusao = conclusao;
    this.notaDeClassificacao = [notaDeClassificacao];
    this.criadoEm = criadoEm;
    this.autor = autor;
}
