const express = require("express");/* aca requiero exprees */
 const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const usuarioController = require("../controllers/userController")


router.get("/registro", usuarioController.registro) 
router.get("/", usuarioController.logeo) 

module.exports= router;