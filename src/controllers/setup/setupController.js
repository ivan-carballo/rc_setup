import setupModel from "../../models/setupModel.js";

const getAll = async()=> {
    try {
        const setups = await setupModel.find();
        return setups;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const setup = await setupModel.findById(id);
        return setup;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        console.log("property",property)
        console.log("value",value)
        const setup = await setupModel.find({[property]:value})
        return setup;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const setup = await setupModel.create(data);
        return setup;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldsetup = await setupModel.findByIdAndUpdate(id,data);
        const setup = await setupModel.findById(id);
        console.log("setup",setup);
        return setup;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const setup = await setupModel.findByIdAndDelete(id);
        return setup;
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