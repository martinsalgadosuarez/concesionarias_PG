let express = require('express');
let router = express.Router();
let controller = require('../controllers/autosController')

/* GET - Lista todos los autos */
router.get('/', controller.index)
/* GET - Detalle del auto elegido */
router.get('/detalle/:id', controller.detail)

module.exports = router;