let tempIdeal = +prompt("Digite a temperatura ideal para sua esteira:"); 
let tempAtual = +prompt("Digite a temperatura atual:"); 
let tempo = 0; // variável que vai contar os segundos
let atingiu = false; // controla se a mensagem da "temperatura ideal atingida" já foi mostrada

while (tempo < 5 || tempAtual < tempIdeal) { // O || vai verificar se pelo menos uma condição é verdadeira
    tempo++; // a cada volta do loop, passa 1 segundo
    if (tempAtual < tempIdeal){// Se a temperatura atual for menor que a ideal,aumenta 1 grau a cada segundo
        tempAtual++; 
    }
 alert(`Aquecendo... segundo ${tempo}`);
    
    if (tempAtual == tempIdeal && atingiu) {// verifica se acabou de atingir a temperatura e se ainda não mostrou mensagem
        alert("Temperatura ideal atingida");
        atingiu = true; // marca como verdadeiro para não repetir a mensagem
    }
}
alert(`O tempo que o sistema permaneceu ligado foi de ${tempo} segundos`);