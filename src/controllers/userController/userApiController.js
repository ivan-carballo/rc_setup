import userController from './userController.js';

const getAll = async (req, res) => {
    const { error, data } = await userController.getAll();
    res.json({error, data});
}


const createNew = async (req, res) => {
    
    res.json({ message: 'ok' });
}



export default {
    getAll
}

export {
    getAll
}