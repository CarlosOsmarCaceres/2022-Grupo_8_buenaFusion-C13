const express = require("express");
const res = require("express/lib/response");
const app = express();

const path= require('path');

const port = 3000;
const methodOverride = require("method-override");

//Ruta elementos estaticos
app.use(express.static('./src/public'));
app.listen(process.env.PORT || port, () => console.log(`http://localhost:${port}`))

/* views config */
app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views")) /* aca le decimos que si se requiere archivos los busque en views */
/* Para poder usar el metodo POST */
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
//Para poder usar metodos post y delete
app.use(methodOverride("_method"))



//Rutas
const iRouter = require ("./routes/indexRouter"); /*  estamos requiriendo el archivo router */
const pRouter = require ("./routes/productRouter"); 
const uRouter = require ("./routes/userRouter"); 
const aRouter = require ("./routes/adminRouter"); 





app.use("/", iRouter)
app.use("/producto", pRouter)
app.use("/usuario", uRouter)
app.use("/administrador", aRouter)

















/* app.get('/registro', (req, res) => {
    res.sendFile(__dirname + "/src/views/register.html" )
  })
 */
//Ruta index
/* app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/views/index.html')
}) */
//Ruta login


/* app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/src/views/login.html')
}) */

//Ruta product cart
 /*  app.get('/carritoDecompras', (req, res) => {
    res.sendFile(__dirname + '/src/views/productCart.html')
  }) */

//Ruta product detail
 /*  app.get('/detalleDeProducto', (req, res) => {
    res.sendFile(__dirname + '/src/views/productDetail.html')
  }) */

