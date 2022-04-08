const express = require("express");
const app = express();

const path= require('path');


const port = 3000;

//Ruta elementos estaticos
app.use(express.static('./src/public'));
app.listen(process.env.PORT || port, () => console.log(`http://localhost:${port}`))

//Ruta register

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + "/src/views/register.html" /* '/src/views/register.html' */)
  })

//Ruta index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/views/header.html')
})
//Ruta login


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/src/views/login.html')
})

//Ruta product cart
  app.get('/carritoDecompras', (req, res) => {
    res.sendFile(__dirname + '/src/views/productCart.html')
  })

//Ruta product detail
  app.get('/detalleDeProducto', (req, res) => {
    res.sendFile(__dirname + '/src/views/productDetail.html')
  })

