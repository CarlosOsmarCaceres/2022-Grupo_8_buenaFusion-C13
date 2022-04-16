let {getProduct } = require("../data")

module.exports= {

    carrito: (req, res) => {
        res.render("products/productCart", {
            title: "carrito"
        })
    },
    
    
        detalle:  (req, res) => {
        res.render("products/productDetail", {
             title: "detalle"
            })
    },

    
        todosLosProductos: (req, res) => {
            res.render("general/index", {
                title: "todosLosProductos", getProduct 
            }) 

    }
    
}