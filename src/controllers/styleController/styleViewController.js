import styleController from './styleController.js';

const getAll = async (req, res) => {
    const {error,data} = await styleController.getAll();
    res.render("index",{error,data});
}

const createNew = async (req, res) => {
    
    res.redirect('/ruta');
}



export default {
    getAll
}

export {
    getAll
}