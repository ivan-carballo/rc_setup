import { DataTypes } from 'sequelize';
import sequelize from "../config/sequelize.js";

const userModel = sequelize.define('user', 
    {
        
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },

        username: {
            type: DataTypes.STRING(15),
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(15),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        rol: {
            type: DataTypes.STRING(15),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },

    }
)

export default userModel;