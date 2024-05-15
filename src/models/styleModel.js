import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const styleModel = sequelize.define('style', 
    {
        
        style_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        style: {
            type: DataTypes.STRING(45),
            allowNull: false
        }

    }
)

export default styleModel;