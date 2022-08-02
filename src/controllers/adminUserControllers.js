//const { getProduct, escribirJson } = require("../data");
const { User, RolUser } = require("../database/models");
const { validationResult } = require('express-validator');


module.exports = {
  //Funcional
  userList: (req, res) => {
    User.findAll().then((usuarios) => {
      res.render("admin/products/listUser", {
        title: "Lista de Usuarios",
        usuarios,
        session: req.session,
      });
    });
  },
  // userAdd: (req, res) => {
  //   RolUser.findAll().then((categorias) => {
  //     res.render("admin/products/addUser", {
  //       title: "Agregar Productos",
  //       session: req.session,
  //       categorias,
  //     });
  //   });
  // },
  // userCreate: (req, res) => {
  //   let errors =validationResult(req);
  //   //res.send(errors)
  //   if(errors.isEmpty()){
  //     User.create({
  //         ...req.body,
  //         image: req.file ? req.file.filename : "default-image.png",
  //         stock: req.body.stock ? true : false,
  //     })
  //     .then(() => {
  //         res.redirect("/administrador/productos");
  //     })
    
  //     .catch(error => res.send(error))
  //   } else{
  //   RolUser.findAll().then((categorias) => {
  //     res.render("admin/products/addUser", {
  //       title: "Agregar Productos",
  //       session: req.session,
  //       errors: errors.mapped(),
  //       old: req.body,
  //       categorias,
  //     });
  //   });
  //   }
  // },
  //Vista de Edicion de Usuario
  userEdit: (req, res) => {
        let usuario = User.findByPk(req.params.id, {
          include: ['roluser']
        })
        let categorias = RolUser.findAll()
        Promise.all([usuario, categorias])
        .then(([usuario, categorias]) => {
         /*  return res.send(categorias) */
            res.render("admin/products/editUser", {
                title: "Editar Usuario",
                usuario,
                categorias,
                session: req.session, //
            });
        })
  },
  //Edita el usuario
  userEditar: (req, res) => {

    let errors = validationResult(req);
        //res.send(errors)
    if(errors.isEmpty()){

      let usuario = User.findByPk(req.params.id)
      User.update({
          ...req.body,
          image: req.file ? req.file.filename : usuario.image,
          stock: req.body.stock ? true : false,
        },
        {
            where : { id : req.params.id}
        })
        .then(() => {
            res.redirect("/administrador/usuarios");
          })
          .catch(errors => console.log(errors))
    } else {
       let usuario = User.findByPk(req.params.id)
      let categorias = RolUser.findAll()
      Promise.all([usuario, categorias])
      .then(([usuario, categorias]) => {
        res.render("admin/products/editUser", {
          title: "Editar Usuario",
          usuario,
          categorias,
          errors: errors.mapped(),
          session: req.session,
        });
      })
   }
  },
  userDelete: (req, res) => {
    User.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(() => {
        res.redirect("/administrador/usuarios");
    })
  },
};
