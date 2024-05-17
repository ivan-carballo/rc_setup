import setupController from './setupController.js';

const getAll = async (req, res) => {
    const { error, data } = await setupController.getAll();
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