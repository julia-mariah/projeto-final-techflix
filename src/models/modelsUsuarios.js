const mongoose = require("mongoose") // Passo 01 : aqui estamos importando o mongoose

const usuariosSchema = new mongoose.Schema({ // passo 2 aqui criamos a engenharia do schema que no caso é uma class
    
    nome: {
        type: String,
        required: true
    },

    cpf: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    idade: {
        type: Number,
        required: true
    },

    assinante: {
        type: Boolean,
        default: false
    },

    metodoPgto: {
        type: String,
        required: false
    },

    _id: mongoose.Schema.Types.ObjectId,
             
    ingressouEm: {
        type: Date,
        required: true,
        default: new Date
    }
   
})

module.exports = mongoose.model("usuario", usuariosSchema)