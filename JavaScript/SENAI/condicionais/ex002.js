let sabor = prompt(`
    Cardapio de sucos 
L - Laranja
M -Morango
A - Acerola
U - Uva
        De acordo com a letra, escolha o sabor
    `)
    if (sabor == 'l' || sabor == 'L'){
            alert("Você pode escolher o suco de Laranja, rico em vitamina C")
        } else if (sabor == 'm' || sabor == 'M'){
            alert("Você pode escolher o suco de Morango, rico em vitamina A")
        } else if (sabor == 'a' || sabor == 'A'){
            alert("Você pode escolher o suco de Acerola, rico em vitamina C")
        } else if (sabor == 'u' || sabor == 'U'){
            alert("Você pode escolher o suco de Uva, rico em vitamina E")
        } else {
            alert ("Opção indisponivel. Escolha um dos sabores disponiveis")
        }
