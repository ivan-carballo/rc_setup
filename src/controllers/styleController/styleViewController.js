import styleController from './styleController.js';

const getAll = async (req, res) => {
    const {error,data} = await styleController.getAll();
    //res.render("index",{error,data});
    res.json(data);
}

const getById = async (req, res) => {
    //const {error, data} = await styleController.getById(req.query['id'])
    const {error, data} = await styleController.getById(req.params.id)
    //res.redirect('/ruta', {error, data});
    res.json(data)
}



export default {
    getAll,
    getById
}

export {
    getAll,
    getById
}