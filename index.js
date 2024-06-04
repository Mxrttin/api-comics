

const express = require("express");

const app = express();

const cors = require("cors");

const port = 2006;


const {getLibros , getLibrosById} = require("./controllers/libros-controller")



app.use(cors());

app.get("/", getLibros )

app.get("/:id" , getLibrosById)




app.listen(port , ()=>{
    console.log(`Servidor arriba en el puerto :${port}`)
});

