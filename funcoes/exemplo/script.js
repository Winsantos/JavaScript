/* let valor 
let resultado = 0


// O prompt sempre recebe uma string
function calculo(){
    for(let i = 1; i <= 2; i++){
        valor = +prompt("Informe o  "+i+"° valor")
        resultado += valor
    }
    alert( "Resultado: "+resultado)
}
calculo() */

//Utilizando parametros na funcao
 function calculo(quantidade){
    let resultado = 0
    for(let i = 1; i <= quantidade; i++){
        let valor = +prompt("Informe o  "+i+"° valor")
        resultado += valor
    }
    alert( "Resultado: "+resultado)
 }
 calculo(+prompt("Informe quantos números deseja efetuar uma operação"))