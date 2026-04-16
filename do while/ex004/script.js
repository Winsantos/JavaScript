let habilitacao;

do {
  habilitacao = +prompt(`
        Quantos anos você tem?
        `);
  if (habilitacao >= 18) {
    alert("agende a data da sua prova");
  } else {
    alert("Você não tem permissão para acessar esse site");
  }
} while (habilitacao < 18);
