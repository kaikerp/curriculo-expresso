const express = require('express');
const router = express.Router();
const ContatoController = require('../controllers/contato-controller');

router.get('/contato', (req, res, next) => {
    const contatoData = ContatoController.getData();
    res.render('contato', contatoData);
});

module.exports = router;