import styleController from './styleController.js';

const getAll = async (req, res) => {
    const {error,data} = await styleController.getAll();
    res.render("index",{error,data});
}

const getById = async (req, res) => {
    const {error, data} = await styleController.getById(req.params.id)
    res.redirect('/ruta', {error, data});
}



export default {
    getAll
}

export {
    getAll
}