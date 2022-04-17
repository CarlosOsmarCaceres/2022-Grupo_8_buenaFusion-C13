const express = require("express");/* aca requiero exprees */
 const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const aControllers = require("../controllers/adminControllers") /* aca estamos en routes, quiero entrar en controllers */


router.get("/", aControllers.index) 




 module.exports= router