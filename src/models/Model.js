const sequelize = require('sequelize')
const sequelizeInstance = require('../config/sequelize')

sequelizeInstance.define('Model', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    modelId: {
        type: sequelize.DataTypes.UUID,
        defaultValue: sequelize.DataTypes.UUIDV4,
    },
})
