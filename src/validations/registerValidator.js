const { check, body } = require('express-validator');
const db = require("../database/models");

let registerValidator = [
    check("nombre")
        .notEmpty().withMessage('El nombre es requerido').bail() 
        .isLength({ min:2 }).withMessage('Ingrese un nombre válido'), 
    check("apellido")
        .notEmpty().withMessage("El apellido es requerido").bail()
        .isLength({ min:2 }).withMessage('Ingrese un apellido válido'),
    check("fecha")
        .notEmpty().withMessage("La fecha es requerida").bail()
        ,
    check("telefono")
        .notEmpty().withMessage("El numero de telefono es requerido").bail()
        .isLength({ min:2 }).withMessage('Ingrese un telefono válido'),
    check("email")
        .notEmpty().withMessage("El Email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),
    body("email").custom((value)=>{
        return db.User.findOne({
            where: {
                email: value,
            }
        })
        .then((user)=>{
            if(user){
                return Promise.reject("Email ya esta Ingresado")
            }
        })
    }),    
    check("pass")
        .notEmpty().withMessage("Ingrese una contraseña").bail()
        .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres"),
    check("datorepass")
        .notEmpty().withMessage("Reingrese su contraseña"),

    body("datorepass").custom((value, { req })=>{
        if(value !== req.body.pass){
            return false;
        }
        return true;
    }).withMessage("Las contraseñas no coinciden"),
    check("terms")
        .isString("on").withMessage("Debes aceptar los terminos y condiciones")
];

module.exports = registerValidator;