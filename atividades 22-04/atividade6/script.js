let senhaCorreta = "1234";
let acesso = false; // Variável que controla se o acesso foi permitido

for (let cont = 1; cont <= 3; cont++) {

    let senha = prompt(`Digite a senha ${cont} tentativa :`);

    if (senha == senhaCorreta) {
        alert("Acesso permitido!");
        acesso = true; // Marca que o acesso foi liberado
        break;
    } else {
        alert(`${cont} tentativa inválida.`);
    }
}

if (!acesso) { // Depois que o loop termina, verifica se o usuário NÃO conseguiu acessar
    alert("Acesso bloqueado. Número máximo de tentativas atingido.");
}