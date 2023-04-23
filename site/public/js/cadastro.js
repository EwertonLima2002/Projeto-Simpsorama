function validar_nome(){
    var nome = input_nome.value
    var input = document.getElementById('input_nome')
    var span = document.getElementById('span_erro_nome')
    var btn = document.getElementById('btn')

    if(nome == ""){
        span.innerHTML = "Campo vazio"
        span.style.color = 'red'
        span.style.fontSize = '15px'
        btn.style.marginTop = '2px'
    }
    else if(nome.length <3){
        span.innerHTML = "Oops! Parece que seu texto é muito curto."
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        btn.style.marginTop = '2px'
    }
    else{
        span.innerHTML = ""
    }
}
function validar_email(){
    var email = email_usuario.value
    var input = document.getElementById('email_usuario')
    var span = document.getElementById('span_erro_email')

    if(email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 7 ){
        span.innerHTML = "Oops! Parece que seu email é inválido."
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
       
    }
    else{
        span.innerHTML = ''
    }
}
function validar_senha(){
    var senha = senha_usuario.value
    var input = document.getElementById('senha_usuario')
    var span = document.getElementById('span_erro_senha')
   

    if(senha.length<8){
        span.innerHTML = 'Oops! Parece que sua senha é muito curta.'
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
     
 
    }
    else{
        span.innerHTML = ''
        
    }
}