const adminCheck = (req, res, next) => {
    if (req.session.usuario.roluser_id == "2"){
        next ()
     } else {
        //res.send( "No tienen permiso para ingresa,Mati y Jona esto ya lo sabemos  xD")
        res.render("../views/user/error")
     }
 }
 
 module.exports = adminCheck;