const { Product } = require('../database/models')

module.exports= {

    index: (req, res) => {
        Product.findAll()
        .then(productos => {
            res.render("general/index", {
                title: "inicio",
                productos,
                session: req.session
            })
        })
        .catch((error)=> res.send(error))
    }
}