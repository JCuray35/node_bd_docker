const express = require("express")

// Inicializando una app de express
const app = express()

app.get("/", function(req, res){
    return res.json({message: "Saludos desde mi App de Node (MODIFICADO) último 2"});
});

app.listen(3000, function(){
    console.log("Servidor corriendo en el puerto 3000 (ultima modificacion 2)");
})