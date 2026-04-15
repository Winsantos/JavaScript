let velocidadeMedia = 0 
let multados = 0
let pare = ""

while(pare !='x' || pare !='X'){
    pare = prompt("Pressione qualquer tecla para prosseguir ou aperte 'x' para encerrar")
    //Condição de verificação
    if(pare == 'x' || pare =='X' ){
        alert("Programa encerrado!")
        break
    }
    let velocidadeVeiculo = +prompt("Informe a velocidade do veículo")
    if(velocidadeMedia > 120){
        alert("Veículo multado")
        multados += 1

    } else {
        alert("Velocidade permitida")
        velocidadeMedia += 1
    }
}
alert(`
        Quantidade de Veículos com velocidade permitida: ${velocidade}
        Quantidade de Veículos multados: ${multados} 
        `)