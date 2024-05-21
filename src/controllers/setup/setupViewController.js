import setupController from "./setupController.js";

const getAll = async(req,res)=>{
    const setups = await setupController.getAll();
    //res.json({data:setups});
    res.render("./setup/setup.pug", {data:setups});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const setup = await setupController.getById(id);
    res.json({data:setup});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const setups = await setupController.getByProperty(property,value);
    res.json({data:setups})
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
        if (parseInt(datoInput['differential']) > 15000 && 
            parseInt(datoInput['camber']) > 0 &&
            parseInt(datoInput['height']) < 2) 
        {
            datoInput['style'] = 'oversteer'
        } else if (parseInt(datoInput['differential']) >= 10000 && 
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

const update = async(req,res)=>{
    const id =req.params.id;
    const setup = await setupController.update(id,req.body);
    res.json({data:setup})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const setup = await setupController.remove(id);
    res.json({data:setup})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    createForm
}