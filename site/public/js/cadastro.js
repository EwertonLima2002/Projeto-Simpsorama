
function validar_nome() {
    var nome = input_nome.value
    var input = document.getElementById('input_nome')
    var span_erro = document.getElementById('div_erro_nome')
    var btn = document.getElementById('btn')

    if (nome == "") {
        span_erro.style.color = 'red'
        input.style.borderColor = 'red'
        div_erro_nome.innerHTML = "Campo vazio"
        span_erro.style.color = 'red'
        btn.style.backgroundColor = 'red'
        btn.style.border = 'red'
        input.classList.add("shake");
        
    }
    else if (nome.length < 3) {
        div_erro_nome.innerHTML = "Insira um nome de pelo menos 3 caracteres"
        input.style.borderColor = 'red'
        div_erro_nome.innerHTML = "Insira um nome de pelo menos 3 caracteres"
        span_erro.style.color = 'red'
        btn.style.backgroundColor = 'red'
        btn.style.border = 'red'
        input.classList.add("shake");

    }
    else {
        span_erro.innerHTML = ''
        btn.style.backgroundColor = '#00d2f7'
        btn.style.border = '#00d2f7'
        input.style.borderColor = 'green'
        input.classList.remove("shake");
    }
}
function validar_email() {
    var email = email_usuario.value
    var input = document.getElementById('email_usuario')
    var span = document.getElementById('campo_email')
    var span_email = document.getElementById('span_erro_email')
    var btn = document.getElementById('btn')

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 7) {
    input.style.borderColor = 'red'
    span.innerHTML = 'Ops verifique o email e tente novamente'
    span.style.color = 'red'
    btn.style.backgroundColor = 'red'
        btn.style.border = 'red'
        input.classList.add("shake");
    }
    else {
        span.innerHTML = ''
    input.style.borderColor = 'green'
    btn.style.backgroundColor = '#00d2f7'
    btn.style.border = '#00d2f7'
    input.classList.remove("shake");
      
    }
}
function validar_senha() {
    var senha = senha_usuario.value
    var span = document.getElementById('span_senha')
    var input = document.getElementById('senha_usuario')
    var btn = document.getElementById('btn')
  


    if (senha.length < 8) {
        input.style.borderColor = 'red'
    span.innerHTML = 'Ops insira um senha de pelo menos 8 dígitos'
    span.style.color = 'red'
    btn.style.backgroundColor = 'red'
    btn.style.border = 'red'
    input.classList.add("shake");


    }
    else {
        input.style.borderColor = 'green'
    span.innerHTML = ''
    btn.style.backgroundColor = '#00d2f7'
    btn.style.border = '#00d2f7'
    span.style.color = 'red'
    input.classList.remove("shake");
    }
}

function confirmar_senha(){
    var confirmar_senha = input_confimar_senha.value
    var input = document.getElementById('input_confimar_senha')
    var senha = senha_usuario.value
    var span = document.getElementById('span_confirma_senha')
    var btn = document.getElementById('btn')

    if(confirmar_senha != senha){
        input.style.borderColor = 'red'
        span.innerHTML = 'Ops senhas diferentes'
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
function cadastrar() {
    //aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = email_usuario.value;
    var senhaVar = senha_usuario.value;
    var confirmar_senha = input_confimar_senha.value
    var personagemVar = select_personagem.value

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || personagemVar <= 0 || confirmar_senha == "") {
        //cardErro.style.display = "block"
        swal("Ops", "Preencha todos os campos", "error")
        musica.play()

        finalizarAguardar();
        return false;
    }
    else if (nomeVar.length < 3) {
        swal("Ops", "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 3 caracteres", "warning")
        musica.play()
    }
    else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.length < 7) {
        swal("Ops", "O e-mail cadastrado é inválido. Por favor, insira um e-mail válido.", "warning")
        musica.play()
    }
    else if (senhaVar.length < 8) {
        swal("Ops", "A senha inserida é muito curta. Por favor,insira uma senha com pelo menos 8 caracteres.", "warning")
        musica.play()
    }
    else if(confirmar_senha != senhaVar){
        swal("Ops", "A senha inserida é diferente da cadastrada", "warning")
        musica.play()
    }
    else {
        setInterval('oi', 5000)


        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                personagemServer: personagemVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                //cardErro.style.display = "block";

                swal("Bom trabalho!", "Cadastro realizado com sucesso redirecionando a tela de login...!", "success");

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000")

                limparFormulario();
                finalizarAguardar();
            } else {
                swal("Ops", "Mais de um usuário com o mesmo login e senha!", "error")
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

        return false;
    }
}

//function sumirMensagem() {
    //cardErro.style.display = "none"
//}
