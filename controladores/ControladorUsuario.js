const Usuario = require('../modelos/ModeloUsuario')
const { HashPassword,ConfirmPassword } = require('../middleware/ByEncrpy')

const getConfirmarLogin = async (req,res) =>{
    try{
        const contra = req.body.contra
        const correo = req.body.correo
        const usuarioCorreo = await Usuario.findOne({ where:{correo:correo}})
        if(usuarioCorreo){
            if( await ConfirmPassword(contra,usuarioCorreo.contra))
            {
                console.log()
                res.status(200).json({message:'Inicio de sesion exitoso.'})
            }
            else{
                res.status(401).json({message:'Correo o contraseña incorrectos.'})
            }
        }
        else{
            res.status(401).json({message:'Correo o contraseña incorrectos.'})
        }
    } catch(error){
        res.status(500).json({message:error})
    }
}

const getUsuario = async (req,res) => {
    try{
        const UsuarioConsul = await Usuario.findAll()
        res.status(200).json(UsuarioConsul)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const getUnUsuario = async (req,res) => {
    try{
        const id = req.body.id
        const usuarioConsulId = await Usuario.findByPk(id)
        if(usuarioConsulId){
            res.json(usuarioConsulId)
        }
        else{
            res.status(400).json({ message: 'No se ha encontrado ese usuario con ese id' })
        }
    } catch(error){
        res.status(500).json({ message: error })
    }
}

const postUsuario = async (req,res) => {
    try{
        const correo = req.body.correo
        const contra = await HashPassword(req.body.contra)
        console.log(contra)
        const usuarionom = req.body.usuarionom
        const nuevoUsuario = await Usuario.create({correo:correo,contra:contra,usuarionom:usuarionom})
        res.status(200).json(nuevoUsuario)
    } catch(error){
        res.status(500).json({ message: error})
    }
}

const putUsuarioContra = async (req,res) =>{
    try{
        const Usuarioid = req.body.id
        const contraNueva = req.body.contraNueva
        const contra = req.body.contra
        const usuarioModif = await Usuario.findByPk(Usuarioid)
        if( await ConfirmPassword(contra,usuarioModif.contra) ){
            if(usuarioModif){
                usuarioModif.contra = await HashPassword(contraNueva)
                await usuarioModif.save()
                res.status(200).json({message: 'Se ha actualizado la contraseña'})
            }else{
                res.status(404).json({ message:'No se han encontrado el Usuario con ese ID' })
            }
        }
        else{
            res.status(401).json({ message:'No concuenda la contraseña actual' })
        }
        
    }catch (error){
        console.log(error)
        res.status(500).json({message:error})
    }
}

const putUsuarioCorreooYNom = async (req,res) => {
    try{
        const Usuarioid = req.body.id
        const correoNuevo = req.body.correo
        const usuarionom = req.body.usuarionom
        const usuarioModifCN = Usuario.findByPk(Usuarioid)
        if(usuarioModifCN){
            usuarioModifCN.correo = correoNuevo
            usuarioModifCN.usuarionom = usuarionom
            await usuarioModifCN.save()
            res.status(200).json({message: 'Se ha actualizado el exitosamente el usuario'})
        }
        else{
            res.status(404).json({ message:'No se han encontrado el Usuario con ese ID' })
        }
    }catch(error){
        res.status(500).json({message:error})
    }
}

const deleteUsuario = async (req,res) => {
    try{
        const UsuarioId = req.body.id
        const usuarioEliminar = Usuario.findByPk(UsuarioId)
        if(usuarioEliminar){
            await usuarioEliminar.destroy()
            res.status(200).json({message:'Usuario elminado exitosamente'})
        }
        else{
            res.status(404).json({ message:'No se han encontrado el Usuario con ese ID' })
        }
    }catch(error){
        res.status(500).json({message:error})
    }
}

module.exports = {getUsuario,getUnUsuario,postUsuario,putUsuarioContra,putUsuarioContra,putUsuarioCorreooYNom,deleteUsuario,getConfirmarLogin}