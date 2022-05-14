const adminCheck = (req, res, next) => {
    if (req.session.usuario.rol === "ADMIN"){
        next ()
     } else {
        res.send( "No tienen permiso para ingresa, vuelen de aca Mati y Jona xD")
     }
 }
 
 module.exports = adminCheck;