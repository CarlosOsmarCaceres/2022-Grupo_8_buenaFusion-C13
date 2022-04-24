const {getProduct,escribirJson} = require("../data")


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
                let idProducto = + req.params.id
                let buscandoProducto = getProduct.find(producto => producto.id == idProducto)
                res.render("admin/products/editProduct", {
                    title: "Editar Productos", 
                    producto: buscandoProducto
                })
            },
            productCreate: (req,res)=> {
                //Crear Objeto
                let create = 0;
                getProduct.forEach(producto =>  {
                    if(producto.id > create){
                        create = producto.id;
                    }
                });
                let productoNuevo = {
                    id: create + 1,
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    categoryId: req.body.categoryId,
                    discount: req.body.discount,
                    image: req.body.image,
                    stock: req.body.stock
                }
                //Agregar al array el objeto nuevo
                getProduct.push(productoNuevo)

                //escribir el array actualizado en el JSON
                escribirJson(getProduct)

                //Devolver una vista
                res.redirect("/administrador/productos")

            }
    
}