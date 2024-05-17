import surfaceController from './surfaceController.js';

const getAll = async (req, res) => {
    const { error, data } = await surfaceController.getAll();
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