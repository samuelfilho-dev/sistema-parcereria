function Autor(nome, sobrenome, email, senha) {
  const id = Math.floor(Math.random() * 1_000) + 1;

  this.id = id;
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
  this.senha = senha;
}

function ParecerJuridico(titulo, assunto, ementa, justificacao, conclusao, notaDeClassificacao, autor) {
    const id = Math.floor(Math.random() * 1_000) + 1;

    this.titulo = titulo;
    this.assunto = assunto;
    this.ementa = ementa;
    this.justificacao = justificacao;
    this.conclusao = conclusao;
    this.notaDeClassificacao = notaDeClassificacao;
    this.autor = autor;
}
