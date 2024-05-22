import jwt from "jsonwebtoken";
import userController  from "../controllers/users/userController.js";

const isAuthenticated = async(req,res,next)=>{
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"No existe Token JWT"});
    }
    
    try {
        const token = authorization.split("Bearer ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user = await userController.getById(decoded._id);
        if(!user){
            return res.status(400).json({error:"No existe el usuario seleccionado"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Error"});
    }
}


const isAdmin = async(req,res,next)=>{
    const authorization  =req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"No existe Token JWT"});
    }
    try {
        const token = authorization.split("Bearer ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user = await userController.getById(decoded._id);
        if(!user){
            return res.status(400).json({error:"No existe el usuario seleccionado"});
        }
        if(user.role !== "admin"){
            return res.status(401).json({error:"No tienes los permisos necesarios"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Error"});
    }
}


export {
    isAuthenticated,
    isAdmin
}