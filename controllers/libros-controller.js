const {request,response} = require("express")
const { libros } = require("../libros")

const getLibros = (req ,res)=>{

    return  res.json({
        ok:true,
        statusCode : 200,
        libros
    })

}


const getLibrosById = (req = request ,res = response)=>{

    let id = parseInt(req.params.id);

    let libroABuscar = "";

    libroABuscar = libros.find((libro)=>{
        return libro.id === id;
    });
    if (libroABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            libroABuscar
        });
    }else {
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay libros con es id."
        });
    }

}


module.exports = {
    getLibros,
    getLibrosById
}