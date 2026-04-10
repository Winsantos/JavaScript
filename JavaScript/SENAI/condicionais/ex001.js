let nacionalidade = prompt(`Você tem nacionalidade brasileira?
    Informe 'sim' ou 'não'
    `)
if (nacionalidade == 'sim' || nacionalidade == 'Sim' || nacionalidade == 'SIM'){
    let rg = +prompt("Nos irforme o seu RG")
    alert(`
        RG informado: ${rg}
        `)
}

/* if (nacionalidade == 'Sim'){
    let rg = prompt("Nos irforme o seu RG")
    alert(`
        RG informado: ${rg}
        `)
}
if (nacionalidade == 'SIM'){
    let rg = prompt("Nos irforme o seu RG")
    alert(`
        RG informado: ${rg}
        `)
} */
if (nacionalidade == 'não' || nacionalidade == 'Não'|| nacionalidade == 'NÃO'){
     let passaporte = prompt("nos informe o seu passaporte")
     alert(`
        passaporte informado: ${passaporte} 
        `)
}
/* if (nacionalidade == 'Não'){
     let passaporte = prompt("nos informe o seu passaporte")
     alert(`
        passaporte informado: ${passaporte} 
        `)
}
if (nacionalidade == 'NÃO'){
     let passaporte = prompt("nos informe o seu passaporte")
     alert(`
        passaporte informado: ${passaporte} 
        `)
} */

   

/* let nacionalidade
nacionalidade = 'Brasil'

if(nacionalidade == 'Brasil'){
    console.log("Nos forneça o seu RG")
} else {
    console.log("Nos forneça o seu passaporte")
} */