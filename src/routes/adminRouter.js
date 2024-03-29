const express = require("express");/* aca requiero exprees */
const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const aControllers = require("../controllers/adminControllers") /* aca estamos en routes, quiero entrar en controllers */
const adminProductControllers = require("../controllers/adminProductControllers")
const uploadFile = require('../middlewares/uploadProduct');
const userSessionCheck = require("../middlewares/userSessionCheck");
const adminCheck = require("../middlewares/adminCheck");
const productCreateValidator = require('../validations/productCreateValidator');
const productEditValidator = require("../validations/productEditValidator");
const adminUsersController = require("../controllers/adminUserControllers")
const uploadAvatar = require("../middlewares/uploadAvatar")
const adminCategoryController = require("../controllers/adminCategoryController");


// products
router.get("/", userSessionCheck, adminCheck, aControllers.index) 
router.get("/productos/agregar", userSessionCheck, adminCheck, adminProductControllers.productAdd)
router.get("/productos/editar/:id", userSessionCheck, adminCheck, adminProductControllers.productEdit)
router.get("/productos", userSessionCheck, adminCheck, adminProductControllers.productList)
router.post("/productos",uploadFile.single("image"),productCreateValidator , adminProductControllers.productCreate)
router.put("/productos/:id",uploadFile.single("image"),productEditValidator, adminProductControllers.productoEditar)
router.delete("/productos/:id", adminProductControllers.productDelete)

//CRUD admin USUARIOS adri
router.get("/", /* userSessionCheck, adminCheck, */ aControllers.index) 
//router.get("/usuarios/agregar", /* userSessionCheck, adminCheck,  */adminUsersController.userAdd)
router.get("/usuarios/editar/:id", /* userSessionCheck, adminCheck,  */adminUsersController.userEdit)
router.get("/usuarios", /* userSessionCheck, adminCheck, */ adminUsersController.userList)
//router.post("/usuarios",/* uploadFile.single("image"),productCreateValidator  ,*/ adminUsersController.userCreate)
router.put("/usuarios/:id", adminUsersController.userEditar)
router.delete("/usuarios/:id", adminUsersController.userDelete)
// CRUD CATEGORIA 
router.get('/categories', /* userSessionCheck, adminCheck, */ adminCategoryController.list );
router.get('/categories/addCategory', /* userSessionCheck, adminCheck, */ adminCategoryController.categoryAdd );
router.post('/categories', adminCategoryController.categoryCreate );
router.get('/categories/editCategory/:id', /* userSessionCheck, adminCheck, */ adminCategoryController.categoryEdit );
router.put('/categories/editCategory/:id', adminCategoryController.categoryUpdate );
router.delete('/categories/delete/:id', adminCategoryController.categoryDelete); 

 module.exports= router