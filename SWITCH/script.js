let escolhaPersonagem = +prompt(`
        Menu de Personagens
    1 - Ang
    2 - Katara
    3 - Zuko
    4 - Tof
    5 - Sr. do fogo
    6 - Azura
    `)

    switch(escolhaPersonagem){
        case 1 :
            alert (`${escolhaPersonagem}, ele é o Avatar. Personagem que donima os 4 elementos`)
            break;

        case 2 :
            alert (`${escolhaPersonagem}, personagem que domina o poder da água`)
            break;

        case 3 :
            alert (`${escolhaPersonagem}, personagem que domina o poder do fogo`)
            break;

        default:
            alert("Escolha seu personagem:")
            break;
    }
