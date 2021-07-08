const express = require('express') // aqui eu importo os comandos do express
const controller = require("../controller/controllerVideos") // aqui eu indico a rota  
const router = express.Router()// aqui eu instancio o express 

// aqui vou criar as rotas 

router.get("/", controller.getAll) // aqui criei a rota de pegar todos os videos usando o find
router.post("/", controller.criarVideo) //  aqui criei a rora de postar um video usando o body do postman
router.patch("/:id", controller.atualizarVideo)//aqui estou atualizando itens do video
router.put("/:id", controller.substituirVideo) // aqui estou substituindo im item (via put)
router.delete("/:id", controller.deletaVideo) // aqui deletando o video pelo id
module.exports = router // aqui exporto a rota para uso global .