const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Olá !! Aqui você vai encontrar muita ajuda e informação para conhecer o universo Dev e TI",
        version: 1.0,
        autor: "Julia Mariah Elyseu",
        site: "www.techflix.com.br",
        date: 2021,
        descricao: "Projeto final do curso da REPROGRAMA"

    })
})

module.exports = router