let http = require('http'),
    express = require('express'),
    path = require('path'),
    app = express();
const produtos = require('./produtos');
const usuarios = require('./usuarios');
hbs = require('hbs');

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'style')));

app.use(express.urlencoded({ extended: false }));

app.get('/pato', (req, res) => {
    res.render('./aula/pato', { title: 'Página de Pato' })
});

app.get('/loja', (req, res) => {

    res.render('loja', { title: 'Minha loja', produtos })
});


app.get('/itens', (req, res) => {

    res.render('itens')
});

app.get('/index', (req, res) => {

    res.render('./atividade/index', { usuarios })
});
app.get('/login', (req, res) => {

    res.render('./atividade/login')
});
app.get('/cadastro', (req, res) => {

    res.render('./atividade/cadastro')
});

app.listen(3001)