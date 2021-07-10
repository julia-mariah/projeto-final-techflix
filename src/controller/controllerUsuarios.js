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

const getById = async(req, res) => {
     try{ const usuariosId = await Usuarios.findById(req.params.id)
        res.status(200).send(usuariosId)
      }
     catch (error){
        res.status(500).send({message: error.message})
     }
    }

const criarUsuario =  async (req,res) => {
     const usuario = new Usuarios ({
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      idade: req.body.idade,
      assinante: req.body.assinante,
      _id: new mongoose.Types.ObjectId() 
     })

     try {
        const novoUsuario = await usuario.save()
        res.status(201).send({ message: "usuario criado", usuario: novoUsuario })

    } catch (error) {
        res.status(500).send({message: error.message })
    }
}

const atualizarUsuario = async (req,res) => {
  try{ 
      const usuario = await Usuarios.findById(req.params.id)
      if (usuario == null) {
        return res.status(404).json({ message: 'usuario não encontrado!'})
    }

    if (req.body.nome != null) {
        usuario.nome = req.body.usuario
    }
    if (req.body.cpf != null) {
        usuario.cpf = req.body.cpf
    }
    if (req.body.email != null) {
        usuario.email = req.body.email
    }
    if (req.body.assinante != null) {
        usuario.assinante = req.body.assinante
    }    

        const usuarioAtualizado = await usuario.save()
        res.status(200).send({message : "usuario Atualizado", usuarioAtualizado})

  } 
  catch (error) {
    res.status(500).send({ message:error.message})
} 
}

const substituirUsuario = async (req,res) =>{
    try { const usuariosEncontrados = await Usuarios.where().findOneAndReplace({_id:req.params.id}, req.body,{new:true} )
        res.status(200).send(usuariosEncontrados)
    } 
    catch (error){
        res.status(500).send({message: error.message })
    }
}

const deletaUsuario = async (req, res) => {
    try {
        const usuario = await Usuarios.findById(req.params.id)
        usuario.remove()
res.status(200).send({message: "usuario deletado", usuario: usuario})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}


module.exports = {
    getAll, 
    criarUsuario, 
    atualizarUsuario, 
    substituirUsuario, 
    deletaUsuario,
    getById
}














