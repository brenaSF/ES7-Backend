const fs = require('node:fs').promises;
const path = require('node:path');


class Usuarios {

    // Construtor da classe Usuarios
    constructor(filePath) {
        this.filePath = filePath;
        this.usuarios = [];
    }

    // Método para carregar os usuários do arquivo
    async carregarUsuarios() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            this.usuarios = data.trim().split('\n').sort();
        } catch (err) {
            console.error('Erro ao ler o arquivo de usuários:', err);
            this.usuarios = [];
        }
    }

    // Método para adicionar um usuário
    getPrimeirosCinco() {
        return this.usuarios.slice(0, 5);
    }
}

module.exports = Usuarios;