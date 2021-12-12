const { getAutos, getSucursales } = require('../data/dataBase')

module.exports = {
    sucursal: (req, res) => {
       let id_sucursal = +req.params.id;

       let sucursal = getSucursales.find(sucursal => {
           return sucursal.id === id_sucursal
       })

       if(sucursal !== undefined) {
            let autos = getAutos.filter(auto => {
                return auto.sucursal === id_sucursal
            })

            res.render('sucursal', {
                sucursal,
                autos
            })
       }else {
           console.log("sucursal no existe")
       }

    }

}