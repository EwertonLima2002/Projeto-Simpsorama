const chave_api = "ba605efc18f1572f61892fe426f18a1a";


// carregamento
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const dados_temperatura = async (cidade) => {
  toggleLoader();

  const url_acesso_api = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chave_api}&lang=pt_br`;

  const res = await fetch(url_acesso_api);
  const data = await res.json();

  toggleLoader();

  return data;
};

