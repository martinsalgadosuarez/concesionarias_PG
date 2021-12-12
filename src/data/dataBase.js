let fs = require('fs');

module.exports = {
    getSucursales : JSON.parse(fs.readFileSync('./src/data/concesionarias.json', "utf-8")),
    getAutos : JSON.parse(fs.readFileSync('./src/data/autos.json', "utf-8")),
    writeJson : (dataBase) => {
        fs.writeFileSync(`./src/data/concesionarias.json`, JSON.stringify(dataBase), "utf-8")
    }
}