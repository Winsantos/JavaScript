function exemploVar(){
    if(true) {
        var nome = Cardoso
    }
    console.log(nome)
}

exemploVar()
function exemploLet(){
    if(true){
        let nome = 'Cardoso'
        console.log(nome)
    }
    console.log(nome)
}
exemploLet()

function exemploConst(){
    if(true){
        const nome = 'Luffy'
        //FUNCIONA: console.log(nome)
    }

    nome = 'Sanji'
}