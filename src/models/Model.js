import {DataTypes} from 'sequelize';
import {sequelize} from "../config/sequelize.js";

sequelize.define('Model', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    modelId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
})
