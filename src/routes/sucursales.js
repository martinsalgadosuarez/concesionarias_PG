let express = require('express');
let router = express.Router();
let controller = require('../controllers/sucursalesController')

/* GET - Muestra datos de la sucursal elegida */
router.get('/:id', controller.sucursal)



module.exports = router;