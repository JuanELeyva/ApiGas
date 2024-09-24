const express = require('express')
const cors = require('cors')
const routerU = require('./rutas/RutaUsuario')
const routerT = require('./rutas/RutaTanque')
const app = express()

app.use(cors());
app.use(express.json());
app.use('/Usuarios',routerU)
app.use('/Tanques',routerT)


app.listen(8081 ,()=>{
    console.log("escuchando en el puerto 8081")
})