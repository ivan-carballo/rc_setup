import styleController from './styleController.js';

const getAll = async (req, res) => {
    const {error,data} = await styleController.getAll();
    console.log('ESTO ES LA DATA..........' + data);
    res.render("index",{error,data});
}

const getById = async (req, res) => {
    const {error, data} = await styleController.getById(req.params.id)
    console.log('ESTO ES LA DATA POR ID......' + data)
    res.redirect('/ruta', {error, data});
}



export default {
    getAll
}

export {
    getAll
}