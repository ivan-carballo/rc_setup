import favModel from "../../models/favModel.js";


const getAll = async(userId=null)=> {
    try {
        //if(!userId){
            const setups = await favModel.find();
            return setups;
        //}
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getById = async(id) =>{
    try {
        //if(!userId){
            const setup = await favModel.findById(id);
            return setup;
        //}
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const getByProperty = async(property,value) =>{
    try {
        //if(!userId){
            const setup = await favModel.find({[property]:value})
            return setup;
        //}
    } catch (error) {
        return null;
    }
}

const create = async(data) =>{
    try {
        const setup = await favModel.create(data);
        return setup;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldsetup = await favModel.findByIdAndUpdate(id,data);
        const setup = await favModel.findById(id);
        console.log("setup",setup);
        return setup;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const setup = await favModel.findByIdAndDelete(id);
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