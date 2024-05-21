import styleController from "./styleController.js";

const getAll = async(req,res)=>{
    const styles = await styleController.getAll();
    res.json({data:styles});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const style = await styleController.getById(id);
    res.json({data:style});
}

const getByProperty=async(req,res)=>{
    const {property,value}=req.query;
    const styles = await styleController.getByProperty(property,value);
    res.json({data:styles})
}

const create = async(req,res)=>{
    const style = await styleController.create(req.body);
    res.json({data:style})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const style = await styleController.update(id,req.body);
    res.json({data:style})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const style = await styleController.remove(id);
    res.json({data:style})
}

export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}