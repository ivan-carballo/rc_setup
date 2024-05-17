import { where } from "sequelize";
import styleModel from '../../models/styleModel.js';


async function getAll() {
    try {
        const style = await styleModel.findAll();
        return { data: style };
    }
    catch (error) {
        console.error('error en styleController.js - GetAll() ' + error);
        return { error: error };
    }
}


async function getById(id) {
    try {
        const styleID = await styleModel.findByPk(id);
        return {error, data};
    }
    catch (error) {
        console.log('Error en styleController.js - getByID() ' + error);
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