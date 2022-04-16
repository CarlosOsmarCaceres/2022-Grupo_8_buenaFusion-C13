module.exports= {

    registro: (req, res) => {
        res.render("user/register", {
            title: "registro"
        })
    },
    
   logeo: (req, res) => {
        res.render("user/login", {
            title: "login"
        })
    },
    
}