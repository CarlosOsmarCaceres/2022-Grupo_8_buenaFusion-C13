const fs = require ('fs');
const path= require('path');

module.exports = {
    getProduct: JSON.parse(fs.readFileSync(path.join(__dirname, "/productjson.json"),"utf-8")),
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, "/usuarios.json"),"utf-8")),
    escribirJson: (data)=> {fs.writeFileSync(path.join(__dirname,"/productjson.json"),JSON.stringify(data))}
}