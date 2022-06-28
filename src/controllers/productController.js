const db = require('../database/models');

module.exports= {

    carrito: (req, res) => {
        res.render("products/productCart", {
            title: "carrito",
            session: req.session
        })
    },
    detalle:  (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            res.render("products/productDetail", {
                title: "detalle",
                product,
                session: req.session
            })
        })
        .catch((error)=> res.send(error))
    },
    todosLosProductos: (req, res) => {
        db.Product.findAll()
            .then(productos => {
                res.render("general/index", {
                    title: "todosLosProductos", 
                    productos,
                    session: req.session
                }) 
            })
        .catch((error)=> res.send(error))
    }
}