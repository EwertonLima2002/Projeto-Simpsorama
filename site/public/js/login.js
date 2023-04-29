
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
function login() {
    //aguardar();

    var emailVar = email_usuario.value;
    var senhaVar = senha_usuario.value;

    if (emailVar == "" || senhaVar == "") {
        // cardErro.style.display = "block"
        swal ( "Ops" ,  "Preencha os campos para logar!" ,  "error" )
        finalizarAguardar();
        return false;
    }
    else {
        setInterval('...', 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "./dashboard/dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            swal ( "Ops" ,  "Email e/ou senha inválido(s)" ,  "error" )

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

//function sumirMensagem() {
  //  cardErro.style.display = "none"
// }