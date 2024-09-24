const { DataTypes, Model } = require('sequelize');
const conBD = require('../DB/condb')

class Usuario extends Model {}

Usuario.init({
    idusuario:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    correo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    contra:{
        type: DataTypes.STRING,
        allowNull:false
    },
    usuarionom:{
        type: DataTypes.STRING,
        allowNull:false
    }
    },
    {
        sequelize : conBD,
        modelName : 'Usuario',
        tableName : 'usuario',
        timestamps: false
    }
)

async function syncModels() {
    try {
      await conBD.sync();
      console.log('Modelos sincronizados correctamente.');
    } catch (error) {
      console.error('Error al sincronizar modelos:', error);
    }
  }
  
  syncModels();

module.exports = Usuario