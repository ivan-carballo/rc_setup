import chasisModel from "../../models/chasisModel.js";

const getAll = async()=> {
    try {
        const chasiss = await chasisModel.find();
        return chasiss;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const chasis = await chasisModel.findById(id);
        return chasis;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        console.log("property",property)
        console.log("value",value)
        const chasis = await chasisModel.find({[property]:value})
        return chasis;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const chasis = await chasisModel.create(data);
        return chasis;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldchasis = await chasisModel.findByIdAndUpdate(id,data);
        const chasis = await chasisModel.findById(id);
        console.log("chasis",chasis);
        return chasis;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const chasis = await chasisModel.findByIdAndDelete(id);
        return chasis;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}

export default functions;