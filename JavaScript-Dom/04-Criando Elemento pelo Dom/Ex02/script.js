const body = document.querySelector('body')

const button = document.createElement('button')
button.innerText = 'Remover'
button.classList.add('botao')
button.style.cursor = 'pointer'
button.addEventListener('click', ()=>{
    body.removeChild(h1)
})