const ValidationService = require("./validPassword");

const ERROR_PARAMS = "Informe os parametros";
const ERROR_PASS = "Senha inválida";
class Login {
  constructor() {
    this.validationService = new ValidationService();
  }
  logar({ email, senha }) {
    if (!email || !senha) return ERROR_PARAMS;
    const pass = this.validationService.validarSenha(senha);
    console.log("senha pai", senha.length > 5, senha.length);
    if (this.validationService.validarSenha(senha) === false) return ERROR_PASS;
    return "Logado!";
  }
}

module.exports = Login;
