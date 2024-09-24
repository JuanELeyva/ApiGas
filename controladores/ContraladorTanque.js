const Tanque = require('../modelos/ModeloTanque')

const getTanque = async (req,res) =>{
    try{
        const tanqueConsul = await Tanque.findAll()
        res.status(200).json(tanqueConsul)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const getTanquePorUsuario = async (req,res) =>{
    try{
        const usuarioId = req.body.id
        const tanquesDelUsuario = await Tanque.findAll({where: {idusuario: usuarioId}})
        if(tanquesDelUsuario.length != 0){
            res.status(200).json(tanquesDelUsuario)
        }
        else{
            res.status(404).json({ message : 'No se encontro ningun tanque asignado a ese usuario' })
        }
    } catch(error){
        res.status(500).json({ message : error })
    }
}

const getunTanque = async (req,res) =>{
    try{
        const id = req.body.id
        const tanqueConsulId = await Tanque.findByPk(id)
        if(tanqueConsulId){
            res.status(200).json(tanqueConsulId)
        }
        else {
            res.status(404).json({ message : 'No se ha encontrado ese tanque con ese id' })
        }
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const postTanque = async (req,res) =>{
    try{
        const litros = req.body.litros
        const capacidad = req.body.capacidad
        const idusuario = req.body.idusuario
        const tanqueNuevo = await Tanque.create({ idusuario:idusuario,litros:litros,capacidad:capacidad})
        res.status(200).json(tanqueNuevo)
    } catch(error){
        res.status(500).json({ message : error })
    }
}
const putTanque = async (req,res) =>{
    try{
        const tanqueId = req.body.id
        const litros = req.body.litros
        const tanqueACambiar = await Tanque.findByPk(tanqueId)
        if(tanqueACambiar){
            tanqueACambiar.litros = litros
            await tanqueACambiar.save()
            res.status(200).json({ message : 'Se ha actualizado correctamente' })
        }
        else{
            res.status(404).json({ message : 'No se ha encontrado ningun tanque con ese ID' })
        }
    } catch(error){
        res.status(500).json({ message : error })
    }
}
const deleteTanque = async (req,res) =>{
    try{
        const tanqueId = req.body.id
        const tanqueEliminar = await Tanque.findByPk(tanqueId)
        if(tanqueEliminar){
            await tanqueEliminar.destroy()
            res.status(200).json({ message : 'Se ha eliminado el tanque correctamente' })
        }
        else{
            res.status(404).json({ message : 'No se ha encontrado ningun tanque con ese id' })
        }
    } catch(error){
        res.status(500).json({ message : error })
    }
}

module.exports = {getTanque,getunTanque,getTanquePorUsuario,postTanque,putTanque,deleteTanque}
