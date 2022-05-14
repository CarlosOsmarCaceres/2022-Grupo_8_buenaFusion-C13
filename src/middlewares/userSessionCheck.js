const userSessionCheck = (req, res,next) => {
    if (req.session.usuario){
  next()
     } else{
  res.redirect("/usuario")
     }
  }
  
  module.exports = userSessionCheck;