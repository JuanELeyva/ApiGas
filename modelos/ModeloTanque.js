const { DataTypes, Model } = require('sequelize');
const conBD = require('../DB/condb')
const Usuario = require('../ModeloUsuario')

class Tanque extends Model {}

Tanque.init({
    idtanque:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey : true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    litros:{
        type: DataTypes.FLOAT,
        allowNull:false
    }
    },
    {
        sequelize : conBD,
        modelName : 'Tanque',
        tableName : 'tanque',
        timestamps: false
    }
)

Tanque.belongsTo(Usuario,{foreignKey:'usuario',onDelete:'CASCADE'})
Usuario.hasMany(Tanque,{foreignKey:'usuario'})

async function syncModels() {
    try {
      await conBD.sync();
      console.log('Modelos sincronizados correctamente.');
    } catch (error) {
      console.error('Error al sincronizar modelos:', error);
    }
  }
  
  syncModels();

module.exports = Tanque