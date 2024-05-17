import setupController from './setupController.js';


const getAll = async (req, res) => {
    const {error,data} = await setupController.getAll();
    res.render("index",{error,data});
}

const getById = async (req, res) => {
    const {error, data} = await setupController.getById(req.params.id)
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