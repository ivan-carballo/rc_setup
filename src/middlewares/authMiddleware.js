import jwt from "jsonwebtoken";




function isTokenCorrect (req,res,next){
    try {
        const authorization = req.headers.authorization;
        if(!authorization){
            return res.status(401).json({error:"No hay Token JWT"});
        }
        const token = authorization.split("Bearer ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({error:"Error al verificar el Token"});
    }
}



function hasSession(req,res,next){
    const user = req.session.user;
    console.log("session user",req.session);
    if(!user){
        return res.redirect("/login");
    }
    next();
}




export {
  isTokenCorrect,
  hasSession
};


export default {
  isTokenCorrect,
  hasSession
};