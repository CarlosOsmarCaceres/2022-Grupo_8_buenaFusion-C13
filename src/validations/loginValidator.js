const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

loginValidator = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("Ingrese un email válido"),   //.isEmail() Tiene que ser un email
    body("pass").custom((value, { req })=>{
         return db.User.findOne({
            where: {
                email: req.body.email,
            }
        }).then((user) => {
            if(!bcrypt.compareSync(req.body.pass, user.pass)){
                return Promise.reject()
            }
        })
        .catch((error) => {
            return Promise.reject("Email o contraseña incorrecto")
        })
        .catch((error) => {
            return Promise.reject("Email o contraseña incorrecto")
        })
        
    }).withMessage("Email o contraseña incorrecto"),
    body("pass")
        .notEmpty().withMessage("Ingrese una contraseña").bail(),
];

module.exports = loginValidator;


