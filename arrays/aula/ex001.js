let dadosPessoa = ["Luffy", 19, 1.78]

console.log(`
        Dados do personagem:
    Nome Personagem: ${dadosPessoa[0]}  // ele vai pegando as informacões de um por um
    Idade do Personagem: ${dadosPessoa[1]} 
    Altura do Personagem: ${dadosPessoa[2]}
`)

console.log("--------------------")
console.log(dadosPessoa.join("\n"))

//inserindo novos valores no array
console.log("--------------------")
dadosPessoa.push("Zoro")
console.log(dadosPessoa.join("\n"))

//Inserindo um novo elemento o ínicio
console.log("--------------------")
dadosPessoa.unshift("Namy")
console.log(dadosPessoa.join("\n"))

// inserindo novo elemento em uma posição específica
console.log("--------------------")
dadosPessoa.splice(dadosPessoa[0], 0, "Luffy" ) // O "0" não apaga o elemento, se por acaso eu colocar "1" ele vai apagar uma informação
console.log(dadosPessoa.join("\n"))

// Excluindo último elemento da lista
dadosPessoa.pop()
console.log("--------------------")
console.log(dadosPessoa.join("\n"))

// Excluindo primeiro elemento da lista
dadosPessoa.shift()
console.log("--------------------")
console.log(dadosPessoa.join("\n"))

// Excluindo por uma posição específica
dadosPessoa.splice(1,1) // O primeiro é a posição e o segundo e a quantidade que vc quer apagar depois da condição
console.log("--------------------")
console.log(dadosPessoa.join("\n"))