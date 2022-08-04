const { Product } = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const {Op} = require('sequelize')


module.exports= {

    index: (req, res) => {
        Product.findAll()
        .then(productos => {
            res.render("general/index", {
                title: "inicio",
                productos,
                session: req.session
            })
        })
        .catch((error)=> res.send(error))
    },
    search: (req, res) => {
        let search = req.query.keywords;
        let search_clean = removeAccents(search).toLowerCase();
       Product.findAll(
            {
                where: {
                    name: { [Op.like]: `%${search_clean}%` },
                    description: { [Op.like]: `%${search_clean}%` },
                }
            })
            .then((productos) => {
                res.render('./general/search', {
                    titulo: "Search",
                    title: "Productos",
                    CSS: "index.css",
                    productos,
                    toThousand,
                    keyword: search_clean,
                    session: req.session,
                    image: req.file ? req.file.filename : "default-image.png"
                })

            })
            .catch(function (error) {
                res.send(error)
            })

    }

}