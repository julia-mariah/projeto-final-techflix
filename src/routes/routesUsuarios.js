const express = require('express') // aqui eu importo os comandos do express
const controller = require("../controller/controllerUsuarios") // aqui eu indico a rota  
const router = express.Router()// aqui eu instancio o express 

router.get("/", controller.getAll) // aqui criei a rota de pegar todos os videos usando o find
router.get("/:id", controller.getById)// aqui pega o usuario pelo id
router.post("/", controller.criarUsuario) //  aqui criei a rora de postar um video usando o body do postman
router.patch("/:id", controller.atualizarUsuario)//aqui estou atualizando itens do video
router.put("/:id", controller.substituirUsuario) // aqui estou substituindo im item (via put)
router.delete("/:id", controller.deletaUsuario) // aqui deletando o video pelo id
module.exports = router // aqui exporto a rota para uso global .







