import styleModel from "../../models/styleModel.js";

const getAll = async()=> {
    try {
        const styles = await styleModel.find();
        return styles;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const style = await styleModel.findById(id);
        return style;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        console.log("property",property)
        console.log("value",value)
        const style = await styleModel.find({[property]:value})
        return style;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const style = await styleModel.create(data);
        return style;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const oldstyle = await styleModel.findByIdAndUpdate(id,data);
        const style = await styleModel.findById(id);
        console.log("stilo",style);
        return style;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const style = await styleModel.findByIdAndDelete(id);
        return style;
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