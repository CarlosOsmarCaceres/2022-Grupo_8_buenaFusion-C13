const express = require("express");/* aca requiero exprees */
 const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const productoController = require("../controllers/productController") /* aca estamos en routes, quiero entrar en controllers */


router.get("/detalle/:id", productoController.detalle) 
router.get("/carrito", productoController.carrito) 
router.get("/", productoController.todosLosProductos)



 module.exports= router;