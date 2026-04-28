const buttonContent = document.querySelector('.content')
const buttonInner = document.querySelector('.inner')
const divText = document.getElementById('exemplo')

buttonContent.addEventListener('click', mostrarTexto1)
function mostrarTexto1(){
    let paragrafo1 = document.querySelector('.result-text-contet')
    paragrafo1.textContent = divText.textContent
}
buttonInner.addEventListener('click', mostrarTexto2)
function mostrarTexto2(){
    let paragrafo = document.querySelector('.result-inner-content')
    paragrafo.innerText = divText.innerText
}