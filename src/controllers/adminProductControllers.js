const {getProduct} = require("../data")

module.exports= {
    productList: (req, res) => {
        res.render("admin/products/listProduct", {
            title: "Lista de Productos", 
            productos: getProduct
        })
    },
        productAdd: (req, res) => {
            res.render("admin/products/addProduct", {
                title: "Agregar Productos"
            })
        },
            productEdit: (req, res) => {
                res.render("admin/products/editProduct", {
                    title: "Editar Productos"
                })
            }
    
}