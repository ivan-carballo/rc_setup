import styleController from './styleController.js';

const getAll = async (req, res) => {
    const { error, data } = await styleController.getAll();
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