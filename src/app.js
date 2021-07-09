const express = require("express") // 1 - isso eu importei do express
const videos = require("./routes/routesVideos") // aqui eu importei a rota do controllers 
const app = express() // 2 - criei o app
const dataConfig = require("./data/dataConfig")

const usuarios = require("./routes/routesUsuarios")

dataConfig.connect()

app.use(express.json())

app.use("/videos", videos)


module.exports = app // 3 - aqui estou exportando o APP e suas dependencias(express) para o server.js



