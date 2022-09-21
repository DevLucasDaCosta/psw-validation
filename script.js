let pwd = document.getElementById('pwd')
let toggleBtn = document.getElementById('toggleBtn')

// Mostar e esconder a senha
toggleBtn.onclick = function(){
    if(pwd.type === 'password'){
        pwd.setAttribute('type', 'text')
        toggleBtn.classList.add('hide')
        pwd.focus()
    }
    else {
        pwd.setAttribute('type', 'password')
        toggleBtn.classList.remove('hide')
        pwd.focus()
    }
}

// Validações
let lowerCase = document.getElementById('lower')
let upperCase = document.getElementById('upper')
let numero = document.getElementById('numero')
let especial = document.getElementById('especial')
let mincar = document.getElementById('mincar')

function valSenha (senha) {
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const num = new RegExp('(?=.*[0-9])')
    const esp = new RegExp('(?=.*[!@#\$%\^&\*])')
    const length = new RegExp('(?=.{8,})')

    // testar minúsculas
    if (lower.test(senha)) {
        lowerCase.classList.add('ok')
    }
    else {
        lowerCase.classList.remove('ok')
    }

    // testar maiúsculas
    if (upper.test(senha)) {
        upperCase.classList.add('ok')
    }
    else {
        upperCase.classList.remove('ok')
    }
    
    // testar numeros
    if (num.test(senha)) {
        numero.classList.add('ok')
    }
    else {
        numero.classList.remove('ok')
    }

    // testar especiais
    if (esp.test(senha)) {
        especial.classList.add('ok')
    }
    else {
        especial.classList.remove('ok')
    }
    
    // testar tamanho
    if (length.test(senha)) {
        mincar.classList.add('ok')
    }
    else {
        mincar.classList.remove('ok')
    }
}
