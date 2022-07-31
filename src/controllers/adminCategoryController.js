const { Category } = require("../database/models");

module.exports = {
    list: (req, res) => {
        Category.findAll()
        .then((categorias) => {
            res.render("admin/categories/categoryAdmin", {
                titulo: "Categorias",
                categorias,
                session: req.session
            })
        })
        .catch((error) => { res.send(error)})  
    },

    categoryAdd: (req, res) => {
        res.render("admin/categories/addCategory", {
            titulo: "Agregar categoria",
            session: req.session
        })
    },

    categoryCreate: (req, res) => {
       Category.create({
        nameCategory: req.body.name,

        })
         .then((result)=>{
            res.redirect("/administrador/categories")
        }) 
        .catch((error) => { res.send(error)})
    },

    categoryEdit: (req,res) => {
        let id_categoria = +req.params.id;

       Category.findByPk(id_categoria)
        .then((category) => {
            res.render('admin/categories/editCategory', {
                titulo: "Editar Categorias",
                category,
                session: req.session
            })
        })
        .catch((error) => { res.send(error)})
    },

    categoryUpdate: (req, res) => {
        let category= +req.params.id

       Category.update({
            nameCategory: req.body.name
        }, {
            where: {
                id: category
            }
        })
        .then((result) => {
            if(result){
                return res.redirect("/administrador/categories")
            }else{
                return res.send("No se puede actualizar la categoria.")
            }
        })
        .catch((error) => { res.send(error)})
    },

    categoryDelete: (req, res) => {
        let category = +req.params.id

       Category.destroy({
            where: {
                id: category
            }
        })
        .then((result) => {
            if(result){
                res.redirect("/administrador/categories")
            }else{
                res.send("Categoria eliminada.")
            }
        })
        .catch((error) => { res.send(error)})
    }

};