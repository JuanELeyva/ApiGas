const express = require('express')
const { getTanque,getunTanque,getTanquePorUsuario,postTanque,putTanque,deleteTanque } = require('../controladores/ContraladorTanque')
const router = express.Router()

router.get('/',getTanque)

router.get('/Especifico',getunTanque)

router.get('/PorUsuario',getTanquePorUsuario)

router.post('/Alta',postTanque)

router.put('/ModifLitros',putTanque)

router.delete('/Eliminar',deleteTanque)

module.exports = router