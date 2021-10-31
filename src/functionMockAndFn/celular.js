const Carregador = require("./carregador");
const carregador = Carregador(5);
const Celular = () => {
  const carregar = () => {
    return carregador.enviaEnergia();
  };
  const infos = () => {
    // return carregador.infoOutPutCarregador();
  };
  return {
    carregar,
    infos,
  };
};

module.exports = Celular;
