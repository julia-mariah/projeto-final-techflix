const express = require('express')
const router = express.Router()

router.get("/", (req,res)=>{
    res.status(200).json({
        message: "Olá !! Aqui você vai encontrar muita ajuda para quem está inciando no unverso do TI", 
        version: 1.0,
        autor:"Julia Mariah",
        site: "www.techflix.com.br"

    })
} )

module.exports = router