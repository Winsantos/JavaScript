/* function manipulaTitulo(){
    const id = document.getElementById('titulo')
    id.innerText = "Nick"
}
 */

function manipulaTitulo(){
    let texto1 = 'titulo principal'
    let texto2 = 'Nick'
    const id = document.getElementById('titulo')
        if (id.innerText == texto1){
            id.innerText = texto2
        }else{
            id.innerText = texto1
        }
}
function passarMouse (){
    const id = document.getElementById('titulo')
    id.style.cursor = 'pointer'
    id.style.backgroundColor = '#33333350'
    // Manipulação do css com a propriedade style
}
function tirarMouse(){
    const id = document.getElementById('titulo')
    id.style.backgroundColor = '#fff'
}
