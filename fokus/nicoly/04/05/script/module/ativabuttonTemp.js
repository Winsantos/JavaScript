export default function initButtonTemp(){
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
            tempoDecorrido = 10
            mostrarTimer()
            titulos.innerHTML = 
            'Otimize sua produtividade, <br> <strong class="app__title-strong">mergulhe no que importa.</strong>'
            break;
        case 'descanso-curto' :
            tempoDecorrido = 5
            mostrarTimer()
            titulos.innerHTML = 'Simplifique o caminho, <br> <strong class="app__title-strong">avance com eficiência.</strong>'
            break;
        case 'descanso-longo' :
            tempoDecorrido = 20
            mostrarTimer()
            titulos.innerHTML = 'Otimize sua produtividade, <br> <strong class="app__title-strong">Faça uma pausa longa!</strong>'
            break;

        default:
            titulos.innerHTML = 'Contexto não encontrado'
    }

}

// Início codificação temporizador
const exibirTimerApp = document.getElementById('timer') // O 'getElementById' vai mostrar a informação
const btnStart = document.getElementById('start-pause')

// Variável de referencia para guardar do timer
let tempoDecorrido = 5// Millisegundos

function mostrarTimer (){
    // Instanciando objeto Date para manipular o temporizador
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    exibirTimerApp.innerHTML = `${tempoFormatado}`
}
mostrarTimer()

btnStart.addEventListener('click', iniciarTimer)

function decrementarTimer(){
    const som = new Audio('../sons/beep.mp3')
    
    if(tempoDecorrido <= 0){
        som.play()

        setTimeout(()=>alert('Tempo finalizado!'), 100)

        pararTimer()
        return

    }
    tempoDecorrido -= 1
    mostrarTimer()
}


let idTimer
let rodando = false
function iniciarTimer(){
    const imageBotao = document.querySelector('.app__card-primary-butto-icon')
    const btnInicioPause = document.querySelector('.app__card-primary-button span')
    const audioIniciar = new Audio ('../sons/play.wav')
    const audioPausar = new Audio ('../sons/pause.mp3')


    if(rodando){
        imageBotao.src = '../img/play_arrow.png'
        btnInicioPause.innerHTML = 'Iniciar'
        audioPausar.play()
        pararTimer()
        return
    }
    imageBotao.src = '../img/pause.png'
    btnInicioPause.innerHTML = 'Pausar'
    audioIniciar.play()
    idTimer = setInterval(decrementarTimer, 1000)
    rodando = true
}

function pararTimer(){
    clearInterval(idTimer)
    rodando = false
}

}