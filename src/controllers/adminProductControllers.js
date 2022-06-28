//const { getProduct, escribirJson } = require("../data");
const { Product, Category } = require("../database/models");

module.exports = {
  productList: (req, res) => {
    Product.findAll().then((productos) => {
      res.render("admin/products/listProduct", {
        title: "Lista de Productos",
        productos,
        session: req.session,
      });
    });
  },
  productAdd: (req, res) => {
    Category.findAll().then((categorias) => {
      res.render("admin/products/addProduct", {
        title: "Agregar Productos",
        session: req.session,
        categorias,
      });
    });
  },
  productCreate: (req, res) => {
    Product.create({
        ...req.body,
        image: req.file ? req.file.filename : "default-image.png",
        stock: req.body.stock ? true : false,
    })
    .then(() => {
        res.redirect("/administrador/productos");
    })
    
  },
  productEdit: (req, res) => {
        let producto = Product.findByPk(req.params.id)
        let categorias = Category.findAll()
        Promise.all([producto, categorias])
        .then(([producto, categorias]) => {
            res.render("admin/products/editProduct", {
                title: "Editar Productos",
                producto,
                categorias,
                session: req.session, //
            });
        })
  },
  productoEditar: (req, res) => {
    let producto = Product.findByPk(req.params.id)
    Product.update({
        ...req.body,
        image: req.file ? req.file.filename : producto.image,
        stock: req.body.stock ? true : false,
    },
    {
        where : { id : req.params.id}
    })
    .then(() => {
        res.redirect("/administrador/productos");
    })
    .catch(errors => console.log(errors))
  },
  productDelete: (req, res) => {
    Product.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(() => {
        res.redirect("/administrador/productos");
    })
  },
};
