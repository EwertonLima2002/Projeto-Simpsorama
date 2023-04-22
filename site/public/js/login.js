
function validar_email(){
    var email = email_usuario.value
    var input = document.getElementById('email_usuario')
    var span = document.getElementById('span_erro_email')
    var btn = document.getElementById('btn')
    var texto = document.getElementById('sem_cadastro')

    if(email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 7 ){
        span.innerHTML = "Oops! Parece que seu email é inválido."
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        btn.style.marginTop = '10px'
        texto.style.display = "none"
       
    }
    else{
        span.innerHTML = ''
        input.style.marginTop = '15px'
        btn.style.marginTop = '20px'
        
    }
}
function validar_senha(){
    var senha = senha_usuario.value
    var input = document.getElementById('senha_usuario')
    var span = document.getElementById('span_erro_senha')
    var btn = document.getElementById('btn')
    var texto = document.getElementById('sem_cadastro')

    if(senha.length<8){
        span.innerHTML = 'Oops! Parece que sua senha é muito curta.'
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        input.style.marginTop = '15px'
        btn.style.display = 'block'
        btn.style.marginTop = '2px'
        texto.style.display = "none"
    }
    else{
        span.innerHTML = ''
        input.style.marginTop = '15px'
        btn.style.display = 'block'
      
        
    }
}