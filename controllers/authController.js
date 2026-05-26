exports.loginPage = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {

    const { email, senha } = req.body;

    if (email === 'admin@email.com' && senha === '123') {

        req.session.user = {
            email
        };

        return res.redirect('/');
    }

    res.send('Login inválido');
};

exports.logout = (req, res) => {

    req.session.destroy(() => {
        res.redirect('/login');
    });

};