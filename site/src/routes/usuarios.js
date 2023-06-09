var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrar_pontos_loteria", function (req, res) {
    usuarioController.cadastrar_pontos_loteria(req, res);
});

router.post("/cadastrar_acertos", function (req, res) {
    usuarioController.cadastrar_acertos(req, res);
});


module.exports = router;