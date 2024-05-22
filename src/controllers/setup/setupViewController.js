import setupController from "./setupController.js";
import setupModel from "../../models/setupModel.js";


const getAll = async(req,res)=>{
    const setups = await setupController.getAll();
    res.render("./setup/setup.pug", {data:setups});
}


const getById = async (req,res) =>{
    const id = req.params.id
    const setup = await setupController.getById(id);
    res.json({data:setup});
}


const getByProperty=async(req,res)=>{
    const {property1,value1}=req.body['chasis'];
    const setups1 = await setupController.getByProperty("chasis", req.body['chasis']);
    const setups2 = await setupController.getByProperty("surface", req.body['surface']);
    const setups3 = await setupController.getByProperty("style", req.body['style']);

    let setups_comun = [];

    for (let i = 0; setups1.length > i; i++) {
        let setup1_id = setups1[i]['id'];
        
        for (let j = 0; setups2.length > j; j++) {
            let setup2_id = setups2[j]['id'];

                for (let k = 0; setups3.length > k; k++) {
                    let setup3_id = setups3[k]['id'];

                    if (setup1_id === setup2_id && setup1_id === setup3_id) {
                        setups_comun.push(setups3[k]);
                    }
                }
        }
    }

    let none = '';
    if (setups_comun.length == 0) {
        none = 'No hay datos para la busqueda realizada';
    }

    res.render("./setup/find.pug", {data:setups_comun, none:none})
}



const create = async(req,res)=>{
    const datoInput = req.body;
    if (datoInput['owner'] !== '' &&
        datoInput['differential'] !== '' &&
        datoInput['camber'] !== '' &&
        datoInput['height'] !== '' &&
        datoInput['convergence'] !== '' &&
        datoInput['ackerman'] !== '' &&
        datoInput['chasis'] !== '' &&
        datoInput['surface'] !== '') 
    {
        if (parseInt(datoInput['differential']) > 12000 && 
            parseInt(datoInput['camber']) > 0 &&
            parseInt(datoInput['height']) < 2) 
        {
            datoInput['style'] = 'oversteer'
        } else if (parseInt(datoInput['differential']) >= 7500 && 
                    parseInt(datoInput['camber']) > 0 &&
                    parseInt(datoInput['height']) > 2) 
        {
            datoInput['style'] = 'neutral'
        } else {
            datoInput['style'] = 'understeer'
        }

        const setup = await setupController.create(req.body);
        res.redirect("./setup")
    }
    else
    {
        console.log('hay que escribir todo');
    }
}


const createForm = async (req,res) => {
    res.render("./setup/nuevo.pug")
}


const findForm = async (req,res) => {
    res.render("./setup/find.pug")
}


const updateForm = async (req,res) => {
    const setup = await setupController.getById(req.query.id)
    res.render("./setup/update.pug", {data: setup})
}


const update = async(req,res) => {
    let datoInput = req.body;
    const id = req.body.id

    if (datoInput['owner'] !== '' &&
    datoInput['differential'] !== '' &&
    datoInput['camber'] !== '' &&
    datoInput['height'] !== '' &&
    datoInput['convergence'] !== '' &&
    datoInput['ackerman'] !== '' &&
    datoInput['chasis'] !== '' &&
    datoInput['surface'] !== '') 
    {   

        if (parseInt(datoInput['differential']) > 12000 && 
            parseInt(datoInput['camber']) > 0 &&
            parseInt(datoInput['height']) < 2) 
        {
            datoInput['style'] = 'oversteer'
        } 
        else if (parseInt(datoInput['differential']) >= 7500 && 
                parseInt(datoInput['camber']) > 0 &&
                parseInt(datoInput['height']) > 2) 
        {
            datoInput['style'] = 'neutral'
        } else {
            datoInput['style'] = 'understeer'
        }

            delete datoInput.id;
            const setup = await setupController.update(id,datoInput);
            res.redirect('/setup')
    }
    else
    {
        updateFormRepeat(id)
        async function updateFormRepeat(id) {
            const setup = await setupController.getById(id)
            const none = 'Debe rellenar todos los campos';
            res.render("./setup/update.pug", {data: setup, none: none})  
        }
    }
}

const remove = async(req,res) => {
    const id = req.body.id;
    const setup = await setupController.remove(id);
    res.redirect('./setup')
}


export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    createForm,
    findForm,
    updateForm
}