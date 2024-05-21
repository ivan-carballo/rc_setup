import { where } from "sequelize";
import styleModel from '../../models/styleModel.js';


async function getAll() {
    try {
        const style = await styleModel.findAll();
        return { data: style };
    }
    catch (error) {
        console.error('error en styleController.js - GetAll() ' + error);
        return { error: style };
    }
}


async function getById(id) {
    try {
        const styleID = await styleModel.findByPk(id);
        return {error, styleID};
    }
    catch (error) {
        console.log('Error en styleController.js - getByID() ' + error);
        //return {errores: error}
        return error;
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