
function validar_email(){
    var email = email_usuario.value
    var input = document.getElementById('email_usuario')
    var span = document.getElementById('campo_email')
    var btn = document.getElementById('btn')
  

    if(email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 7 ){
        input.style.borderColor = 'red'
        span.innerHTML = 'Ops verifique o email e tente novamente'
        span.style.color = 'red'
      btn.style.backgroundColor = 'red'
        btn.style.border = 'red'
        input.classList.add("shake");
       
    }
    else{
        span.innerHTML = ''
        input.style.borderColor = 'green'
        btn.style.backgroundColor = '#00d2f7'
        btn.style.border = '#00d2f7'
        input.classList.remove("shake");
        
    }
}
function validar_senha(){
    var senha = senha_usuario.value
    var span = document.getElementById('campo_senha')
    var input = document.getElementById('senha_usuario')
    var btn = document.getElementById('btn')
  
  if(senha == ""){
    input.style.borderColor = 'red'
    span.innerHTML = `Campo vazio`
    span.style.color = 'red'
    btn.style.backgroundColor = 'red'
    btn.style.border = 'red'
    input.classList.add("shake");
  }
    else if(senha.length<8){
        input.style.borderColor = 'red'
        span.innerHTML = `Por favor, insira uma senha com pelo menos 8 caracteres.`
        span.style.color = 'red'
        btn.style.backgroundColor = 'red'
        btn.style.border = 'red'
        input.classList.add("shake");
    }
    else{
        input.style.borderColor = 'green'
        span.innerHTML = ''
        btn.style.backgroundColor = '#00d2f7'
        btn.style.border = '#00d2f7'
        span.style.color = 'red'
        input.classList.remove("shake");

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
}
//function sumirMensagem() {
  //  cardErro.style.display = "none"
// }


//function sumirMensagem() {
  //  cardErro.style.display = "none"
// }