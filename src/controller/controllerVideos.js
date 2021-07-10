const Videos = require("../models/modelsVideos")
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try {
        const videosEncontrados = await Videos.find()
        res.status(200).send(videosEncontrados)
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const videoId = await Videos.findById(req.params.id)
        res.status(200).send(videoId)
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}


const criarVideo = async (req, res) => {
    const video = new Videos({
        titulo: req.body.titulo,
        tema: req.body.tema,
        descricao: req.body.descricao,
        acesso: req.body.acesso,
        link: req.body.link,
        faixaEtaria: req.body.faixaEtaria,
        nivel: req.body.nivel,
        avaliacao: req.body.avaliacao,
        duracao: req.body.duracao,
        _id: new mongoose.Types.ObjectId()
    })

    try {
        const novoVideo = await video.save()
        res.status(201).send({ message: "video criado", video: novoVideo })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const atualizarVideo = async (req, res) => {
    try {
        const video = await Videos.findById(req.params.id)
        if (video == null) {
            return res.status(404).json({ message: 'video não encontrado!' })
        }

        if (req.body.titulo != null) {
            video.titulo = req.body.titulo
        }
        if (req.body.tema != null) {
            video.tema = req.body.tema
        }
        if (req.body.descricao != null) {
            video.descricao = req.body.descricao
        }
        if (req.body.acesso != null) {
            video.acesso = req.body.acesso
        }
        if (req.body.link != null) {
            video.link = req.body.link
        }
        if (req.body.faixaEtaria != null) {
            video.faixaEtaria = req.body.faixaEtaria
        }
        if (req.body.avaliacao != null) {
            video.avaliacao = req.body.avaliacao
        }
        if (req.body.duracao != null) {
            video.duracao = req.body.duracao
        }

        const videoAtualizado = await video.save()
        res.status(200).send({ message: "video Atualizado", videoAtualizado })

    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const substituirVideo = async (req, res) => {
    try {
        const videosEncontrados = await Videos.where().findOneAndReplace({ _id: req.params.id }, req.body, { new: true })
        res.status(200).send(videosEncontrados)
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const deletaVideo = async (req, res) => {
    try {
        const video = await Videos.findById(req.params.id)
        video.remove()
        res.status(200).send({ message: "video deletado", video: video })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}



module.exports = {
    getAll,
    criarVideo,
    atualizarVideo,
    substituirVideo,
    deletaVideo,
    getById
}



