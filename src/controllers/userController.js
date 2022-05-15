const {getUsers, escribirUser} = require('../data');
const bcrypt = require("bcryptjs");
module.exports= {

    registro: (req, res) => {
        res.render("user/register", {
            title: "registro"
        })
    },
    
   logeo: (req, res) => {
        res.render("user/login", {
            title: "login"
        })
    },
    procesoLogin: (req,res) =>{
        let user = getUsers.find (user => user.email === req.body.email)
        req.session.usuario = {
            id : user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            avatar: user.avatar,
            rol: user.rol
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
    }
    ,
    procesoRegistro: (req,res)=> {
         //Registrar un usuario - Guardarlo en el JSON
       // Paso 1 - Crear un objeto User
        //res.send(req.body) ver lo que devuelve
        //res.send(req.file) ver que devuelve - todos los datos para el milddlewares


       let lastId = 0;
       //recorremos el ususario ty verificamos cual es el ultimo id
       getUsers.forEach(user => {
           if(user.id > lastId){
               
               lastId = user.id
           }
       });
       //creamos objeto para gurdar acumular los id
       let newUser = {
           id: lastId + 1,
           nombre: req.body.nombre,
           apellido: req.body.apellido,
           fecha: req.body.fecha,
           telefono: req.body.telefono,
           email: req.body.email,
           pass: bcrypt.hashSync(req.body.pass, 10),
           avatar: req.file ? req.file.filename : "avatar.jpg", // Viene una rchivo? si viene, guardame req.file.filename, caso contrario subimo img por dafault
           rol: "USER" 
        }
      // Paso 2 - Guardar el nuevo usuario en el array de usuarios
       getUsers.push(newUser)//aqui guardo en memoria no en json
      // Paso 3 - Escribir el JSON de usuarios con el array actual
      escribirUser(getUsers)
      // Paso 4 - Devolver respuesta (redirección)
      res.redirect('/usuario')
    },

    singOff: (req, res) => {
        req.session.destroy();

        if(req.cookies.fusionCookie) {
            res.cookie("fusionCookie", "", {maxAge: -1})
         }

        res.redirect("/")
        }
    }

    
