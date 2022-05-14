const adminCheck = (req, res, next) => {
    if (req.session.usuario.rol === "ADMIN"){
        next ()
     } else {
        res.send( "No tienen permiso para ingresa,Mati y Jona esto ya lo sabemos  xD")
     }
 }
 
 module.exports = adminCheck;