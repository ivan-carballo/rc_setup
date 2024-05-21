import surfaceModel from "../../models/surfaceModel.js";

const getAll = async()=> {
    try {
        const surfaces = await surfaceModel.find();
        return surfaces;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const surface = await surfaceModel.findById(id);
        return surface;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        console.log("property",property)
        console.log("value",value)
        const surface = await surfaceModel.find({[property]:value})
        return surface;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const surface = await surfaceModel.create(data);
        return surface;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldsurface = await surfaceModel.findByIdAndUpdate(id,data);
        const surface = await surfaceModel.findById(id);
        console.log("terreno",surface);
        return surface;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const surface = await surfaceModel.findByIdAndDelete(id);
        return surface;
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