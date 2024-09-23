const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json());

app.listen(8081 ,()=>{
    console.log("escuchando en el puerto 8081")
})