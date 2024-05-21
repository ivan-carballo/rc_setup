import { where } from "sequelize";
import userModel from '../../models/userModel.js';


async function getAll() {
    try {
        const user = await userModel.findAll();
        return { data: user };
    }
    catch (error) {
        console.error('error en userController.js - GetAll() ' + error);
        return { error: error };
    }
}


async function getById(id) {
    try {
        const userID = await userModel.findByPk(id);
        return {error, data};
    }
    catch (error) {
        console.log('Error en userController.js - getByID() ' + error);
        return {error, data}
    }
}


export default {
    getAll,
    getById
}

export {
    getAll,
    getById
}