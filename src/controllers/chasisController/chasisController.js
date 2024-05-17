import { where } from "sequelize";
import chasisModel from '../../models/chasisModel.js';


async function getAll() {
    try {
        const chasis = await chasisModel.findAll();
        return { data: style };
    }
    catch (error) {
        console.error('error en chasisController.js - GetAll() ' + error);
        return { error: error };
    }
}


async function getById(id) {
    try {
        const chasisID = await chasisModel.findByPk(id);
        return {error, data};
    }
    catch (error) {
        console.log('Error en chasisController.js - getByID() ' + error);
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