function adicionarComentario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  const divComentarios = document.getElementById("comentarios");

  const comentario = document.createElement("div");
  comentario.classList.add("comentario");

  const autor = document.createElement("strong");
  autor.textContent = nome + ": ";

  const texto = document.createElement("span");
  texto.textContent = mensagem;

  comentario.appendChild(autor);
  comentario.appendChild(texto);

  divComentarios.appendChild(comentario);

  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";
}
