const Usuario = require('../modelos/ModeloUsuario')
const { HashPassword,ConfirmPassword } = require('../middleware/ByEncrpy')

const getUsuario = async (req,res) => {
    try{
        const UsuarioConsul = Usuario.findAll()
        res.json(UsuarioConsul)
    } catch(error){
        res.status(500).json({ message: error });
    }
}

const getUnUsuario = async (req,res) => {
    try{
        const id = req.body.id
        const UsuarioConsulId = Usuario.findByPk(id)
        if(UsuarioConsulId){
            res.json(UsuarioConsulId)
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
        const contra = HashPassword(req.body.contra)
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
        const contraNueva = req.body.contra
        const UsuarioModif = Usuario.findByPk(Usuarioid)
        if(UsuarioModif){
            UsuarioModif.contra = HashPassword(contraNueva)
            await ProspectoModif.save()
            res.status(200).json({message: 'Se ha actualizado la contraseña'})
        }else{
            res.status(404).json({ message:'No se han encontrado el Usuario con ese ID' })
        }
    }catch (error){
        res.status(500).json({message:error})
    }
}

const putUsuarioCorreooYNom = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({message:error})
    }
}