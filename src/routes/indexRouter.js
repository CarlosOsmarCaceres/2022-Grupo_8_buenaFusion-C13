const express = require("express");/* aca requiero exprees */
 const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const iControllers = require("../controllers/indexControllers") /* aca estamos en routes, quiero entrar en controllers */


router.get("/", iControllers.index) 




 module.exports= router; /*  aca exportamos la variable que tiene el metodo  */

