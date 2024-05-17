import { where } from "sequelize";
import setupModel from '../../models/setupModel.js';


async function getAll() {
    try {
        const setup = await setupModel.findAll();
        return { data: style };
    }
    catch (error) {
        console.error('error en setupController.js - GetAll() ' + error);
        return { error: error };
    }
}


async function getById(id) {
    try {
        const setupID = await setupModel.findByPk(id);
        return {error, data};
    }
    catch (error) {
        console.log('Error en setupController.js - getByID() ' + error);
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