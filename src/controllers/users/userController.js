import userModel from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const getAll = async()=> {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}


const getById = async(id) =>{
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}


const getByProperty = async(property,value) =>{
    try {
        console.log("property",property)
        console.log("value",value)
        const user = await userModel.find({[property]:value})
        return user;
    } catch (error) {
        return null;
    }
}

const login = async(data) =>{
    const {username,password} = data;
    if(!username || !password) {
        return {error:"No se han facilitado todos los datos",status:400};
    }
    try {
        let user;
        const users = await getByProperty("Nombre de usuario",username);
        user = users[0];

        console.log("Usuario",user);

        if(!user){
            return {error:"No existe el usuario seleccionado",status:400};
        }

        console.log("contraseña",password,user.password);
        const isPasswordCorrect = await bcrypt.compare(password,user.password);

        if(!isPasswordCorrect){
            return {error:"El usuario o la contraseña son incorrectos",status:400};
        }

        console.log("Usuario",user)

        const token = jwt.sign({_id:user._id,username:user.username,role:user.role},process.env.JWT_SECRET,{expiresIn: 60 * 60})
        return {token};

        
    } catch (error) {
        console.error(error);
        return {error:"Error",status:500};
    }
}


const create = async(data) =>{
    try {
        const hash = await bcrypt.hash(data.password,10);
        data.password = hash;
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}


const register = async(data) => {
    const {username,password,passwordRepeat} = data;

    if(!username || !password || !passwordRepeat) {
        return {error:"Se deben rellenar todos los campos"};
    }

    if(password !== passwordRepeat){
        return {error:"Las dos contraseñas deben de ser identicas"};
    }

    const userData = {
        username,
        password,
        role:"user"
    }

    const user = await create(userData);
    return user;
}


const update = async(id,data) =>{
    try {
        const oldUser = await userModel.findByIdAndUpdate(id,data);
        const user = await userModel.findById(id);
        console.log("Usuario",user);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}


const remove = async(id) =>{
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
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
    login,
    register,
    update,
    remove
}

export default functions;