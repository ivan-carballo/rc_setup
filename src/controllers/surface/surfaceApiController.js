import surfaceController from "./surfaceController.js";

const getAll = async(req,res)=>{
    const surfaces = await surfaceController.getAll();
    res.json({data:surfaces});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const surface = await surfaceController.getById(id);
    res.json({data:surface});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const surfaces = await surfaceController.getByProperty(property,value);
    res.json({data:surfaces})
}

const create = async(req,res)=>{
    const surface = await surfaceController.create(req.body);
    res.json({data:surface})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const surface = await surfaceController.update(id,req.body);
    res.json({data:surface})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const surface = await surfaceController.remove(id);
    res.json({data:surface})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}