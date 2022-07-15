const { check, body } = require('express-validator');
const db = require("../database/models");

let productCreateValidator =[
    check("name")
        .notEmpty().withMessage("El nombre es requerido").bail()
        //.isAlphanumeric().withMessage("Ingresa un nombre válido")
        .isLength({min: 5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    check("price")
        .notEmpty().withMessage("Ingresa un precio").bail()
        .isNumeric().withMessage("Sólo números"),
    check("discount").custom(value => {
            if(value >= 0 && value <= 100){
                return true;
            }
            return false;
        }).notEmpty().withMessage("El descuento tiene que tener un valor entre 0 y 100"),  
    check("description")
        .notEmpty().withMessage("Escribe la descripcion de tu producto").bail()
        .isLength({min: 20}).withMessage("LA descripcion debe tener al menos 20 caracteres"),
    check("category_id")
        .notEmpty().withMessage("Tiene que selecciona una Categoría")
];

module.exports = productCreateValidator;