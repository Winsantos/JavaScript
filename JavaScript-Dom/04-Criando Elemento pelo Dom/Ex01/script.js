const body = document.querySelector('body')

// Criando elementos com o método createElement('elemento')
const h1 = document.createElement('h1')

h1.innerHTML = 'Criando elementos através do DOM'
const button = document.createElement('button')
// Logo abaixo, editando e manipulando o elemento
button.innerText = 'Clique aqui'
button.classList.add('botao')
button.style.cursor = 'pointer'
button.addEventListener('click', ()=>{
    body.removeChild(h1)// Remover um elemento 
    // body.remove(elemento1, elemento2) => remove varios elementos
})

// 2° Apontar qual o local de existencia do elemento
//body.appendChild(h1) // Quando você quer passar apenas um elemento
body.append(h1, button)// Quando você quer passar mais de umm elemento
