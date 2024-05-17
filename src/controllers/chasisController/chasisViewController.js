import chasisController from './chasisController.js';

const getAll = async (req, res) => {
    const {error,data} = await chasisController.getAll();
    res.render("index",{error,data});
}

const getById = async (req, res) => {
    const {error, data} = await chasisController.getById(req.params.id)
    res.redirect('/ruta', {error, data});
}



export default {
    getAll
}

export {
    getAll
}