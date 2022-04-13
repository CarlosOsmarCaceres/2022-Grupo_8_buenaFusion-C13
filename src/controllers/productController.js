let {getProduct } = require("../data")

module.exports= {

    carrito: (req, res) => {
        res.render("products/productCart")
    },
    
    
        detalle:  (req, res) => {
        res.render("products/productDetail")
    },

    
        todosLosProductos: (req, res) => {
            res.render("general/index", getProduct )

    }
    
}