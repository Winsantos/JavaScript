let opcoes

//só funciona se eu inicializar a variável
while(opcoes !=5 ){
    opcoes = +prompt(`
         Menu de Produtos
    1 - Cadastrar novp produto
    2 - Listar Produtos
    3 - Alterar produto 
    4 - Excluir produto
    5 - Sair
    `)
      if(opcoes == 1){
        alert('Cadastrar novo produto!')
    } else if ('opcoes == 2'){
        alert('Lista de Produtos')
    } else if ('opcaoes == 3'){
        alert('Alterar produto')
    } else if ('opcoes == 4'){
        alert ('Excluir produto')
    } else if ('opcoes == 5'){
        alert ('Programa encerrado!')
    }else {
        alert('opção inválida')
    }
}


