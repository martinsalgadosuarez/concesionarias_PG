const { getSucursales, getAutos, writeJson } = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        res.render("admin/adminIndex")
    },
    sucursales: (req, res) => {
        res.render('admin/adminSucursales', {
            sucursales: getSucursales,
            autos: function (idSucursal){
                return getAutos.filter(auto => {
                    return auto.sucursal === idSucursal
                })
            }
        })
    },
    agregarSucursal: (req, res) => {
        res.render('admin/agregarSucursal')
    },
    crearSucursal: (req, res) => {
        let lastId = 1;

        getSucursales.forEach(sucursal => {
            if(sucursal.id > lastId){
                lastId = sucursal.id
            }
        });

        let nuevaSucursal = {
            id: lastId + 1,
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            imagen: "sucursal.jpg" 
        }

        getSucursales.push(nuevaSucursal);

        writeJson(getSucursales)

        res.redirect('/admin/sucursales')
    },
    editarSucursal: (req, res) => {
        let sucursal = getSucursales.find(sucursal => {
            return sucursal.id === +req.params.id
        })

        res.render('admin/editarSucursal', {
            sucursal
        })
    },
    actualizarSucursal: (req, res) => {
        getSucursales.forEach(sucursal => {
            if(sucursal.id === +req.params.id){
                sucursal.id = sucursal.id,
                sucursal.nombre = req.body.nombre ? req.body.nombre : sucursal.nombre,
                sucursal.direccion = req.body.direccion ? req.body.direccion : sucursal.direccion, 
                sucursal.telefono = req.body.telefono ? req.body.telefono : sucursal.telefono, 
                sucursal.image = sucursal.image           
            }
        })

        writeJson(getSucursales)

        res.redirect('/admin/sucursales')
    },
    eliminarSucursal: (req, res) => {
        getSucursales.forEach(sucursal => {
            if(sucursal.id === +req.params.id){
                let sucursalAEliminar = getSucursales.indexOf(sucursal)
                getSucursales.splice(sucursalAEliminar, 1)
            }
        })

        writeJson(getSucursales)

        res.redirect('/admin/sucursales')
    },
}