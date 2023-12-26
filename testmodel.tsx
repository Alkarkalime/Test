const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Shpks extends Model {}

Shpks.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vos: {
        type: DataTypes.STRING
    },
    tariff: {
        type: DataTypes.STRING
    },
    shpk_rank: {
        type: DataTypes.NUMBER
    },
    department: {
        type: DataTypes.STRING
    },
    is_officer:{
        type: DataTypes.BOOLEAN
    },
    shpks_id:{
        type: DataTypes.NUMBER,
        reference:{
            model:'shpks',
            key:'id'
        }
    }
}, {
    timestamps: true ,
    sequelize,
    modelName: 'shpks' // We need to choose the model name
});