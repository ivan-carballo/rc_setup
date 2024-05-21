import userController from './userController.js';

const getAll = async (req, res) => {
    const {error,data} = await userController.getAll();
    //res.render("index",{error,data});
    res.json(data);
}

const getById = async (req, res) => {
    const {error, data} = await userController.getById(req.params.id)
    res.redirect('/ruta', {error, data});
}



export default {
    getAll,
    getById
}

export {
    getAll,
    getById
}