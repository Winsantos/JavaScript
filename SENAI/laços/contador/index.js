let idade 
let qntdMaiorIdade = 0 
let qntdMenorIdade = 0

for (let cont = 1; cont <= 3; cont++){
    idade = +prompt ("Informe sua idade:")
    if(idade >= 18){
            qntdMaiorIdade += 1
    } else {
            qntdMenorIdade += 1
    }
}

alert(`
    Dados das Idades:
    Quantidade de Pessoas Maior de Idade: ${qntdMaiorIdade}
    Quantidade de Pessoas Menor de Idade: ${qntdMenorIdade}
    `)