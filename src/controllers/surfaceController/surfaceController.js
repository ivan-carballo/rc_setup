import { where } from "sequelize";
import surfaceModel from '../../models/surfaceModel.js';


async function getAll() {
    try {
        const surface = await surfaceModel.findAll();
        return { data: style };
    }
    catch (error) {
        console.error('error en surfaceController.js - GetAll() ' + error);
        return { error: error };
    }
}


async function getById(id) {
    try {
        const surfaceID = await surfaceModel.findByPk(id);
        return {error, data};
    }
    catch (error) {
        console.log('Error en surfaceController.js - getByID() ' + error);
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