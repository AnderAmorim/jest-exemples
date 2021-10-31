class ValidationService {
  validarSenha(senha) {
    return senha.length > 5;
  }
}

module.exports = ValidationService;
