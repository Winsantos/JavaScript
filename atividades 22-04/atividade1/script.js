let numerosPares = +prompt('Digite um número desejado:')
let number = "" // Variável do tipo string que vai armazenar os números pares encontrados

for(let cont = 0; cont <= numerosPares; cont++){
    if (cont % 2 == 0) /* O "%" ele pega o resto da divisão. Se o resto for 0, ele é par. Se o resto for 1, ele é ímpar */
    number += cont + '\n'  // Se for par, adiciona o número na variável "number" com quebra de linha
}
alert(`Os números pares são ${numerosPares}: \n ${number}`)