const Login = require("../src/mockAndSpyOn/login");

// jest.mock(
//   "../src/mockAndSpyOn/validPassword",
//   () =>
//     class MockLogin {
//       validarSenha = jest.fn();
//     }
// );
const ERROR_PARAMS = "Informe os parametros";
const ERROR_PASS = "Senha inválida";
let credentialsMockValid = [];
let credentialsMockInvalid = [];
let credentialsMockInvalidPass = [];

let login;
beforeAll((done) => {
  credentialsMockValid = {
    email: "andersonamorim@gmail.com",
    senha: "$2b$10$/Kxje/Ag7Y4G/VjsE1qyFe4fGJC4GWRXuiiCPxiKAsqCb0hJN3tNm",
  };
  credentialsMockInvalid = {
    email: undefined,
    senha: "$2b$10$/Kxje/Ag7Y4G/VjsE1qyFe4fGJC4GWRXuiiCPxiKAsqCb0hJN3tNm",
  };
  credentialsMockInvalidPass = {
    email: "andersonamorim@gmail.com",
    senha: "$2",
  };
  login = new Login();
  done();
});

describe("test mock and spy", () => {
  it("test success case", () => {
    pass = jest.spyOn(login.validationService, "validarSenha");
    pass.mockImplementation(() => true);
    const response = login.logar(credentialsMockValid);
    expect(response).toEqual("Logado!");
  });
  it("error test if params not parse", () => {
    pass = jest.spyOn(login.validationService, "validarSenha");
    pass.mockImplementation(() => true);
    const response = login.logar(credentialsMockInvalid);
    expect(response).toEqual(ERROR_PARAMS);
  });
  it("error test if params not parse", () => {
    const response = login.logar(credentialsMockInvalidPass);
    expect(response).toEqual(ERROR_PASS);
  });
});
