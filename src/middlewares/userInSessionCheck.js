const userInSessionCheck= (req, res, next) => {
    if (req.session.usuario){ 
        return res.redirect("/") 
       }	
       next()
 }

 module.exports = userInSessionCheck;