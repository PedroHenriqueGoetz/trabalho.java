const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Sessão
app.use(session({
    secret: 'segredo123',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000
    }
}));

// Middleware de autenticação
const auth = require('./middlewares/auth');

// Rotas de autenticação
const authRoutes = require('./routes/authRoutes');
app.use(authRoutes);

// Rotas de produtos
const produtoRoutes = require('./routes/produtoRoutes');
app.use('/produtos', auth, produtoRoutes);

// Rotas protegidas
app.get('/', auth, (req, res) => {
    res.render('home');
});

app.get('/sobre', auth, (req, res) => {
    res.render('sobre');
});

app.get('/contato', auth, (req, res) => {
    res.render('contato');
});

// Servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});