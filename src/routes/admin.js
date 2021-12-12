let express = require('express');
let router = express.Router();
let { 
    index, 
    agregarSucursal, 
    sucursales, 
    crearSucursal,
    editarSucursal,
    actualizarSucursal, 
    eliminarSucursal } = require('../controllers/adminController')

/* Get - /index */
router.get('/', index)
/* get - /sucursales - listar sucursales */
router.get('/sucursales', sucursales)
/* get - /agregarSucursal - formulario de carga */

router.get('/agregarSucursal', agregarSucursal)
/* post - /agregarSucursal - recibir los datos y guardarlos en la BD */
router.post('/agregarSucursal', crearSucursal)

/* get - Muestra el form de edicion */
router.get('/editarSucursal/:id', editarSucursal)
/* put - recibe los datos del form de edicion */
router.put('/editarSucursal/:id', actualizarSucursal)

/* delete - borra una sucursal que coincida con el id de la ruta parametrizada */
router.delete('/eliminarSucursal/:id', eliminarSucursal)

module.exports = router;