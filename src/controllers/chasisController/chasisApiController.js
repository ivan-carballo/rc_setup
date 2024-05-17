import chasisController from './chasisController.js';

const getAll = async (req, res) => {
    const { error, data } = await chasisController.getAll();
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