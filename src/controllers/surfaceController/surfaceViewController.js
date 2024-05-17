import surfaceController from './surfaceController.js';


const getAll = async (req, res) => {
    const {error,data} = await surfaceController.getAll();
    res.render("index",{error,data});
}

const getById = async (req, res) => {
    const {error, data} = await surfaceController.getById(req.params.id)
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