import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const surfaceModel = sequelize.define('surface', 
    {
        
        surface_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        surface: {
            type: DataTypes.STRING(45),
            allowNull: false
        }

    }
)

export default surfaceModel;