const fs = require ('fs');
const path= require('path');

module.exports = {
    getProduct: JSON.parse(fs.readFileSync(path.join(__dirname, "/productjson.json"),"utf-8")),
    escribirJson: (data)=> {fs.writeFileSync(path.join(__dirname,"/productjson.json"),JSON.stringify(data))},
    
    //obtiene la base de datos de productos / usuarios del json, lo lee, lo parsea y lo deja a disposisicion para utilizar en el controlador
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, "/usuarios.json"),"utf-8")),
    escribirUser: (data)=> {fs.writeFileSync(path.join(__dirname,"/usuarios.json"),JSON.stringify(data))}
}