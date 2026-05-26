const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');

router.get('/', controller.listar);
router.get('/novo', controller.novo);
router.post('/novo', controller.criar);
// recebe os dados do formulario pra criar um novo produto
router.get('/editar/:id', controller.editar);
router.post('/editar/:id', controller.atualizar);
// tualiza a lista de produtos

router.get('/deletar/:id', controller.deletar);

module.exports = router;