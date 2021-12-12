const { getSucursales } = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        res.render('home', {
            titulo: "Conocé nuestras sucursales",
            sucursales : getSucursales  
        })
    }
}