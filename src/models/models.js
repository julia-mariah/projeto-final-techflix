const mongoose = require("mongoose") // Passo 01 : aqui estamos importando o mongoose

const videosSchema = new mongoose.Schema({ // passo 2 aqui criamos a engenharia do schema

    titulo: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    acesso: {
        type: String,
        required: true
    },

    faixaEtaria: {
        type: Number,
        required: true
    },

    _id: mongoose.Schema.Types.ObjectId,

    postadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})


module.exports = mongoose.model("video", videosSchema)