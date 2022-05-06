let {getProduct } = require("../data")

module.exports= {

    carrito: (req, res) => {
        res.render("products/productCart", {
            title: "carrito"
        })
    },
    
    
        detalle:  (req, res) => {
            let productId = +req.params.id;// Para obtener el id del producto
            let product = getProduct.find(product => product.id === productId);
            
            res.render("products/productDetail", {
                title: "detalle",
                product
            })
    },

    
        todosLosProductos: (req, res) => {
            res.render("general/index", {
                title: "todosLosProductos", getProduct 
            }) 

    }
    
}