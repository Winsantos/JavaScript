const input = document.getElementById('dados')
const btnSalvar = document.getElementById('salvar')
const btnMostrar = document.getElementById('mostrar')
const btnRemover = document.getElementById('remover')
const btnLimpar = document.getElementById('limpar')
const olConteudo = document.getElementById('conteudo')

let nomes = []

btnSalvar.addEventListener('click', ()=>{
// Lendo o que estava salvo anteriormente
    const dadosSalvos = localStorage.getItem('nomes')

// Verificar se já existe alguma dados salvo 
    if(dadosSalvos){
        nomes = JSON.parse(dadosSalvos)
    }
    nomes.push(input.value)
    localStorage.setItem('nomes', JSON.stringify(nomes))
    input.value = ''
})

btnMostrar.addEventListener('click', ()=>{
    const dadosExibir = localStorage.getItem('nomes')
    const dadosConvertidos = JSON.parse(dadosExibir)

    olConteudo.innerHTML = ''

    dadosConvertidos.forEach(itemDados => { // exibir cada elemento
        const li = document.createElement('li')
        li.innerText = itemDados
        olConteudo.appendChild(li)
    });
})

btnRemover.addEventListener('click', ()=>{
    localStorage.removeItem('nomes')
    alert('Itens removido')
})

btnLimpar.addEventListener('click', ()=>{
    localStorage.clear()
    alert('Lista limpa')
})