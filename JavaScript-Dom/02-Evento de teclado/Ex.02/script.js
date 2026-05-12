const input = document.getElementById('texto')
const divConteudo = document.getElementById('conteudo')

input.addEventListener('keydown', (event)=>{
    let tecla = event.key
    let texto = input.value
    if(tecla == 'Enter'){
        divConteudo.innerHTML = texto
        input.value = ''
        // ou input.value = null
        
    }
   // divConteudo.innerHTML = `A tecla apertada foi: ${tecla}`
})