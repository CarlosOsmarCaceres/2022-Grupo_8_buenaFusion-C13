const {getUsers, escribirUser} = require('../data');

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
           pass: req.body.pass,
           avatar: req.file ? req.file.filename : "avatar.jpg" // Viene una rchivo? si viene, guardame req.file.filename, caso contrario subimo img por dafault
       }
      // Paso 2 - Guardar el nuevo usuario en el array de usuarios
       getUsers.push(newUser)//aqui guardo en memoria no en json
      // Paso 3 - Escribir el JSON de usuarios con el array actual
      escribirUser(getUsers)
      // Paso 4 - Devolver respuesta (redirección)
      res.redirect('/usuario')
    }
    
}