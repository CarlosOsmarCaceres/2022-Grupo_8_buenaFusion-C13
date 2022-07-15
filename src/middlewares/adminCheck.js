const adminCheck = (req, res, next) => {
    if (req.session.usuario.roluser_id == "1"){
        next ()
     } else {
        res.send( "No tienen permiso para ingresa,Mati y Jona esto ya lo sabemos  xD")
     }
 }
 
 module.exports = adminCheck;