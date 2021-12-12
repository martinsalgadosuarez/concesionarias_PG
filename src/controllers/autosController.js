let { getAutos } =require('../data/dataBase')

module.exports = {
    index: (req, res) => {
      res.render('autos', {
          autos : getAutos
      })
    },
    detail: (req, res) => {
        let auto = getAutos.find(auto => { //Busco el auto que coincida con el id que viene por parámetro
            return auto.id === +req.params.id
        })
        res.render('autoDetail', {
            auto
        })
    }
   
}