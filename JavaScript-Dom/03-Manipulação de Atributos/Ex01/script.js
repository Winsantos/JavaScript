const input = document.querySelector('[type="password"]')
const buttonType = document.getElementById('type')
const eyes = document.querySelector('#eyes')


buttonType.addEventListener('click', ()=>{
   let text = input.getAttribute('type')
    if(text == 'password'){
        input.setAttribute('type', 'text')
        eyes.src = 'img/eye.png'
    }else if(text == 'text'){
        input.setAttribute('type', 'password')
        eyes.src = 'img/hidden.png'
    }
})