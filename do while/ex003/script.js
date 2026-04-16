let dia
do {
    dia = +prompt(`
    Qual dia deseja realizar o pagamento do boleto
    `)
    //Validação Condicional
    if(dia ==2 || dia == 5 || dia == 10){
        alert("Boleto Registrado!")
        //break
    } else {
        alert("Boleto não registrado")
        alert("Boleto não registrado")
    }
} while (dia !=2 && dia != 5 && dia != 10);