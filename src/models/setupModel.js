import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const setupModel = sequelize.define('setup', 
    {
        setup_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        style_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        chasis_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        surface_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        differential: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        camber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        divergence: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

export default setupModel;