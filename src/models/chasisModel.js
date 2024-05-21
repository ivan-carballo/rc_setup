import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const chasisModel = sequelize.define('chasis', 
    {
        chasis_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        model: {
            type: DataTypes.STRING(45),
            allowNull: false
        }

    }
)

export default chasisModel;