const express = require('express')
const {getUsuario, getUnUsuario,getConfirmarLogin,postUsuario,putUsuarioContra,putUsuarioCorreooYNom,deleteUsuario} = require('../controladores/ControladorUsuario')
const router = express.Router()

router.get('/',getUsuario)

router.get('/Especifico',getUnUsuario)

router.get('/Login',getConfirmarLogin)

router.post('/Alta',postUsuario)

router.put('/ResetContra',putUsuarioContra)

router.put('/ResetNombreYCorreo',putUsuarioCorreooYNom)

router.delete('/Eliminar',deleteUsuario)

module.exports = router 