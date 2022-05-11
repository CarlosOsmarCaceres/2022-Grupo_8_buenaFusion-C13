const multer = require('multer');//requerimos MULTER
const path = require('path');// llamamos a path para pasar la direccion con path.join(__direname,"   ")

const storage = multer.diskStorage({ // disksotrage recibe como objeto un parametro con dos propiedades
    //destino
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`) // Pone date.now y extension al final de la imagen guradada
    }
})
  
const upload = multer({ storage: storage });

module.exports = upload;