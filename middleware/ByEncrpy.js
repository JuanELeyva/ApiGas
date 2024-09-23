const bcrypt = require('bcrypt');
const saltRounds = 10;

async function HashPassword(contraseña){
    try{
        const hash = await bcrypt.hash(contraseña, saltRounds);
        return hash;
    } catch(error){
        return "errror al encrptar la contraseña" + error
    }
}

async function ConfirmPassword(contraseña,hash){
   try {
    const res = await bcrypt.compare(contraseña, hash)
    return res
   } catch(error){
    return "error al comparar"
   }
}

module.exports = {HashPassword,ConfirmPassword}