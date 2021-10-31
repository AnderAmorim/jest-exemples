const Carregador = (output) => {
  console.log("Carregador " + output);
  const enviaEnergia = () => {
    return output;
  };
  const infoOutPutCarregador = () => `Esse carregador carrega a ${output}V`;
  return {
    enviaEnergia,
    infoOutPutCarregador,
  };
};
module.exports = Carregador;
