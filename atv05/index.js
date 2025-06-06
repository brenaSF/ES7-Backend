const http = require('node:http');
const fs = require('node:fs').promises;
const path = require('node:path');
const Usuarios = require('./modules/usuario');

// Configurações do servidor
const hostname = '127.0.0.1';
const port = 3005;
const publicDir = path.join(__dirname, 'public');
const usuariosFilePath = path.join(__dirname, 'nomes.txt');

async function handleRequest(req, res) {
    try {
        const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
        let pathname = parsedUrl.pathname;

        if (pathname === '/') {
            const acceptLanguage = req.headers['accept-language'];
            let lang = 'pt'; // Default language

            if (acceptLanguage && acceptLanguage.startsWith('en')) {
                lang = 'en';
            }
            pathname = `/html/${lang}/index.html`;
        }

        const fullPath = path.join(publicDir, pathname);

        try {
            const stats = await fs.stat(fullPath);
            if (stats.isFile()) {
                const fileExtension = path.extname(pathname).toLowerCase();
                let contentType = 'text/html';
                if (fileExtension === '.css') {
                    contentType = 'text/css';
                }

                const data = await fs.readFile(fullPath);
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
                return;
            }
        } catch (error) {
            // File not found, continue to handle other routes
        }

        if (pathname === '/usuarios') {
            const usuariosManager = new Usuarios(usuariosFilePath);
            await usuariosManager.carregarUsuarios();
            const primeirosUsuarios = usuariosManager.getPrimeirosCinco();

            let htmlUsuarios = `
                <!DOCTYPE html>
                <html lang="pt-BR">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Primeiros Usuários</title>
                    <link rel="stylesheet" href="/css/style.css">
                </head>
                <body>
                    <header>
                        <h1>Primeiros 5 Usuários</h1>
                    </header>
                    <main>
                        <ul>
            `;
            primeirosUsuarios.forEach(usuario => {
                htmlUsuarios += `<li>${usuario}</li>`;
            });
            htmlUsuarios += `
                        </ul>
                    </main>
                    <footer>
                        <p>&copy; Meu Servidor Web</p>
                    </footer>
                </body>
                </html>
            `;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(htmlUsuarios);
            return;
        }

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Arquivo não encontrado');

    } catch (err) {
        console.error('Erro ao processar a requisição:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro interno do servidor');
    }
}

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});