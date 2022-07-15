//const { getProduct, escribirJson } = require("../data");
const { Product, Category } = require("../database/models");
const { validationResult } = require('express-validator');


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
    let errors =validationResult(req);
    //res.send(errors)
    if(errors.isEmpty()){
      Product.create({
          ...req.body,
          image: req.file ? req.file.filename : "default-image.png",
          stock: req.body.stock ? true : false,
      })
      .then(() => {
          res.redirect("/administrador/productos");
      })
    
      .catch(error => res.send(error))
    } else{
    Category.findAll().then((categorias) => {
      res.render("admin/products/addProduct", {
        title: "Agregar Productos",
        session: req.session,
        errors: errors.mapped(),
        old: req.body,
        categorias,
      });
    });
    }
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

    let errors = validationResult(req);
        //res.send(errors)
    if(errors.isEmpty()){

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
    } else {
      let producto = Product.findByPk(req.params.id)
      let categorias = Category.findAll()
      Promise.all([producto, categorias])
      .then(([producto, categorias]) => {
        res.render("admin/products/editProduct", {
          title: "Editar Productos",
          producto,
          categorias,
          errors: errors.mapped(),
          session: req.session,
        });
      })
    }
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
