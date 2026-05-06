const banner = document.querySelector('.app__image')
const titulos = document.querySelector('.app__title')
const html = document.documentElement /* Trazendo elemento html fora do body*/ 
const botoes = document.querySelectorAll('.app__card-button[data-contexto]')

botoes.forEach(itemBotoes => {
    itemBotoes.addEventListener('click', ()=>{
        let contexto = itemBotoes.dataset.contexto
        // Outra propriedade
        alterarConteudos(contexto, itemBotoes) // Chama a funcão das ações
    })
})

// Função que vai executar as ações do evento de click nos botões
    function alterarConteudos(contexto, botaoClicado){

// Removendo classe ativa dos elementos 
    botoes.forEach(itemBotoes => itemBotoes.classList.remove('active'))

// Adicionando a classe ativa nos elementos
    botaoClicado.classList.add('active')

// Atualizando o data-contexto
    html.dataset.contexto = contexto
    
// Atualizando as imagens
    banner.src = `/04/img/${contexto}.png`

    switch(contexto){
        case 'foco':
            titulos.innerHTML = 
            'Otimize sua produtividade, <br> <strong class="app__title-strong">mergulhe no que importa.</strong>'
            break;
        case 'descanso-curto' :
            titulos.innerHTML = 'Simplifique o caminho, <br> <strong class="app__title-strong">avance com eficiência.</strong>'
            break;
        case 'descanso-longo' :
            titulos.innerHTML = 'Otimize sua produtividade, <br> <strong class="app__title-strong">Faça uma pausa longa!</strong>'
            break;

        default:
            titulos.innerHTML = 'Contexto não encontrado'
    }

}