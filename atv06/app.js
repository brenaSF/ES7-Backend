const Usuario = require("./controllers/usuario");
const user = new Usuario("Heitor", "Heitor@gmail.com")

excluirUsuario(user);

async function inserirUsuario(user) {
    await user.inserir();
}

async function excluirUsuario(user) {
    await user.excluir();
}

