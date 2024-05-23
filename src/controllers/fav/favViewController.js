import favController from "./favController.js";
import setupController from "../setup/setupController.js"




const getAll = async(req,res)=>{
    let favs = await favController.getAll();
    favs = favs.reverse();
    let datosSetups = []

    for (let i = 0; favs.length > i; i++) {
        let setupUnitario = await setupController.getById(favs[i]['setupID'])
        datosSetups.push(setupUnitario)
    }

    res.render("./fav/fav.pug", {data:datosSetups});
}





const create = async(req,res)=>{
    let datos = [{username:'karis', setupID:req.body.id}]
    const fav = await favController.create(datos);
    res.redirect("/fav")


}






const remove = async(req,res) => {
    const id = req.body.id;
    const setupID = await favController.getByProperty('setupID',id)
    const fav = await favController.remove(setupID[0]['id']);
    res.redirect('/fav')
}




export default{
    getAll,
    create,
    remove
}