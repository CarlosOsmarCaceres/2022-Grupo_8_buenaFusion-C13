const req = require("express/lib/request")
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
                producto: buscandoProducto //
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
                // let productoNuevo = {
                //     id: create + 1,
                //     nombre: req.body.name,
                //     precio: req.body.price,
                //     descripcion: req.body.description,
                //     categoriaId: req.body.categoryId,
                //     descuento: req.body.discount,
                //     // imagen: req.body.image,
                //     imagen: req.file ? req.file.filename : "default-image.jpg",
                //     stock: req.body.stock ? true : false
                // }
                let productoNuevo = {
                    ...req.body, 
                    id: create + 1,
                    // imagen: "desayuno.jpg",
                    image: req.file ? req.file.filename : "default-image.png",
                    stock: req.body.stock ? true : false
                }
                //Agregar al array el objeto nuevo
                getProduct.push(productoNuevo)

                //escribir el array actualizado en el JSON
                escribirJson(getProduct)

                //Devolver una vista
                res.redirect("/administrador/productos")

            },
            productoEditar: (req,res)=>{
                //Obtener id de productyo
                let editProducto = +req.params.id;//se captura como string y se pasa a numero.
                //Buscar el producto editar y modificar.
              
                getProduct.forEach(element => {
                    if(element.id === editProducto){
                        //Modificar losvalores del objeto
                        element.name=req.body.name,//req.body.name capturo y reemplazo element.name
                        element.price=req.body.price,
                        element.description=req.body.descrption,
                        element.categoryId=req.body.categoryId,
                        element.discount=req.body.discount,
                        element.image=req.body.image,
                        element.stock=req.body.stock?true:false
                    }
                });
                //guardar los cambios
                escribirJson(getProduct)
                //Direccionar dar una respuesta
                res.redirect("/administrador/productos")
            },
            productDelete: (req, res) => {
                let productId = +req.params.id;// CApturamos el id del prodcuto
                let productTodelete;
        
                getProduct.forEach(product => {
                    if (product.id === productId) {
                        productTodelete = product.name
                        let productTodeleteIndex = getProduct.indexOf(product)
                        getProduct.splice(productTodeleteIndex, 1);	//splice cambia el contenido de un array
                    }
                });
        
                escribirJson(getProduct)
        
                res.redirect("/administrador/productos")
            }
                 

    
}