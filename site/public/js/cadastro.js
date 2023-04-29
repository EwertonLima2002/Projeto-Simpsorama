function validar_nome() {
    var nome = input_nome.value
    var input = document.getElementById('input_nome')
    var span = document.getElementById('span_erro_nome')
    var btn = document.getElementById('btn')

    if (nome == "") {
        span.innerHTML = "Campo vazio"
        span.style.color = 'red'
        span.style.fontSize = '15px'
        btn.style.marginTop = '2px'
    }
    else if (nome.length < 3) {
        span.innerHTML = "Oops! Parece que seu texto é muito curto."
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'
        btn.style.marginTop = '2px'
    }
    else {
        span.innerHTML = ""
    }
}
function validar_email() {
    var email = email_usuario.value
    var input = document.getElementById('email_usuario')
    var span = document.getElementById('span_erro_email')

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 7) {
        span.innerHTML = "Oops! Parece que seu email é inválido."
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'

    }
    else {
        span.innerHTML = ''
    }
}
function validar_senha() {
    var senha = senha_usuario.value
    var input = document.getElementById('senha_usuario')
    var span = document.getElementById('span_erro_senha')


    if (senha.length < 8) {
        span.innerHTML = 'Oops! Parece que sua senha é muito curta.'
        span.style.color = 'red'
        span.style.fontSize = '15px'
        span.style.marginTop = '12px'


    }
    else {
        span.innerHTML = ''

    }
}
function cadastrar() {
    //aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = email_usuario.value;
    var senhaVar = senha_usuario.value;
    var personagemVar = select_personagem.value

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || personagemVar <= 0) {
        //cardErro.style.display = "block"
        swal("Ops", "Preencha todos os campos", "error")

        finalizarAguardar();
        return false;
    }
    else if (nomeVar.length < 3) {
        swal("Ops", "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 3 caracteres", "warning")
    }
    else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.length < 7) {
        swal("Ops", "O e-mail cadastrado é inválido. Por favor, insira um e-mail válido.", "warning")
    }
    else if (senhaVar.length < 8) {
        swal("Ops", "A senha inserida é muito curta. Por favor,insira uma senha com pelo menos 8 caracteres.", "warning")
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
