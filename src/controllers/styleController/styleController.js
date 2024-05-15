import { where } from "sequelize";
import styleModel from '../../models/styleModel.js';


async function getAll() {
    try {
        const style = await styleModel.findAll();
        return { data: syle };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}



export default {
    getAll
}

export {
    getAll
}