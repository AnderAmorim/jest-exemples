const Celular = require("../src/functionMockAndFn/celular");

jest.mock("../src/functionMockAndFn/carregador", () => {
  return jest.fn().mockImplementation(() => {
    return {
      enviaEnergia: jest.fn().mockReturnValue(5),
    };
  });
});

describe("Mock and fn function", () => {
  it("should charge", () => {
    const celular = Celular();
    expect(celular.carregar()).toBe(5);
  });
  // it("Infos testing", () => {
  //   const celular = Celular();
  //   expect(celular.infos()).toEqual(`Esse carregador carrega a 5V`);
  // });
});
