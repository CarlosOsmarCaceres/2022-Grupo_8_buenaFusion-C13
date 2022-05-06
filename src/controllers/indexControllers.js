const req = require("express/lib/request")
const {getProduct,escribirJson} = require("../data")

module.exports= {

    index: (req, res) => {
            res.render("general/index", {
            title: "inicio",
            productos: getProduct
        })
        
    }
    
}