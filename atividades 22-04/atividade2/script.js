let senha = prompt("Digite sua senha aqui:")

for (let cont = 0; cont < senha.length; cont++) { // // "senha.length" representa a quantidade de caracteres da string
    console.log( senha[cont]); // O "senha[cont]" pega cada caractere da senha separadamente
}
alert(`Sua senha digitada foi: \n ${senha}`) 


/* //lista length => qtd de elementos
for (let i = 0; i < frutas.length; i++){
    console.log("Fruta: " + frutas[i])
} */
