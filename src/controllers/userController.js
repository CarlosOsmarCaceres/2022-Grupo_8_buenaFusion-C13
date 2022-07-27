// const {getUsers, escribirUser} = require('../data');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const db = require('../database/models');

module.exports= {

    registro: (req, res) => {
        res.render("user/register", {
            title: "registro",
            session: req.session
        })
    },
    
    logeo: (req, res) => {
        res.render("user/login", {
            title: "login",
            session: req.session
        })
    },
    procesoLogin: (req,res) =>{
        let errors = validationResult(req);
        //res.send(errors)
        if(errors.isEmpty()){

            db.User.findOne({
                where:{
                    email: req.body.email
                }
            })
            .then((user)=>{
                req.session.usuario = {
                    id : user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    avatar: user.avatar,
                    roluser_id: user.roluser_id
                }
                if(req.body.remember) {
                    const TIME_IN_MILISECONDS = 259200;
                    res.cookie("fusionCookie", req.session.usuario, {
                            expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                            httpOnly: true,
                            secure: true
                    })
                }
                res.locals.usuario = req.session.usuario /* aca guardamos en la variable global al usuario que inicio sesión */
                res.redirect("/")
            })
        }else{
            res.render("user/login", {
                title: "login",
                session: req.session,
                errors: errors.mapped(),
                old: req.body,
            })
        }
    },
    procesoRegistro: (req,res)=> {
        //Verificar si hubo errores en el form
        let errors = validationResult(req);
        //res.send(errors.mapped())
        if(errors.isEmpty()){
            //Si no hay errores, crea el usuario
            db.User.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                fecha: req.body.fecha,
                telefono: req.body.telefono,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10),
                avatar: req.file ? req.file.filename: "avatar.jpg",
                roluser_id: "1"
            })
            .then(()=>{
                res.redirect('/usuario')
            })
            .catch(error => res.send(error))
        }
        /*Cuando agregamos el else nos tira error!!!!!*/
        else{
            res.render("user/register",{
            title: "registro",
            errors: errors.mapped(),        
            session: req.session,
            old: req.body,
          })
        }
        
    },
    singOff: (req, res) => {
        req.session.destroy();

        if(req.cookies.fusionCookie) {
            res.cookie("fusionCookie", "", {maxAge: -1})
        }
        res.redirect("/usuario")
    }
}

    
