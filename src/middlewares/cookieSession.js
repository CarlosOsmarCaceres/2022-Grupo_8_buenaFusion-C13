const cookieSession = (req, res) => {
    if(req.cookies.fusionCookie) {
        req.session.usuario = req.cookies.fusionCookie;
        res.locals.usuario = req.session.usuario;
    }
        next()
 }


module.exports = cookieSession;