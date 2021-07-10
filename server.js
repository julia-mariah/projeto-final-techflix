const app = require("./src/app") // passo 5 importar o app

const Port = process.env.PORT || 6262  // passo 6-configurar a porta para 6262, incluindo a variável de ambiente 

app.listen(Port, () => console.log("servidor rodando na porta 6262")) //passo 7-coloquei o servido para rodar


