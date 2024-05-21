import chasisController from "./chasisController.js";

const getAll = async(req,res)=>{
    const chasiss = await chasisController.getAll();
    res.json({data:chasiss});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const chasis = await chasisController.getById(id);
    res.json({data:chasis});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const chasiss = await chasisController.getByProperty(property,value);
    res.json({data:chasiss})
}

const create = async(req,res)=>{
    const chasis = await chasisController.create(req.body);
    res.json({data:chasis})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const chasis = await chasisController.update(id,req.body);
    res.json({data:chasis})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const chasis = await chasisController.remove(id);
    res.json({data:chasis})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}