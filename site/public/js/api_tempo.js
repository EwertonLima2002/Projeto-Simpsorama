const chave_api = "ba605efc18f1572f61892fe426f18a1a";

const input_cidade = document.querySelector("#input_cidade");
const pesquisar = document.querySelector("#search");
const nome_cidade = document.querySelector("#cidade");
const elemento_temperatura = document.querySelector("#temperature span");
const descricao_temperatura = document.querySelector("#description");
const icone_tempo = document.querySelector("#img_temperatura");
const elemento_umidade = document.querySelector("#umidity span");
const velocidade_do_veto = document.querySelector("#wind span");
const temperatura_fahehaint = document.getElementById('fahenhatint')

const informacao_temperatura = document.querySelector("#weather-data");
const mensagem_de_erro_api = document.querySelector("#error-message");
const carregar = document.querySelector("#loader");

const funcao_carregamento = () => {
  carregar.classList.toggle("hide");
};

const obterdadosclima = (cidade) => {
  funcao_carregamento();


  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chave_api}&lang=pt_br`)
    .then(response => response.json())
    .finally(funcao_carregamento);
};

const mensagem_de_erro = () => {
  mensagem_de_erro_api.classList.remove("hide");
};

const informacoes_temperatura = () => {
  mensagem_de_erro_api.classList.add("hide");
  informacao_temperatura.classList.add("hide");
};

const showWeatherData = () => {
  const cidade = input_cidade.value;

  informacoes_temperatura();

  obterdadosclima(cidade)
    .then(data => {
      if (data.cod === "404") {
        mensagem_de_erro();
        return;
      }

      div_cidade.innerHTML = data.name;
      elemento_temperatura.innerHTML = parseInt(data.main.temp);
      descricao_temperatura.innerHTML = data.weather[0].description;
      var farehaint = parseInt(data.main.temp * 1.8) + 32;
      farehaint = farehaint.toFixed(1);
      temperatura_fahehaint.innerHTML = `${farehaint}°F`;

      imagem.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`
      elemento_umidade.innerHTML = `${data.main.humidity}%`;
      velocidade_do_veto.innerHTML = `${data.wind.speed}km/h`;

      informacao_temperatura.classList.remove("hide");
    })
    .catch(error => {
      console.error("Amigo deu erro aqui :", error);
    });
};

pesquisar.addEventListener("click", () => {
  showWeatherData();
});
