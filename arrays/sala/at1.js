let carros 
let modelosCar = []

for(let cont = 0; cont < 5; cont++){
   
    carros = prompt("Adicione o nome do carro:")
    modelosCar.push(carros)
}
    alert(`Os modelos que você escolheu: ${modelosCar.join("\n")}`)


let remove = carros.slice(0,2)

alert(`Carros removidos: ${remove.join('\n')}`)


