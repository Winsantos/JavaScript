// for -> mais comum

//estrutura de repetição = loop 
//exeuta N vezes um código

//for (INCREMENTO; CONDICAO; INCR.){}

// Incremento = i, j, k, m. ele controla a execução do loop
// condição = i < 10. Ele vai fazer o loop ser executado X vezes, até a minha condição não ser mais verdadeira
// Incrementador = i++ (cada loop, soma um)

// loop que itere de 0 até 4
for(let i = 0 ; i <= 4; i++){
    console.log("Loop for - o i é: " + i)
}

//arrays = listas
//contém geralmente items do mesmo tipo de dados
// lista de strings, de numeros...

let frutas = ["Maçã", "Banana", "Laranja", "Uva"] 

    console.log(frutas)

// xero based - O primeiro item sempre é zero
    console.log(frutas[0])
    console.log(frutas[1])

// i => 0, i => 1, i => 2 (assim por diante)
for(let i = 0; i < 3; i++){
    console.log("Fruta: " + frutas[i])
}

//lista length => qtd de elementos
for(let i = 0; i <frutas.length; i++){
    console.log("Fruta: " + frutas[i])
}

//while

// não sabe a condição final
let p = 0;

while(p < 5){ // enquanto o p for menor que 5, ele roda
    console.log("Loop while: " + p)

    p++
}

let aleatorio = 0

console.log(Math.floor(Math.random() * 10) + 1)

//while(aleatorio != 10){
   // aleatorio = Math.random() * 10

//}
