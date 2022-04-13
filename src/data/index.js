const fs = require ("fs");
const path= require('path');

module.exports = {
    getProduct: JSON.parse(fs.readFileSync(path.join(__dirname, "/productjson"),"utf-8"))
}