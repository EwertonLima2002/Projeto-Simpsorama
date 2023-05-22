var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});



router.get("/buscar_maior_pontuacao/:idAquario", function (req, res) {
    medidaController.buscar_maior_pontuacao(req, res);
});


router.get("/procurar_favorito/:idAquario", function (req, res) {
    avisoController.procurar_favorito(req, res);
});

module.exports = router;