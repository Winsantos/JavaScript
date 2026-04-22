let total = 0; 
let resultado = ""; // string para mostrar os valores

for (let dia = 1; dia <= 10; dia++) {

    total += dia; 

    resultado += (`Dia ${dia}: R$${total}\n`);
}
alert(resultado);