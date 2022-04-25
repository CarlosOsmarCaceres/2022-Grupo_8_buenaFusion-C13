const express = require("express");/* aca requiero exprees */
 const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const aControllers = require("../controllers/adminControllers") /* aca estamos en routes, quiero entrar en controllers */
const adminProductControllers = require("../controllers/adminProductControllers")

router.get("/", aControllers.index) 
router.get("/productos/agregar", adminProductControllers.productAdd)
router.get("/productos/editar/:id", adminProductControllers.productEdit)
router.get("/productos", adminProductControllers.productList)
router.post("/productos", adminProductControllers.productCreate)
router.put("/productos/:id", adminProductControllers.productoEditar)
router.delete("/productos/:id", adminProductControllers.productDelete)



 module.exports= router