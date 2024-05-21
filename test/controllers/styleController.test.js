import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import styleController from "../../src/controllers/style/styleController.js";

const styleData = {
    style:"neutral"
}

describe("Test de styleController",()=>{
    
    beforeAll(async ()=>{
        await connectDB();
        try {
            await mongoose.connection.collections["styles"].drop();
            
        } catch (error) {
            
        }
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir usuario",async()=>{
        const style = await styleController.create(styleData);
        expect(style.stylename).toEqual(styleData.stylename);
        expect(style.role).toEqual(styleData.role);
    })
    test("buscar usuario por propiedad",async()=>{
        const styles= await styleController.getByProperty("style","neutral");
        expect(styles.length).toBeGreaterThanOrEqual(1);
        const style = styles[0];
        expect(style.stylename).toEqual(styleData.stylename);

    })
    test("buscar usuario por id",async()=>{
        const styles= await styleController.getByProperty("style","neutral");
        const newstyle = await styleController.getById(styles[0]._id);
        expect(newstyle).not.toBeNull();
        expect(newstyle.stylename).toEqual(styleData.stylename);
    })    
})