const obterDiaDaSemana = (dia) => {
  switch (dia) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
  }
};

const obterMes = (mes) => {
  switch (mes) {
    case 0:
      return "Janeiro";
    case 1:
      return "Fevereiro";
    case 2:
      return "Março";
    case 3:
      return "Abril";
    case 4:
      return "Maio";
    case 5:
      return "Junho";
    case 6:
      return "Julho";
    case 7:
      return "Agosto";
    case 8:
      return "Setembro";
    case 9:
      return "Outubro";
    case 10:
      return "Novembro";
    case 11:
      return "Dezembro";
  }
};

const obterHora = () => {
  const dataAtual = new Date(Date.now());
  return `${dataAtual.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};

const obterDataFormatada = () => {
  const dataAtual = new Date(Date.now());

  return `${obterDiaDaSemana(
    dataAtual.getDay()
  )}, ${dataAtual.getDate()} de ${obterMes(
    dataAtual.getMonth()
  ).toLowerCase()}`;
};
