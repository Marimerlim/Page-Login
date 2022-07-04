

const [texto, senha] = document.querySelectorAll('input')
const botao = document.querySelector('.botao')

function login(){
    if(texto.value && senha.value.length >= 8){
        botao.removeAttribute('disabled')
    }else{
        botao.setAttribute('disabled', 'disabled')
    }
}
senha.addEventListener("input", login)


