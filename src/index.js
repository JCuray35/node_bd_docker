const express = require("express")
require("dotenv").config();

const User = require("./models/user")
const Producto = require("./models/producto")

// Inicializando una app de express
const app = express()

const port = process.env.PORT || 3000;

app.get("/", function(req, res){
    return res.json({message: "Saludos desde mi App de Node (MODIFICADO) último 2"});
});

app.listen(port, function(){
    console.log("Servidor corriendo en el puerto 3000 (ultima modificacion 2)");
})