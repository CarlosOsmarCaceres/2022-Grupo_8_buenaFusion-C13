const express = require("express");/* aca requiero exprees */
const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const usuarioController = require("../controllers/userController")
const uploadFile = require('../middlewares/uploadAvatar');


/* GET - Renderiza vista login */
router.get("/", usuarioController.logeo) 
/* GET - Renderiza vista registro */
router.get("/registro", usuarioController.registro) 
/* POST - Crea un nuevo registro */
router.post("/registro", uploadFile.single("avatar") ,usuarioController.procesoRegistro) /* ("avatar") el nombre avatar viene de la caja examinar imagenes */ 

module.exports= router;