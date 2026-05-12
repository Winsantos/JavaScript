const input = document.getElementById('texto')
const divConteudo = document.getElementById('conteudo')

// Evento apertou a tecla
input.addEventListener('keydown', ()=>{ // apertar a tecla
    divConteudo.innerText = 'Apertou a tecla'
})

// Evento soltou a tecla
input.addEventListener('keyup', ()=>{
    divConteudo.innerText = 'Soltou a tecla'
})

// Evento segurou a tecla
input.addEventListener('keypress', ()=>{
    divConteudo.innerText = 'Segurou a tecla'
})