const Usuarios = require("../models/modelsUsuarios")
const mongoose = require("mongoose")
const getAll = async (req, res) => {
    try { const usuariosEncontrados = await Usuarios.find()
        res.status(200).send(usuariosEncontrados)
    } 
    catch (error){
        res.status(500).send({message: error.message })
    }
}


module.exports = {
    getAll,

    
}














