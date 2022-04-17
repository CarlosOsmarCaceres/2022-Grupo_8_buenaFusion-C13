const express = require("express");/* aca requiero exprees */
 const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const aControllers = require("../controllers/adminControllers") /* aca estamos en routes, quiero entrar en controllers */
const adminProductControllers = require("../controllers/adminProductControllers")

router.get("/", aControllers.index) 
router.get("/productos/agregar", adminProductControllers.productAdd)
router.get("/productos/editar", adminProductControllers.productEdit)
router.get("/productos", adminProductControllers.productList)



 module.exports= router