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
    const setup = await setupController.create(req.body);
    res.json({data:setup})
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